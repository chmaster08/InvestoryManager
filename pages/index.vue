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
    }
  },
  methods: {
    LoadTableData: async function(){
      await this.$axios.get(this.$config.apiURL +"get_inventory",{
        headers:{"content-type":"application/x-www-form-urlencoded"}
      })
      .then((response)=>{
        response.data.body.forEach(item =>{
          var datetime = item[0]
          var id = item[1]
          var num = item[2]
          this.$store.commit("table/addTableItem", {dateTime:datetime,id:id,num:num});
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
    this.LoadTableData();
  }
}
</script>
