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
            emailList :
             [
                "takuto.moriyasu@gmail.com",
                "yaguchi.shacho@gmail.com",
            ],
            threshold : 50,
            currentPass :"",
            newPass : "",
        }
    },
    methods:{
        savethreshold(){
            console.log(this.threshold); 
        }
    }
}
</script>