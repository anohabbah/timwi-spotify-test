export const state = () => ({
  accessToken: null,
})

const SET_ACCESS_TOKEN = 'SET_ACCESS_TOKEN'
export const mutations = {
  [SET_ACCESS_TOKEN](state, payload) {
    state.accessToken = payload
  },
}

export const actions = {
  async requestAccessToken({ commit }) {
    const bufferString = `${this.$config.clientId}:${this.$config.clientSecret}`
    const token = Buffer.from(bufferString).toString('base64')

    const params = new URLSearchParams()
    params.append('grant_type', 'client_credentials')

    try {
      const data = await this.$axios.$post(
        'https://accounts.spotify.com/api/token',
        params,
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: `Basic ${token}`,
          },
        }
      )

      commit(SET_ACCESS_TOKEN, data.access_token)
    } catch (e) {
      if (e.response) {
        console.log(e.response.data)
      } else {
        console.log(e)
      }
    }
  },
}

export const getters = {
  accessToken: (state) => state.accessToken,
}
