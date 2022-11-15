<template>
    <v-card min-width="500px" justify="center"> 
        <v-card-title>Notification List</v-card-title>
        <v-card-text>
            <v-row>
                <v-col>
                    <EmailField :email.sync="email"/>
                </v-col>
                <v-col class="mt-2">
                    <v-btn color="primary" @click="AddEmail">Add</v-btn>
                </v-col>
            </v-row>
            <v-list justify="center">
                <v-list-item v-for="(e,i) in emailList" :key="i">
                    <v-list-item-content>
                        <v-row justify="space-between">
                            <v-col>
                                <v-list-item-title v-text="e" class="mt-2"></v-list-item-title>
                            </v-col>
                            <v-col>
                                <v-btn @click="DeleteEmail(e)">
                                    <v-icon>mdi-delete</v-icon>
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-card-text>
    </v-card>
</template>
<script>
import EmailField from './TextFieldComponents/EmailField.vue';
export default{
    components : {EmailField},
    props:{
        emailList :Array,
    },

    data(){
        return {
            email : "",
        };
    },

    methods:{
        AddEmail(){
            if (this.email.length > 0)
            {
                this.emailList.push(this.email);
            }
        },
        DeleteEmail(e){
            this.emailList = this.emailList.filter(i => i != e);
        }
    }
}
</script>