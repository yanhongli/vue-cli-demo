import Vue from 'vue'
import ElementUI, { Message } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './app.scss'
import App from './App.vue'
import Progress from './components/Progress.vue'
import {
	store
} from './store/index'
import {
	router
} from './router/index'
import axios from 'axios';
import './filter'
Vue.config.productionTip = false
Vue.config.performance = true
Vue.prototype.$message = Message
Vue.use(ElementUI)
const vm = new Vue({
	router,
	store,
	render: h => h(App),
})

async function init() {
	try {
		if (!['/login'].some(e => location.href.includes(e))) {
			if (localStorage.getItem('token')) {
				await axios.all([store.dispatch('info'), store.dispatch('routes')])
			} else {
				router.push('/login')
			}
		}
	} catch (error) {
		vm.$nextTick(() => {
			vm.$message.error(error.msg)
			router.push('/login')
		})
	}
	finally {
		vm.$mount('#app')
		new Vue({
			store,
			render: (h) => h(Progress)
		}).$mount('#progress')
		let i = 0;
		let pointer = setInterval(() => {
			if(i >= 100) clearInterval(pointer)
			else {
				i += 10
				store.commit('SET_PERCENTAGE', i)
			}
		}, 1000);
	}
}
init()