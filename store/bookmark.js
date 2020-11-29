export const state = () => ({
  bookmark: [],
  favorites: [],
})

export const mutations = {
  setBookmark(state, payload) {
    state.bookmark = payload
  },
  setFavorites(state, payload) {
    state.favorites = payload
  },
}

export const getters = {
  bookmark: (state) => state.bookmark,
  favorites: (state) => state.favorites,
  totalFavorites: (state) => state.favorites.length,
}
