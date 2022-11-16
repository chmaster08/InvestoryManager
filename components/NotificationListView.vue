<template>
    <v-card min-width="500px" justify="center"> 
        <v-card-title class="justify-center">通知メールアドレス</v-card-title>
        <v-card-text justify="center">
            <v-row justify="center" class="ml-15">
                <v-col class="mx-auto">
                    <EmailField :email.sync="email"/>
                </v-col>
                <v-col class="d-flex align-center">
                    <v-btn color="primary" @click="AddEmail">Add</v-btn>
                </v-col>
            </v-row>
            <v-row class="justify-center">
            <v-list>
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

            </v-row>
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
            if (this.email.length > 0 && !this.emailList.includes(this.email))
            {
                this.emailList.push(this.email);
                this.email="";
            }
        },
        DeleteEmail(e){
            this.emailList = this.emailList.filter(i => i != e);
        }
    }
}
</script>