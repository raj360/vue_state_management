import { createStore } from 'vuex'

export default createStore({
  state: {
  counter: 0
  },
  mutations: {
  increaseCounter(state){
    this.state.counter++
  },
  decreaseCounter(state){
    this.state.counter--
  },
  },
  actions: {
  },
  getters:{
  
  },
  modules: {
  }
})
