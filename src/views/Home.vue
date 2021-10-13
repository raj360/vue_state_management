<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
   
    <div class="counter">{{counter}}</div>
    
    <div class="buttons">
     <button @click="increaseCounter">+</button>
     <button @click="decreaseCounter">-</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data(){
  return {
   counter:0
  }
  },
  methods:{
  increaseCounter(){
    this.counter++
  },
  decreaseCounter(){
    this.counter--
  },
  }
}
</script>

<style >
div{
margin-bottom: 10px;
}

.counter{
 font-size: 80px;
}

.buttons button{
 font-size:40px;
 width:100px;
 margin:10px;
}

</style>
