<template>
  <v-container fluid>
    <v-tooltip left>
      <template #activator="{ on, attrs }">
        <v-btn
          to="/"
          color="#1DB954"
          fixed
          elevation="6"
          dark
          fab
          right
          bottom
          class="mb-6"
          v-bind="attrs"
          v-on="on"
        >
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </template>
      <span>Ajouter un album</span>
    </v-tooltip>

    <v-item-group
      v-if="bookmark.length"
      multiple
      :value="favorites"
      @change="setFavorites"
    >
      <v-row>
        <v-col v-for="album in bookmark" :key="album.id" md="3">
          <v-item :value="album">
            <template #default="{ active, toggle }">
              <v-card>
                <v-img
                  class="align-end"
                  width="100%"
                  height="auto"
                  :src="album.images[0].url"
                >
                  <v-app-bar flat color="transparent">
                    <v-toolbar-title pl-0 v-text="album.name" />
                    <v-spacer />
                    <v-btn icon dark @click="toggle">
                      <v-icon v-if="!active" color="green lighten-1">
                        mdi-heart-outline
                      </v-icon>

                      <v-icon v-else color="green lighten-1">mdi-heart</v-icon>
                    </v-btn>
                  </v-app-bar>
                </v-img>
                <v-card-title
                  v-text="album.artists.map(({ name }) => name).join(', ')"
                />
                <v-card-subtitle>Artists</v-card-subtitle>
                <v-divider class="mx-4" />
                <v-card-actions>
                  <v-row align="center" justify="center" no-gutters>
                    <span class="subheading">
                      {{ album.total_tracks }} morceaux
                    </span>
                    <span class="mx-2">&bullet;</span>
                    <span class="subheading">
                      sortie le {{ album.release_date | dateFormat }}
                    </span>
                  </v-row>
                </v-card-actions>
              </v-card>
            </template>
          </v-item>
        </v-col>
      </v-row>
    </v-item-group>

    <v-card v-else class="main-space">
      <v-row class="fill-height" align="center" justify="center">
        <div class="text-center">
          <v-icon x-large>mdi-bookmark-music</v-icon>
          <p>Votre librairie est vide pour le moment</p>
          <v-btn to="/" outlined rounded color="#1DB954">
            <v-icon left>mdi-plus</v-icon>
            Ajouter un album
          </v-btn>
        </div>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  computed: mapGetters('bookmark', ['bookmark', 'favorites']),
  methods: {
    ...mapMutations('bookmark', ['setFavorites']),
    updateFavorites(newValue) {
      this.setFavorites(newValue)
    },
  },
}
</script>

<style lang="scss" scoped>
.main-space {
  height: calc(100vh - 145px) !important;
}
</style>
