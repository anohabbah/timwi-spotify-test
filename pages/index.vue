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
          />
        </v-toolbar>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-card class="main-space">
          <v-card-text class="fill-height">
            <v-row class="fill-height" align="center" justify="center">
              <p>Commencer votre recherche, le résultat s'affichera ici.</p>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-card>
          <v-card-text>
            <v-list three-line>
              <v-list-item-group multiple>
                <v-subheader>Albums</v-subheader>

                <v-list-item>
                  <v-list-item-avatar>
                    <v-img src="https://unsplash.com/photos/sWDpAFt6Uvg" />
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title>Abbah Anoh</v-list-item-title>
                    <v-list-item-subtitle
                      >Software Engineer</v-list-item-subtitle
                    >
                    <v-list-item-subtitle>Néo-Soft</v-list-item-subtitle>
                  </v-list-item-content>

                  <v-list-item-action>
                    <v-icon>mdi-bookmark-plus-outline</v-icon>
                  </v-list-item-action>
                </v-list-item>
                <v-divider />
              </v-list-item-group>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-skeleton-loader type="list-item@5"></v-skeleton-loader>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {}
</script>

<style lang="scss">
.main-space {
  height: calc(100vh - 230px) !important;
}
</style>
