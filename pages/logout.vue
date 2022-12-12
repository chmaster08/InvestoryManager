<template>
    <v-container justify="center">
      <v-row justify="center">
      <v-card width="400" height="150" class="justify-center my-auto">
        <v-card-title>ログアウト</v-card-title>
        <v-card-text class="justify-center">
          <p>セッションの有効期限が切れました。</p>
        </v-card-text>
      </v-card>

      </v-row>
    </v-container>
</template>
<script>
export default{
  created(){
    setTimeout(()=>{this.$router.push('/login')},3000);
  }
}
</script>