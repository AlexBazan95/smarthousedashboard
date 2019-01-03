<template>
  <v-app id="keep">

    <v-navigation-drawer v-model="drawer" fixed clipped class="grey lighten-5 bl-1" app>
      <v-list dense class="grey lighten-5">
        <div v-for="(item, i) in items">
          <v-layout v-if="item.heading" :key="i" row align-center>
            <v-flex xs6>
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
            </v-flex>
          </v-layout>

          <v-divider v-else-if="item.divider" :key="i" dark class="my-3"></v-divider>

          <v-list-tile v-else :key="i" @click="">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title class="grey--text">
                {{ item.text }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

        </div>
        <MainMenu/>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar color="amber" app absolute clipped-left>

      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>

      <span class="title ml-3 mr-5">
        Office
        <span class="font-weight-light">
          Radio
        </span>
      </span>

      <v-text-field solo-inverted flat hide-details label="Search" prepend-inner-icon="search"></v-text-field>

      <v-spacer></v-spacer>

    </v-toolbar>

    <v-content>
      <HelloWorld/>
    </v-content>

  </v-app>
</template>

<script>
  import HelloWorld from './components/HelloWorld'
  import MainMenu from './components/MainMenu'
  export default {
    components: {
      HelloWorld, MainMenu
    },
    data: () => ({
      name: 'App',
      drawer: null,
      items: [
        { icon: 'lightbulb_outline', text: "What's new" },
        { icon: 'touch_app', text: 'Queue' },
        { divider: true },
        { icon: 'archive', text: 'Archive' },
        { icon: 'delete', text: 'Trash' },
        { divider: true },
        { icon: 'settings', text: 'Settings' },
        { icon: 'help', text: 'Help' },
        { icon: 'phonelink', text: 'Downloads' },
      ]
    })
  }
</script>

<style lang="stylus">
  #keep
    .v-navigation-drawer__border
      display: none
    .bl-1
      width: 235px !important;
      border-right:1px solid rgba(0,0,0,0.12) !important;
</style>