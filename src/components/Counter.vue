<template>
  <div class="counter">
    {{msg}}.
    <button v-on:click="add">+</button>
    <span>{{num}}</span>
    <button v-on:click="sub">-</button>
  </div>
</template>

<script>
export default {
  name: 'Counter',
  data () {
    return {
      num: 0
    }
  },
  props: {
    msg: Number
  },
  destroyed: function () {
    this.$emit('count', -this.num)
  },
  methods: {
    add: function () {
      this.num++
      this.$emit('count', 1)
    },
    sub: function () {
      this.num--
      this.$emit('count', -1)
    }
  }
}
</script>
