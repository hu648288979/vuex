<template>
  <div id="app">
   <h3>welcome vuex-demo</h3>
   <input type="button" value="增加" @click='increment'/>
   <input type="button" value="减少" @click='decrement'/>
   <input type="button" value="偶数才能增加" @click='odd'/>
   <input type="button" value="点击异步" @click='clickAsync'/>
   <input type="button" value="验证" @click='addt'/>
   <div id="">
   	现在的数字为:{{count}}他是{{getodd}}
   </div>
  </div>
</template>

<script>
	
	import {mapGetters,mapActions} from 'vuex'
export default{
	computed:mapGetters([
		'count','getodd'
	]),
	methods:mapActions([
		'increment','decrement','odd','clickAsync','oddt'
	])
}

</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
