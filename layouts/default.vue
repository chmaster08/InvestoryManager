<template>
  <v-app dark>
    <span class="bg"></span>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-spacer />
      <v-toolbar-title v-text="title" class="flex text-center" />
      <v-spacer />
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; Team Kansai A</span>
    </v-footer>
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
<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [
        {
          icon: 'mdi-table',
          title: '台帳',
          to: '/'
        },
        {
          icon: 'mdi-cog',
          title: '設定',
          to: '/Settings'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title:"在庫管理台帳システム"
    }
  }
}
</script>
