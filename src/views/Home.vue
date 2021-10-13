<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />

    <div :style="{ color: $store.state.colorCode }" class="counter">
      {{ $store.state.counter }}
    </div>

    <div class="counter-squared">
      {{ $store.state.counter }}
      <sup>2</sup>
      = {{ $store.getters.counterSquared }}
    </div>
    <div class="buttons">
      <button @click="$store.dispatch('increaseCounter')">+</button>
      <button @click="$store.dispatch('decreaseCounter')">-</button>
    </div>

    <div>
      <input v-model="colorCode" placeholder="Enter color code" type="text" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  computed: {
    colorCode: {
      get() {
      return this.$store.state.colorCode
      },
      set(value) {
       this.$store.commit('setColorCode',value)
      },
    },
  },
};
</script>

<style >
div {
  margin-bottom: 10px;
}

.counter {
  font-size: 80px;
}

.buttons button {
  font-size: 40px;
  width: 100px;
  margin: 10px;
}
</style>
