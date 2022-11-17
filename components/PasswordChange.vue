<template>
    <v-card min-width="500px">
        <v-card-title class="justify-center">パスワード変更</v-card-title>
        <v-card-content>
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
                    <v-btn color="primary">変更</v-btn>
                </v-row>
            </v-container>
        </v-card-content>
    </v-card>
</template>
<script>
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
        
    }
}

</script>