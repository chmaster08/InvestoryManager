<template>
    <v-form>
        <v-card width="500px" class="mt-10 pa-5">
            <v-card-title class="headline justify-center text-primary">Login</v-card-title>
            <v-card-text class="justify-center">
                <PasswordField :password.sync="password" :error="IsInvalid" v-on:callLogin="submit"/>
            </v-card-text>
            <v-card-actions class="justify-center">
                <v-btn @click="submit" width="150px" height="50px" :loading="loading" :color="btnColor">Login</v-btn>
            </v-card-actions>
        </v-card>
    </v-form>
</template>
<script>
import PasswordField from './TextFieldComponents/PasswordField.vue';
import Cookies, { CookieChangeOptions } from 'universal-cookie';
export default {
    components :{PasswordField},
    data(){
        return {
            password:"",
            pubkey:"",
            prvkey:"",
            token:"",
            IsInvalid : false,
            loading:false,
        };
    },
    computed:{
      btnColor(){
        if (this.password.length > 0)
        {
          return "primary";
        }
        else
        {
          return "";
        }
      } 
    },
    methods: {
        submit  : async function(){
            if (this.password.length > 0)
            {
              this.loading = true;
                await this.login();
                console.log(this.token);
              this.loading = false;
                if (this.token.length > 0)
                {
                    this.$store.commit("auth/setToken", this.token);
                    const cookies = new Cookies();
                    cookies.set('ACCESS_TOKEN',this.token);
                    console.log(this.$store.getters["auth/dispToken"]);
                    this.$router.push("/");
                }
                else
                {

                }
            }
            else
            {
                this.password = "";
            }
        },

        getPubkey : async function(){

      await this.$axios.get(this.$config.apiURL +"get_pubkey",{
        headers:{"content-type":"application/x-www-form-urlencoded"}
      })
      .then((response)=>{
        this.pubkey = response.data.body;
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
        },
        getPrvkey : async function(){

      await this.$axios.get(this.$config.apiURL +"get_prvkey",{
        headers:{"content-type":"application/x-www-form-urlencoded"}
      })
      .then((response)=>{
        this.prvkey = response.data.body;
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
        },

        login: async function(){

                await this.$axios.get(this.$config.apiURL+"login?pass=" + this.password  ,{
                    headers: { "content-type": "application/x-www-form-urlencoded" }
                })
                .then((response)=>{
                    console.log("Token Request Status : " + response.status);
                    if (response.status == 200)
                    {
                        console.log(response.data.body);
                        this.token = response.data.body;
                    }
                    else
                    {
                        this.IsInvalid = true;
                    }

                })
                .catch((error)=>
                {
                  this.IsInvalid = true;
                    if(error.response)
                    {
                        console.log(error.response.data);
                        console.log(error.response.status);
                        console.log(error.response.statusText);
                        console.log(error.response.headers);

                    }
                    return null;
                })

        }
    },
}
</script>