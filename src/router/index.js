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
			component: () => import('../Layout.vue'),
			children: [{
					path: '/',
					redirect: '/home'
				},
				{
					path: 'home',
					component: () => import('../views/Home.vue')
				}
			]
		},
		{
			path: '/login',
			component: () => import('../views/login/Login.vue')
		},
		{
			path: '/pwd',
			component: () => import('../views/fpwd/FindPassword.vue')
		},
		{
			path: '**',
			redirect: '/home'
		}
	]
})
