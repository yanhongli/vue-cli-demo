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
				},
				{
					path: 'account',
					component: () => import('../views/account/Account.vue'),
					meta: {
						title: '账户列表'
					}
				},
				{
					path: 'imgs',
					component: () => import('../views/imgs/imgs.vue'),
					meta: {
						title: '图片库'
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
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}

const originalReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function repalce(location, onResolve, onReject) {
  if (onResolve || onReject) return originalReplace.call(this, location, onResolve, onReject)
  return originalReplace.call(this, location).catch(err => err)
}
router.beforeEach(function(to, from, next) {
	if(to.meta && to.meta.title) {
		document.title = to.meta.title
	}
	next()
})