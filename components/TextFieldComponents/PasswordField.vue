<template>
    <v-text-field
    prepend-icon="mdi-lock"
    :append-icon = "show ? 'mdi-eye' : 'mdi-eye-off'"
     :value="password"
     :type="show ? 'text' : 'password'"
     :error = "error"
     counter
     @click:append="show = !show"
      label="Password"
      @keydown.enter.prevent="callLogin"
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
        show:{
            type : Boolean,
            default:false,
        },
        error:{
            type:Boolean,
            default:false,
        }
    },
    methods:{
        callLogin(){
            this.$emit('callLogin');
        }
    }
};
</script>