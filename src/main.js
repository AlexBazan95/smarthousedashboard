import Vue from 'vue'
import VueRouter from 'vue-router'
import './plugins/vuetify'

import App from './App.vue'

var WhatsNew = require('./views/WhatsNew.vue').default
var Queue = require('./views/Queue.vue').default
var Archive = require('./views/Archive.vue').default
var Trash = require('./views/Trash.vue').default
var Settings = require('./views/Settings.vue').default
var Help = require('./views/Help.vue').default
var Downloads = require('./views/Downloads.vue').default
var HelloWorld = require('./components/HelloWorld.vue').default

Vue.use(VueRouter)
Vue.config.productionTip = false

var router = new VueRouter({
	routes: [
		{path: '/', component: HelloWorld},
		{path: '/whats-new', component: WhatsNew},
		{path: '/queue', component: Queue},
		{path: '/archive', component: Archive},
		{path: '/trash', component: Trash},
		{path: '/settings', component: Settings},
		{path: '/help', component: Help},
		{path: '/downloads', component: Downloads}
	]
})

new Vue({
	el: '#app',
  	router: router,
  	render: h => h(App)
})
