import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    counter: 0
  },
  mutations: {
    increaseCounter (state, randomNumber) {
      state.counter += randomNumber
    },
    decreaseCounter (state, randomNumber) {
      state.counter -= randomNumber
    }
  },
  actions: {
    async increaseCounter ({ commit }) {
      let response = await axios(
        'https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new'
      )
      commit('increaseCounter', response.data)
      console.log({ response })
    },
    async decreaseCounter ({ commit }) {
      let response = await axios(
        'https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new'
      )
      commit('decreaseCounter', response.data)
      console.log({ response })
    }
  },
  getters: {
    counterSquared (state) {
      return state.counter * state.counter
    }
  },
  modules: {}
})
