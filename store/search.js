import reduce from 'lodash/fp/reduce'

export const state = () => ({
  items: {},
})

export const mutations = {
  setItems(state, payload) {
    state.items = payload
  },
}

export const actions = {
  async searchAlbumByAlbumNameOrArtistName({ commit, rootGetters }, term) {
    this.$axios.setToken(rootGetters['auth/accessToken'], 'Bearer')
    // eslint-disable-next-line prettier/prettier
    const { albums: { items } } = await this.$axios.$get('/search', {
      params: {
        q: term,
        type: 'album',
        limit: 30,
      },
    })

    const reduced = reduce((acc, item) => ({ [item.id]: item }), items, {})
    console.log('searchAlbumByAlbumNameOrArtistName %o', reduced)
    commit('setItems', reduced)
  },
}
