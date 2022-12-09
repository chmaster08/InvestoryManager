<template>
  <v-container align-content="stretch">
    <v-row class="mb-auto">
      <v-btn class="ml-auto mb-2 mr-5" @click="LoadTableData" height="50" width="100">
        <v-icon>mdi-sync</v-icon>
      </v-btn>
    </v-row>
      <DataTable :items="items" />
  </v-container>
</template>

<script>
import DataTable from '../components/DataTable.vue';
export default {
  name: 'IndexPage',
  components:{DataTable},
  data(){
    return{
            items:[],
            timerID: undefined,
    }
  },
  methods: {
    LoadTableData: async function(){
      var token = this.$store.getters["auth/dispToken"];
      await this.$axios.get(this.$config.apiURL +"get_inventory?token="+token,{
        headers:{"content-type":"application/x-www-form-urlencoded"}
      })
      .then((response)=>{
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
        this.$router.push('/login');
        if (error.response)
        {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.statusText);
          console.log(error.response.headers);
        }
      })
    }
  },

  mounted(){
    console.log("mounted");
    this.LoadTableData();
  },
  beforeUnmount() {
    this.$store.commit("table/clearIntervalID");
  },
}
</script>
