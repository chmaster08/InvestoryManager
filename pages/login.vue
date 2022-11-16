<template>
    <v-container class="mx-auto">
      <v-row>
        <LoginFormVue class="mx-auto" />
      </v-row>
    </v-container>
</template>
<script>
import LoginFormVue from '../components/LoginForm.vue';
export default{
  layout : 'loginlayout',
    components : {LoginFormVue},
};
</script>