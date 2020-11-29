<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <v-toolbar>
          <v-text-field
            placeholder="Rechercher un album par son nom et celui de son artiste"
            filled
            outlined
            single-line
            prepend-inner-icon="mdi-magnify"
            hide-details
            rounded
            dense
            clearable
            :value="searchTerm"
            @input="search"
            @click:clear="resetAll"
          />
        </v-toolbar>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-card class="main-space pa-4 pr-0">
          <v-card-text
            class="fill-height pa-0"
            style="overflow: hidden; overflow-y: auto"
          >
            <v-list v-if="albums.length" three-line>
              <v-list-item-group
                :value="bookmark"
                multiple
                @change="updateBookmark"
              >
                <v-subheader>Albums trouvés :</v-subheader>

                <template v-for="(album, idx) in albums">
                  <v-list-item :key="album.id" :value="album">
                    <template v-slot="{ active }">
                      <v-list-item-avatar>
                        <v-img :src="album.images[2].url" />
                      </v-list-item-avatar>

                      <v-list-item-content>
                        <v-list-item-title v-text="album.name" />
                        <v-list-item-subtitle>
                          {{ album.total_tracks }} morceaux
                        </v-list-item-subtitle>
                        <v-list-item-subtitle>
                          sortie le {{ album.release_date | dateFormat }}
                        </v-list-item-subtitle>
                      </v-list-item-content>

                      <v-list-item-action>
                        <v-icon v-if="active" color="green lighten-1">
                          mdi-bookmark-remove
                        </v-icon>
                        <v-icon v-else> mdi-bookmark-plus-outline </v-icon>
                      </v-list-item-action>
                    </template>
                  </v-list-item>

                  <v-divider v-if="idx < albums.length - 1" :key="idx" />
                </template>
              </v-list-item-group>
            </v-list>
            <v-row v-else class="fill-height" align="center" justify="center">
              <div class="text-center">
                <v-icon x-large>mdi-music</v-icon>
                <p>Commencer votre recherche, le résultat s'affichera ici.</p>
              </div>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import debounce from 'lodash/fp/debounce'
import { mapActions, mapGetters, mapMutations } from 'vuex'

export default {
  data() {
    return {
      searchTerm: '',
    }
  },
  computed: {
    ...mapGetters('search', ['albums']),
    ...mapGetters('bookmark', ['bookmark']),
  },
  mounted() {
    return this.$store.dispatch('auth/requestAccessToken')
  },
  beforeDestroy() {
    this.resetAll()
  },
  methods: {
    ...mapActions('search', ['searchAlbumByAlbumNameOrArtistName']),
    ...mapMutations('bookmark', ['setBookmark']),
    search: debounce(300, function (searchTerm) {
      if (searchTerm) {
        this.searchAlbumByAlbumNameOrArtistName(searchTerm)
      }
    }),
    updateBookmark(newValue) {
      this.setBookmark(newValue)
    },
    resetAll() {
      this.searchTerm = ''
      this.$store.commit('search/setItems', {})
    },
  },
}
</script>

<style lang="scss">
.main-space {
  height: calc(100vh - 245px) !important;
}
</style>
