<script setup>
 import { inject } from 'vue'
 
 
 // 2. 接收数据
 const roomData = inject('data-key')
</script>

<template>
    <div class="commment">
        底层组件
     <div>
        来自顶层组件中的数据为: {{ roomData}}
     </div>
     来自顶层组件的响应式数据:
    </div>
</template>