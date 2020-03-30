<template>
  <v-app>
    
    <app-drawer
      :items="drawerList"
      :drawerShow="drawerShow"
    />

    <app-navbar
      :toggleDrawer="toggleDrawer"
    />

    <!-- Sizes your content based upon application components -->
    <v-content>

      <!-- Provides the application the proper gutter -->
      <v-container fluid>

        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-content>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>
import Drawer from './Components/Layout/Drawer.vue';
import Navbar from './Components/Layout/Navbar.vue';

export default {
  name: 'App',

  components: {
    'app-drawer': Drawer,
    'app-navbar': Navbar
  },

  data: () => ({
    drawerShow: false,
    drawerList: [
      { title: 'Home', icon: 'mdi-account-box' }
    ],
  }),

  methods: {
    toggleDrawer () {
      this.drawerShow = !this.drawerShow
    }
  }
};
</script>
