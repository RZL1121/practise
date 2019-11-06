import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'

import "./stylesheets/main.scss"
import { Header,Button,Navbar, Cell,CellSwipe,Swipe, SwipeItem,InfiniteScroll} from 'mint-ui';
Vue.component("mt-header", Header);
Vue.component("mt-button", Button);
Vue.component("mt-navbar", Navbar);
Vue.component("mt-cell", Cell);
Vue.component("mt-cell-swipe", CellSwipe);
Vue.component("mt-swipe", Swipe);
Vue.component("mt-swipe-item", SwipeItem);

Vue.prototype.$http = axios
Vue.use(InfiniteScroll);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
