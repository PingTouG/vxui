import Vue from 'vue'
import App from '@/App'
import VXUI from '../packages'

Vue.use(VXUI)

new Vue({
  render: h => h(App)
}).$mount('#root')
