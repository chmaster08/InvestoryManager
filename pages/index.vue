<template>
  <v-container align-content="stretch">
      <DataTable :items="dummyItems" />
  </v-container>
</template>

<script>
import DataTable from '../components/DataTable.vue';
export default {
  name: 'IndexPage',
  components:{DataTable},
  data(){
    return{
            dummyItems : [
                {
                    date : "2022/11/12 13:12:32",
                    UserID : "e13498",
                    diff : 4,
                },
                {
                    date : "2022/11/12 14:25:10",
                    UserID : "Unknown",
                    diff : 1,
                },

                {
                    date : "2022/11/12 14:56:50",
                    UserID : "e13498",
                    diff : 2,
                }
            ]
    }
  }
}
</script>
