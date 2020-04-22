import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home.vue'
import Layout from '../layout.vue'
import Login from '../views/login/login.vue'
Vue.use(VueRouter)
export const router = new VueRouter({
	routes: [{
			path: '',
			component: Layout,
			children: [{
					path: '/',
					redirect: '/home'
				},
				{
					path: 'home',
					component: Home
				}
			]
		},
		{
			path: '/login',
			component: Login
		},
		{
			path: '**',
			redirect: '/home'
		}
	]
})
