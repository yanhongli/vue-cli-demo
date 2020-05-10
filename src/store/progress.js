export default {
    state: {
        percentage: 0
    },
    getters: {
        GET_PERCENTAGE(state) {
            return state.percentage
        }
    },
    mutations: {
        SET_PERCENTAGE(state, v) {
            state.percentage = v;
        }
    }
}