export const state = () => ({
  bookmark: [],
})

export const mutations = {
  setBookmark(state, payload) {
    state.bookmark = payload
  },
}

export const getters = {
  bookmark: (state) => state.bookmark,
}
