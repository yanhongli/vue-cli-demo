import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'
import progress from './progress'

Vue.use(Vuex)
export const store = new Vuex.Store({
	modules: [user, progress]
})