import { login, info, routes } from '../api'
export default {
	state: {
		userInfo: {},
		token: '',
		routes: []
	},
	getters: {
		GET_USERINFO(state) {
			return state.userInfo
		},
		GET_TOKEN(state) {
			return state.token
		},
		GET_ROUTES(state) {
			return state.routes
		}
	},
	mutations: {
		SET_USERINFO(state, v) {
			state.userInfo = v
		},
		SET_TOKEN(state, v) {
			if (v) {
				state.token = v
				localStorage.setItem('token', v)
			}
			else {
				state.token = ''
				localStorage.removeItem('token')
			}
		},
		SET_ROUTES(state, v) {
			state.routes = v
		}
	},
	actions: {
		async login(store, args = {}) {
			let ret = await login(Object.assign({
				way: 3,
				source: 1,
				tenantCode: process.env.VUE_APP_TENANTCODE
			}, args))
			store.commit('SET_TOKEN', ret.token)
		},
		async info(store) {
			let ret = await info()
			store.commit('SET_USERINFO', ret)
		},
		async routes(store) {
			let ret = await routes()
			store.commit('SET_ROUTES', ret)
		}
	}
}
