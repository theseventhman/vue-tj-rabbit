<script>
import { provide } from 'vue'
import RoomMsgItem from './room-msg-item.vue'
// 组件嵌套关系
// RoomPage -> RoomMsgItem -> RoomMsgComment

// 1.顶层组件提供数据
provide ('data-key', 'this is room data')
</script>

<template>
    <div class="page">
        顶层组件
        <RoomMsgItem />
    </div>
</template>