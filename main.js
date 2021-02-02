import Vue from 'vue'
import App from './App'
import {mRequest} from './utils/mRequest.js'
import api from './api/api.js'
import '@/static/iconFont/iconFont.scss'


Vue.config.productionTip = false
Vue.prototype.$mRequest = mRequest
Vue.prototype.$api = api
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
