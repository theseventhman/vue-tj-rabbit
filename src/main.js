import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import RoomPage from './room-page.vue'
// 1. 以App作为参数生成一个应用实例对象
// 2. 挂载到id为app的节点上
createApp(RoomPage).mount('#app')
