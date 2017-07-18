import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const actions={
	increment:({commit})=>{	
		commit('add')
	},
	decrement:({commit})=>{
		commit('decrement')
	},
	odd:({commit,state})=>{
		if(state.count%2==0){
			commit('add')
		}
	},
	clickAsync:({commit})=>
		new Promise((resolve)=>{
			setTimeout(function(){
				commit('add')
			},1000)
		})
	
}
const mutations={//处理数据变化
	add(state){
		state.count++
	},
	decrement(state){
		state.count--
	}
}
const state={
	count:10
}
const getters={
	count(state){
		return state.count
	},
	getodd(state){
	return state.count%2==0?"偶数":"奇数"	;
	}
}
//导出store对象
export default new Vuex.Store({
	actions,state,mutations,getters
})
