export default function ({ $axios, store }) {
  $axios.setHeader('Accept', 'application/json')
  $axios.setToken(store.getters['auth/accessToken'], 'Bearer')
}
