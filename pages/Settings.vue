<template>
    <v-container>
        <v-row dense class="my-5" justify="center">
            <NotificationListViewVue :emailList="emailList"/>
        </v-row>
        <v-row dense justify="center">
            <LoginFormVue/>
        </v-row>
    </v-container>
</template>
<script>
import NotificationListViewVue from '../components/NotificationListView.vue';
import LoginFormVue from '../components/LoginForm.vue';
export default{
    components :{LoginFormVue, NotificationListViewVue},

    data(){
        return{
            emailList :
             [
                "takuto.moriyasu@gmail.com",
                "yaguchi.shacho@gmail.com",
            ],
        }
    }
}
</script>