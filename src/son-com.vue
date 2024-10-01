<script setup>
    //2. defineProps接收数据
const props =defineProps({
   message: String,
   count: Number 
})
const emit = defineEmits(['get-message'])
const sendMsg = () => {
    emit('get-message','this is son message')
}
console.log(props)
</script>

<template>
    <div class="son">
        <h3>子组件Son</h3>
    <div>
       父组件传入的数据 - {{ message}} - {{count}}
    </div>  
    <button @click="sendMsg">触发自定义事件</button>  
    </div>
</template>