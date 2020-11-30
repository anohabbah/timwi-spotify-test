export const actions = {
  nuxtServerInit({ dispatch }) {
    return dispatch('auth/requestAccessToken')
  },
}
