<script setup>
 // setup语法糖下局部组件无需注册直接可以使用
 import { ref } from 'vue'
 import SonCom from './son-com.vue'
 const count = ref(100)
 setTimeout(() =>{
    count.value = 200
 })

 const getMessage = (msg) => {
    console.log(msg)
 }
 </script>

 <template>
    <div class="father">
        <SonCom :count="count" message="father message" @get-message="getMessage" />
    </div>
 </template>