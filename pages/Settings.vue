<template>
    <v-container>
        <v-row dense class="my-5" justify="center">
            <NotificationListViewVue :emailList="emailList"/>
        </v-row>
        <v-row dense class="my-5" justify="center">
            <Threshold :threshold.sync="threshold" @savethreshold="savethreshold"/>
        </v-row>
        <v-row justify="center">
            <PasswordChange :prevPassword="currentPass" :newPassword="newPass"/>
        </v-row>
    </v-container>
</template>
<script>
import NotificationListViewVue from '../components/NotificationListView.vue';
import PasswordChange from '../components/PasswordChange.vue';
import Threshold from '../components/Threshold.vue';
export default{
    components :{ NotificationListViewVue, Threshold, PasswordChange },

    data(){
        return{
            emailList :[],
            threshold : 50,
            currentPass :"",
            newPass : "",
        }
    },
    methods:{
        savethreshold(){
            this.updateThreshold();
            console.log(this.threshold); 
        },

        callGetEmailList: async function(){

            var tokenString = "?token="+this.$store.getters["auth/dispToken"];
            var apiURL = this.$config.apiURL + "getEmailList"+tokenString;
            await this.$axios.get(apiURL, {
                headers: { "content-type": "application/x-www-form-urlencoded" }
            })
                .then((response) => {
                    response.data.body.forEach(element => {
                        this.emailList.push(element);
                    });
                })
                .catch((error) => {
                    if (error.response.status == 403)
                    {
                        this.$router.push('/login');
                    }
                    if (error.response) {
                        console.log(error.response.data);
                        console.log(error.response.status);
                        console.log(error.response.statusText);
                        console.log(error.response.headers);
                    }
                });
        },

        updateThreshold : async function(){
            var thresholdstring = "threshold="+this.threshold;
            var tokenString = "token="+this.$store.getters["auth/dispToken"];
      await this.$axios.get(this.$config.apiURL +"setThreshold?" + thresholdstring+"&"+tokenString,{
        headers:{"content-type":"application/x-www-form-urlencoded"}
      })
      .then((response)=>{

      })
      .catch((error)=>{
          if (error.response.status == 403) {
              this.$router.push('/logout');
          }
        if (error.response)
        {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.statusText);
          console.log(error.response.headers);
        }
      });
        },
        getThreshold : async function(){
            var tokenString = "token="+this.$store.getters["auth/dispToken"];
      await this.$axios.get(this.$config.apiURL +"getThreshold?" +tokenString,{
        headers:{"content-type":"application/x-www-form-urlencoded"}
      })
      .then((response)=>{
        this.threshold = response.data.body;
        console.log(response.data.body);
      })
      .catch((error)=>{
          if (error.response.status == 403) {
              this.$router.push('/logout');
          }
        if (error.response)
        {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.statusText);
          console.log(error.response.headers);
        }
      });
        },


    },
    created(){
        console.log("created");
        this.callGetEmailList();
        this.getThreshold();
    }
}
</script>