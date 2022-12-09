<template>
    <v-card min-width="500px">
        <v-card-title class="justify-center">パスワード変更</v-card-title>
        <v-card-text>
            <v-container>
                <v-row justify="center">
                    <p>変更前パスワード</p>
                </v-row>
                <v-row class="mx-10">
                    <PasswordField :password.sync="prevPassword" :show="true"/>
                </v-row>
                <v-row justify="center">
                    <p>変更後パスワード</p>
                </v-row>
                <v-row class="mx-10">
                    <PasswordField :password.sync="newPassword" :show="true"/>
                </v-row>
                <v-row justify="center" class="mb-10">
                    <v-btn color="primary" @click="submit">変更</v-btn>
                </v-row>
                <v-row justify="center" class="mb-10" v-show="this.showText">
                    <p>{{this.resultText}}</p>
                </v-row>
            </v-container>
        </v-card-text>
    </v-card>
</template>
<script>
import { async } from 'q';
import PasswordField from './TextFieldComponents/PasswordField.vue';
export default{
    components:{PasswordField},
    props:
    {
        prevPassword:{
            type:String,
            default:"",
            required:true,
        },

        newPassword :
        {
            type:String,
            default:"",
            required:true,
        }
        
    },

    data(){
        return{
            isSuccess : false,
            attemptChange : false,
            resultText : "",
            showText:false,
        };
    },
    methods:{
        submit: async function(){

            this.showText = false;
            if (this.prevPassword == this.newPassword)
            {
                this.showText = true;
                this.resultText = "同じパスワードです";
                return;

            }
            await this.changepass();
            if (this.isSuccess && this.attemptChange) {
                this.showText = true;
                this.resultText = "パスワードが変更されました。";
            }
            else if (this.attemptChange) {
                this.showText = true;
                this.resultText = "パスワード変更に失敗しました。";
            }

        },
        changepass : async function(){
            this.attemptChange = true;
            var tokenString = "&token="+this.$store.getters["auth/dispToken"];
            var oldpassString = "oldpass="+this.prevPassword;
            var newpassString = "newpass="+this.newPassword;
            console.log(oldpassString)
      await this.$axios.get(this.$config.apiURL +"changepassword?" + oldpassString+"&"+newpassString+tokenString,{
        headers:{"content-type":"application/x-www-form-urlencoded"}
      })
      .then((response)=>{
        if (response.status == 200)
        {
            this.isSuccess = true;
        }
        else
        {
            this.isSuccess = false;
        }

      })
      .catch((error)=>{
          if (error.response.status == 403) {
              this.$router.push('/login');
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
    }
}

</script>