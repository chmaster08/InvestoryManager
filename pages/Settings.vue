<template>
    <v-container>
        <v-row dense class="my-5" justify="center">
            <NotificationListViewVue :emailList="emailList"/>
        </v-row>
        <v-row dense class="my-5" justify="center">
            <Threshold/>
        </v-row>
    </v-container>
</template>
<script>
import NotificationListViewVue from '../components/NotificationListView.vue';
import Threshold from '../components/Threshold.vue';
export default{
    components :{ NotificationListViewVue, Threshold },

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