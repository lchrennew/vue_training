import Vue from 'vue'
import App from './App.vue'

import Vuex from 'vuex'
import VueRouter from 'vue-router'

Vue.config.productionTip = false

Vue
    .use(Vuex)
    .use(VueRouter)

const routes = [
    {
        path: '/deleted',
        component: {}
    },
    {
        path: '/done',
        components: {}
    }
]

const router = new VueRouter(
    {
        mode: 'history',
        routes,
    }
)

const storeConfig = {
    state: {},
    mutations: {},
    actions: {},
}
const store = new Vuex.Store(storeConfig)

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
