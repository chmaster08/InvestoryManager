<template>
    <v-container class="modal">
        <LoginFormVue class="modal-wrap" />
    </v-container>
</template>
<style lang="scss" scoped>
</style>
.modal {
   position: fixed;
   top: 0;
   width: 100%;
   height: 100%;
   .modal-wrap {
     background-color: rgba(0,0,0,0.5);
     height: 100%;
   }
 }
<script>
import LoginFormVue from '../components/LoginForm.vue';
export default{
    components : {LoginFormVue},
};
</script>