<template>
  <v-app>
    
    <app-drawer
      :items="drawerList"
      :drawerShow="drawerShow"
      :toggleDrawer="toggleDrawer"
    />

    <app-navbar
      :toggleDrawer="toggleDrawer"
    />

    <!-- Sizes your content based upon application components -->
    <v-content>

      <!-- Provides the application the proper gutter -->
      <v-container>

        <!-- If using vue-router -->
        <transition name="fade" mode="out-in">
          <router-view :openMusic="openMusic"></router-view>
        </transition>

        <div class="text-center">
          <v-bottom-sheet 
            hide-overlay 
            persistent
            v-model="isMusic"
          >
            <v-card tile>
              <v-progress-linear
                :value="50"
                class="my-0"
                height="3"
              ></v-progress-linear>

              <v-list>
                <v-list-item>
                    <v-list-item-avatar>
                    <v-img :src="'https://cdn.vuetifyjs.com/images/lists/1.jpg'"></v-img>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title>The Walker</v-list-item-title>
                    <v-list-item-subtitle>Fitz & The Trantrums</v-list-item-subtitle>
                  </v-list-item-content>

                  <v-spacer></v-spacer>

                  <v-list-item-icon>
                    <v-btn icon>
                      <v-icon>mdi-rewind</v-icon>
                    </v-btn>
                  </v-list-item-icon>

                  <v-list-item-icon :class="{ 'mx-5': $vuetify.breakpoint.mdAndUp }">
                    <v-btn icon>
                      <v-icon>mdi-pause</v-icon>
                    </v-btn>
                  </v-list-item-icon>

                  <v-list-item-icon
                    class="ml-0"
                    :class="{ 'mr-3': $vuetify.breakpoint.mdAndUp }"
                  >
                    <v-btn icon>
                      <v-icon>mdi-fast-forward</v-icon>
                    </v-btn>
                  </v-list-item-icon>

                  <v-spacer></v-spacer>

                  <v-list-item-icon>
                    <v-btn icon>
                      <v-icon>mdi-star</v-icon>
                    </v-btn>
                  </v-list-item-icon>

                  <v-list-item-icon >
                    <v-btn icon>
                      <v-icon>mdi-playlist-music</v-icon>
                    </v-btn>
                  </v-list-item-icon>

                  <v-list-item-icon >
                    <v-btn icon>
                      <v-icon>mdi-repeat</v-icon>
                    </v-btn>
                  </v-list-item-icon>
                  
                  <v-list-item-icon >
                    <v-btn icon>
                      <v-icon>mdi-delete</v-icon>
                    </v-btn>
                  </v-list-item-icon>
                  
                  <v-list-item-icon ml-5 @click="closeMusic">
                    <v-btn icon>
                      <v-icon>mdi-close</v-icon>
                    </v-btn>
                  </v-list-item-icon>

                </v-list-item>
              </v-list>
            </v-card>
          </v-bottom-sheet>
        </div>
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
    isMusic: false,
    drawerList: [
      { 
        title: 'Home', 
        icon: 'mdi-home',
        href: '/'
      },
      { 
        title: 'Profile', 
        icon: 'mdi-account-box',
        href: '/users/1'
      },
      { 
        title: 'Favorites', 
        icon: 'mdi-star',
        href: '/favorite'
      },
      { 
        title: 'Playlists', 
        icon: 'mdi-playlist-music',
        href: '/playlists'
      },
      { 
        title: 'Download Music', 
        icon: 'mdi-cloud-download',
        href: '/download-music'
      },
      {
        title: 'Search in I-NET',
        icon: 'mdi-magnify',
        href: '/search'
      },
      { 
        title: 'All Music', 
        icon: 'mdi-music',
        href: '/music'
      },
      { 
        title: 'Feedback', 
        icon: 'mdi-comment-quote',
        href: '/feedback'
      },
      { 
        title: 'Other Projects', 
        icon: 'mdi-projector',
        href: '/projects'
      }
    ],
  }),

  methods: {
    toggleDrawer () {
      this.drawerShow = !this.drawerShow
    },
    openMusic () {
      this.isMusic = true
    },
    closeMusic () {
      this.isMusic = false
    }
  }
};
</script>

<style lang="scss" scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>