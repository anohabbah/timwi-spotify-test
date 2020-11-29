<template>
  <v-container fluid>
    <v-item-group multiple>
      <v-row>
        <v-col v-for="album in bookmark" :key="album.id" md="3">
          <v-item :value="album">
            <template v-slot="{ active, toggle }">
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
                      sortie le {{ album.release_date }}
                    </span>
                  </v-row>
                </v-card-actions>
              </v-card>
            </template>
          </v-item>
        </v-col>
      </v-row>
    </v-item-group>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: mapGetters('bookmark', ['bookmark']),
}
</script>
