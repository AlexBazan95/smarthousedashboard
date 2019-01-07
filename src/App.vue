<template>
  <v-app id="keep">

    <v-navigation-drawer v-model="drawer" fixed clipped class="grey lighten-5 bl-1" app>
      <v-list dense class="grey lighten-5 pt-2">

        <template v-for="(item, i) in items">

          <v-divider v-if="item.divider" :key="i" dark class="my-3"></v-divider>

          <router-link v-else :key="i" :to="item.link">
            <v-list-tile @click="">
              <v-list-tile-action>
                <v-icon>{{ item.icon }}</v-icon>              
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title class="grey--text">
                  {{ item.text }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </router-link>

        </template>

        <MainMenu/>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar color="amber" app absolute clipped-left>

      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>

      <span class="title ml-3 mr-5">
        <router-link to="/">
          <span class="text-black">
            Office
          </span>
          <span class="font-weight-light text-black">
            Radio
          </span>
        </router-link>
      </span>

      <v-text-field solo-inverted flat hide-details label="Search" prepend-inner-icon="search"></v-text-field>

      <v-spacer></v-spacer>

    </v-toolbar>

    <v-content>
      <router-view/>
    </v-content>

  </v-app>
</template>

<script>
  import MainMenu from './components/MainMenu'
  export default {
    components: {
      MainMenu
    },
    data: () => ({
      name: 'App',
      drawer: null,
      items: [
        { icon: 'lightbulb_outline', text: "What's new", link: "/whats-new" },
        { icon: 'queue_music', text: 'Queue', link: "/queue" },
        { divider: true, text: '', link: "/"  },
        { icon: 'archive', text: 'Archive', link: "/archive" },
        { icon: 'delete', text: 'Trash', link: "/trash" },
        { divider: true, text: '', link: "/"  },
        { icon: 'settings', text: 'Settings', link: "/settings" },
        { icon: 'help', text: 'Help', link: "/help" },
        { icon: 'phonelink', text: 'Downloads', link: "/downloads" },
      ]
    })
  }
</script>

<style lang="stylus">
  #keep
    .v-navigation-drawer__border
      display: none
    .bl-1
      width: 235px !important
      border-right:1px solid rgba(0,0,0,0.12) !important
    a
      text-decoration:none
    .text-black
      color:#000
    .v-navigation-drawer--open ~ .v-content
      padding-left:230px !important
</style>