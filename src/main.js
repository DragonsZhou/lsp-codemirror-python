import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import VueCodeMirror from 'vue-codemirror';
import 'codemirror/lib/codemirror.css'
Vue.use(VueCodeMirror);


new Vue({
  render: h => h(App),
}).$mount('#app')
