import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home.vue'
Vue.use(VueRouter)
export const router = new VueRouter({
	routes: [
		{
			path: '/home',
			component: Home
		},
		{
			path: '**',
			component: Home
		}
	]
})