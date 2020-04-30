import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/home.vue'
// import Layout from '../layout.vue'
// import Login from '../views/login/login.vue'
// import FindPassword from '../views/fpwd/findPassword.vue'
Vue.use(VueRouter)
export const router = new VueRouter({
	routes: [{
			path: '',
			component: () => import('../layout.vue'),
			children: [{
					path: '/',
					redirect: '/home'
				},
				{
					path: 'home',
					component: () => import('../views/home.vue')
				}
			]
		},
		{
			path: '/login',
			component: () => import('../views/login/login.vue')
		},
		{
			path: '/pwd',
			component: () => import('../views/fpwd/findPassword.vue')
		},
		{
			path: '**',
			redirect: '/home'
		}
	]
})
