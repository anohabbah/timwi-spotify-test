<template>
  <v-app dark>
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
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>mdi-application</v-icon>
      </v-btn>
      <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />

      <v-spacer />
      <v-badge
        color="#1DB954"
        bordered
        overlap
        :value="totalFavorites"
        :content="totalFavorites"
      >
        <v-icon color="#1DB954" large>mdi-heart</v-icon>
      </v-badge>
    </v-app-bar>
    <v-main>
      <nuxt />
    </v-main>
    <v-footer :absolute="!fixed" app>
      <span>
        &copy; {{ new Date().getFullYear() }} &bullet; Developed by
        <a href="https://github.com/anohabbah">Abbah Anoh</a> &bullet; Powered
        by <a href="https://nuxtjs.org">Nuxt.js</a>
      </span>
    </v-footer>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      clipped: true,
      drawer: true,
      fixed: true,
      items: [
        {
          icon: 'mdi-magnify',
          title: 'Rechercher',
          to: '/',
        },
        {
          icon: 'mdi-bookmark-music',
          title: 'Bibliothèque',
          to: '/library',
        },
      ],
      miniVariant: false,
      title: 'TIMWI Spotify Test',
    }
  },
  computed: mapGetters('bookmark', ['totalFavorites']),
}
</script>
