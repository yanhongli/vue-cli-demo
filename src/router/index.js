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
					component: () => import('../views/Home.vue'),
					meta: {
						title: '首页'
					}
				}
			]
		},
		{
			path: '/login',
			component: () => import('../views/login/Login.vue'),
			meta: {
				title: '登录'
			}
		},
		{
			path: '/pwd',
			component: () => import('../views/fpwd/FindPassword.vue'),
			meta: {
				title: '找回密码'
			}
		},
		{
			path: '**',
			redirect: '/home'
		}
	]
})

router.beforeEach(function(to, from, next) {
	if(to.meta && to.meta.title) {
		document.title = to.meta.title
	}
	next()
})