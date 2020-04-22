import Vue from 'vue'
import ElementUI, { Message } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './app.scss'
import App from './App.vue'
import {
	store
} from './store/index'
import {
	router
} from './router/index'
Vue.config.productionTip = false
Vue.prototype.$message = Message
Vue.use(ElementUI)
new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app')
