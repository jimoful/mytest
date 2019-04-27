import Vue from 'vue'
import axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import './static/css/common.css';
/*引入公共样式*/
import Vuex from 'vuex';
import stores from './store/store' ;
import {Button, Message, Notification} from 'element-ui';

import {library} from '@fortawesome/fontawesome-svg-core';
import {
    faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';
import VueI18n from 'vue-i18n'
import router from './router'
import "./static/css/ionicons.min.css";
import zh from "./common/lang/zh";
import en from"./common/lang/en";
import qs from 'qs';

Vue.use(Button);
Vue.use(VueI18n);

library.add(faSignOutAlt, brands);

Vue.component('font-awesome-icon', FontAwesomeIcon);
// 将 Message 直接挂在 Vue 实例上
Vue.prototype.$message = Message;
Vue.prototype.$notify = Notification;

Vue.use(ElementUI);
Vue.use(Vuex);
Vue.prototype.$axios=axios;
axios.defaults.baseURL = '/api'
axios.defaults.headers.post['Content-Type'] = 'application/json';
Vue.prototype.$qs = qs
Vue.config.productionTip = false;
const i18n = new VueI18n({
    locale: 'zh',  // 语言标识
    messages: {
        'zh': zh,
        'en': en
    }
});
const store = new Vuex.Store(stores);
new Vue({
    store,
    i18n,
    router,
    render: h => h(App)
}).$mount('#app');
