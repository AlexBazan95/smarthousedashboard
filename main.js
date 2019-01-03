var Vue = require('vue');
var index = require('vue!./components/index.vue');

var Vue({
	el: 'body',
	components: {
		index: index
	}
})