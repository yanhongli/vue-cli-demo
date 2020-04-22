export default {
	state: {
		name: 'lily'
	},
	getters: {
		name(state) {
			return state.name
		}
	},
	mutations: {
		setName(state, v) {
			state.name = v
		}
	}
}