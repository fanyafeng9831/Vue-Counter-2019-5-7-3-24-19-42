import Vue from 'vue'

Vue.config.productionTip = false

new Vue({
  data:{
	  counter: 0
  },
  methods:{
	  add: function(){
		  this.counter++;
	  },
	  sub: function(){
		  this.counter--;
	  }
  }
}).$mount('#counter')
