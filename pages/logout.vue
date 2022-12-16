<template>
    <v-container justify="center">
      <v-row justify="center">
      <v-card width="400" height="200" class="justify-center my-auto">
        <v-card-title class="justify-center mb-5">ログアウト</v-card-title>
        <v-card-text justify="stretch">
          <v-row class="mx-1">
            <p>セッションの有効期限が切れました。</p>
            <p>ログイン画面に戻っています....</p>
          </v-row>
          <v-row justify="center">
            <v-progress-circular indeterminate color="primary" class="justify-center"/>
          </v-row>
        </v-card-text>
      </v-card>

      </v-row>
    </v-container>
</template>
<script>
export default{
  layout : 'loginlayout',
  created(){
    this.clearCookies();
    setTimeout(()=>{this.$router.push('/login')},3000);
  }
  ,
  methods:{
    clearCookies()
    {

      this.$cookies.set('ACCESS_TOKEN', "");
    }
  }
}
</script>