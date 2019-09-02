<template>
  <div id="app">
    <input v-model="initNum">
    <Counter v-on:count="count" v-for="n in getNum(initNum)" v-bind:key="n" v-bind:msg="n"/>
    <span>Sum:{{sum}}</span>
  </div>
</template>

<script>
import Counter from './components/Counter.vue'
export default {
  name: 'App',
  components: {
    Counter
  },
  methods: {
    getNum: function (e) {
      let reg = /^[0-9]\d*$/
      if (reg.test(e)) {
        return  parseInt(e)
      }
      return 0
    },
    count: function (e) {
      this.sum = this.sum + e
    }
  },
  data () {
    return {
      initNum: 3,
      sum: 0
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
