<template>
  <v-container align-content="stretch">
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
      await this.$axios.get(this.$config.apiURL +"get_inventory",{
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

  created(){
    clearInterval(this.timerID);
    this.LoadTableData();
    this.timerID = setInterval(() => this.LoadTableData(), 10000);
  }
}
</script>
