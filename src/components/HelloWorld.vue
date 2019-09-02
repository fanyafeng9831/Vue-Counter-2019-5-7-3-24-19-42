<template>
  <div id="counter">
  <p>{{ number }}</p >
  <button v-on:click="clickPlus">+</button>
   <button v-on:click="clickMun">-</button>
</div>
</template>

<script>

export default {
  name: 'counter',
  data(){
  return{
    number:0,

  };
},

methods:{
  clickPlus:function(){
    this.number++;
  },
  clickMun:function(){
    this.number--;
  }
}
};
</script>


<style scoped>
h1{
  font-weight:normal;
}
</style>