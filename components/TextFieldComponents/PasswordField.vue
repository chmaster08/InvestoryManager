<template>
    <v-text-field
    prepend-icon="mdi-lock"
    :append-icon = "show ? 'mdi-eye' : 'mdi-eye-off'"
     :value="password"
     :type="show ? 'text' : 'password'"
     counter
     @click:append="show = !show"
      label="Password"
      @input="$emit('update:password',$event)"></v-text-field>
</template>
<script>
export default {
    props:{
        password :{
            type: String,
            default : "",
            required : true,
        },
    },
    data(){
        return{
            show : false,
        };
    },
};
</script>