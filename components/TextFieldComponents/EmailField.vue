<template>
    <v-text-field
    :value="email"
    label="メールアドレス"
    prepend-icon="mdi-mail"
    @input="$emit('update:email', $event)" 
    >

    </v-text-field>
</template>
<script>
export default{
    props:{
        email:{
            type:String,
            default:"",
            require:true,
        },
    },
    data(){
        return {
      rules: [
        v => !!v || '',
        v => /.+@.+\..+/.test(v) || ''
      ]
    }
    }
}
</script>