import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入mint-Ui
import MintUI from 'mint-ui'
// 引入样式
import 'mint-ui/lib/style.css'

Vue.config.productionTip = false;
// 安装插件
Vue.use(MintUI);
// use的实际操作
// 1.组件库，在内部注册了各种全局属性
// 2.插件，挂载属性，为了方便this，可以使用其他功能

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
