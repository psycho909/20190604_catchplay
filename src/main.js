import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import axios from 'axios'
import 'ant-design-vue/dist/antd.css';
import { Button,Layout,Menu,Breadcrumb,Table,Popconfirm,Input,Form } from 'ant-design-vue';

Vue.use(Button);
Vue.use(Layout);
Vue.use(Menu);
Vue.use(Breadcrumb);
Vue.use(Table);
Vue.use(Popconfirm);
Vue.use(Input);
Vue.use(Form);
Vue.prototype.axios=axios;
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
