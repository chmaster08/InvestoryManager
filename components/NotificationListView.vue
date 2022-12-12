<template>
    <v-card min-width="500px" justify="center"> 
        <v-card-title class="justify-center">通知メールアドレス</v-card-title>
        <v-card-text justify="center">
            <v-row justify="center" class="ml-15">
                <v-col class="mx-auto">
                    <EmailField :email.sync="email"/>
                </v-col>
                <v-col class="d-flex align-center">
                    <v-btn color="primary" @click="AddEmail">追加</v-btn>
                </v-col>
            </v-row>
            <v-row v-if="InValidEmailInput" justify="center" class="my-auto mr-15">
                <p>不正なメールアドレスです</p>
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
import { async } from 'q';
import EmailField from './TextFieldComponents/EmailField.vue';
export default{
    components : {EmailField},
    props:{
        emailList :Array,
    },

    data(){
        return {
            email : "",
            InValidEmailInput : false,
        };
    },

    methods:{
        AddEmail(){
            if (this.email.length > 0 && !this.emailList.includes(this.email))
            {
                this.callAddEmailAPI(this.email);
            }
        },
        DeleteEmail(e){
            this.callDeleteEmailAPI(e);
        },

        callDeleteEmailAPI : async function(index)
        {
            var email = this.emailList.filter(i => i == index);

            var tokenString = "token="+this.$store.getters["auth/dispToken"];
            var apiURL = this.$config.apiURL+"deleteEmail?" + tokenString +"&email="+email;
            await this.$axios.get(apiURL, {
                headers: { "content-type": "application/x-www-form-urlencoded" }
            })
                .then((response) => {
                    if (response.status == 200) {
                        this.emailList = this.emailList.filter(i => i != index);
                    }
                    else {
                    }
                })
                .catch((error) => {
                    if (error.response.status == 403) {
                        this.$router.push('/logout');
                    }
                    if (error.response) {
                        console.log(error.response.data);
                        console.log(error.response.status);
                        console.log(error.response.statusText);
                        console.log(error.response.headers);
                    }
                });

        },
        callAddEmailAPI : async function(email)
        {
            if (!this.ValidateEmail())
            {
                this.InValidEmailInput = true;
                return;
            }

            this.InValidEmailInput = false;
            var tokenString = "&token="+this.$store.getters["auth/dispToken"];
            var tokenURL = this.$config.apiURL+"addEmail?" + "email="+email+tokenString;
            console.log("EmailURL:"+tokenString);
            await this.$axios.get(tokenURL, {
                headers: { "content-type": "application/x-www-form-urlencoded" }
            })
                .then((response) => {
                    if (response.status == 200) {
                        this.emailList.push(this.email);
                        this.email = "";
                    }
                })
                .catch((error) => {
                    if (error.response.status == 403) {
                        this.$router.push('/logout');
                    }
                    if (error.response) {
                        console.log(error.response.data);
                        console.log(error.response.status);
                        console.log(error.response.statusText);
                        console.log(error.response.headers);
                    }
                });

        },

        ValidateEmail()
        {
            var pattern = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]+.[A-Za-z0-9]+$/;
            if (pattern.test(this.email))
            {
                return true;
            }
            else
            {
                false;
            }

        }
    },
}
</script>