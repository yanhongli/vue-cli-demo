export default {
	state: {
		name: 'lily',
		token: ''
	},
	getters: {
		GET_NAME(state) {
			return state.name
		},
		GET_TOKEN(state) {
			return state.token
		}
	},
	mutations: {
		SET_NAME(state, v) {
			state.name = v
		},
		SET_TOKEN(state, v) {
			if(v){
				state.token = v
				localStorage.setItem('token', v)	
			}
			else {
				state.token = ''
				localStorage.removeItem('token')
			}
		}
	},
	actions: {
		login(store, args = {}) {
			return new Promise((rs) => {
				setTimeout(() => {
					store.commit('SET_NAME', args.name)
					store.commit('SET_TOKEN', '6C9642633C3A579AC4987CD2E2B58764')
					rs()
				}, 2000)
			})
		}
	}
}
