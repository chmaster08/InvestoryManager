<template>
  <v-app dark>
    <span class="bg"></span>
    <v-main>
    <v-container fill-height>
        <nuxt />
    </v-container>
    </v-main>
  </v-app>
</template>
<style scoped>
.bg {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: url("https://cdn.pixabay.com/photo/2016/03/26/13/09/organic-1280537_1280.jpg")
    no-repeat center center;
  background-size: cover;
  background-color: red;
}
</style>