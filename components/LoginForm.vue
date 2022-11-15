<template>
    <v-form>
        <v-card width="400px">
            <v-card-title class="headline">Login</v-card-title>
            <v-card-text>
                <PasswordField :password.sync="password"/>
            </v-card-text>
            <v-card-actions>
                <v-btn @click="submit">Login</v-btn>
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
        };
    },
    methods: {
        submit(){
            console.log(this.password);
        }
    },
}
</script>