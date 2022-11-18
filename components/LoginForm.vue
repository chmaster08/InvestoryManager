<template>
    <v-form>
        <v-card width="500px" class="mt-10 pa-5">
            <v-card-title class="headline justify-center text-primary">Login</v-card-title>
            <v-card-text class="justify-center">
                <PasswordField :password.sync="password"/>
            </v-card-text>
            <v-card-actions class="justify-center">
                <v-btn @click="submit" width="150px" height="50px">Login</v-btn>
            </v-card-actions>
        </v-card>
    </v-form>
</template>
<script>
import PasswordField from './TextFieldComponents/PasswordField.vue';
export default {
    components :{PasswordField},
    data(){
        return {
            password:"",
            pubkey:"",
        };
    },
    methods: {
        submit(){
            if (this.password.length > 0 && this.password == "AAAA")
            {
                this.login();
                this.$store.commit("auth/setToken", this.password);
                console.log(this.$store.getters["auth/dispToken"]);
                this.$router.push("/");
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

        login(){
            const encypt = require("node-rsa");
            var bufkey = Buffer.from(this.pubkey);

        }
    },

    mounted()
    {
        this.getPubkey();
    }
}
</script>