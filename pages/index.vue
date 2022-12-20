<template>
  <v-container>
    <v-row class="mb-5 ml-1" justify="start">
        <v-card height="150" min-width="450" class="mr-5">
          <v-card-title>システムの状態</v-card-title>
          <v-card-text class="mt-5">
            <v-row>
              <v-col>
                <v-icon :color="this.iconColor" x-large>{{ this.systemstate }}</v-icon>
              </v-col>
              <v-col class="mt-1">
                <h2>{{ this.statemsg }}</h2>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
        <v-card height="150" max-width="500" min-width="300">
          <v-card-title>現在の在庫量</v-card-title>
          <v-card-text class="mt-5">
            <h1>{{ this.currentNum }}</h1>
          </v-card-text>
        </v-card>
      <v-btn @click="updateInventryData" height="60" width="180" :loading="loading" class="ml-auto mt-auto">
        <v-icon x-large>mdi-sync</v-icon>
      </v-btn>
    </v-row>
      <DataTable :items="items" />
  </v-container>
</template>

<script>
import DataTable from '../components/DataTable.vue';
export default {
  name: 'IndexPage',
  components:{ DataTable},
  data(){
    return{
            items:[],
            timerID: undefined,
            loading:false,
            currentNum:0,
            systemstate : 'mdi-checkbox-marked-circle',
            iconColor : 'green',
            statemsg:'システムは正常です'
    }
  },
  methods: {
    LoadTableData: async function(){
      this.loading= true;
      var token = this.$store.getters["auth/dispToken"];
      await this.$axios.get(this.$config.apiURL +"get_inventory?token="+token,{
        headers:{"content-type":"application/x-www-form-urlencoded"}
      })
      .then((response)=>{
        this.chnageSystemState('normal');
        this.$store.commit("table/clearTableItems");
        response.data.body.forEach(item =>{
          var datetime = item[0]
          var id = item[1]
          var num = item[2]
          this.$store.commit("table/addTableItem", {dateTime:datetime,id:id,num:num});
          console.log("Table data refreshed.");
        });
        this.items = this.$store.getters["table/getTableData"];
      })
      .catch((error)=>{
        this.chnageSystemState('alert');
        if (error.response)
        {
          if (error.response.status == 403) {
            this.$router.push('/logout');
          }
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.statusText);
          console.log(error.response.headers);
        }
      }).finally(()=>{this.loading = false;});
    },

    getCurrentNum: async function(){
      var token = this.$store.getters["auth/dispToken"];
      await this.$axios.get(this.$config.apiURL +"get_current_number?token="+token,{
        headers:{"content-type":"application/x-www-form-urlencoded"}
      })
      .then((response)=>{
        this.chnageSystemState('normal');
        this.currentNum = response.data.body;
        console.log(response);
      })
      .catch((error)=>{
        this.chnageSystemState('alert');
        if (error.response)
        {
          if (error.response.status == 403) {
            this.$router.push('/logout');
          }
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.statusText);
          console.log(error.response.headers);
        }
      });
    },
    updateInventryData()
    {
      this.LoadTableData();
      this.getCurrentNum();

    },
    chnageSystemState(state)
    {
      if (state == 'normal')
      {
        this.systemstate = 'mdi-checkbox-marked-circle';
        this.iconColor = 'green';
        this.statemsg='システムは正常です';
      }
      else{
        this.systemstate = 'mdi-alert-circle';
        this.iconColor = 'red';
        this.statemsg='接続できません';

      }
    },
  },

  mounted(){
    console.log("mounted");
    this.LoadTableData();
    this.getCurrentNum();
  },
  beforeUnmount() {
    this.$store.commit("table/clearIntervalID");
  },
}
</script>
