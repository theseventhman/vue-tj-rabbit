<!-- <script setup>
 import {ref,watch} from 'vue'
 const count = ref(0)
 const setCount = () =>{
   count.value++
 }

 // watch侦听单个数据源
 // ref对象不需要加.value
 watch(count,(newVal,oldVal) =>{
   console.log('count变化了',newVal,oldVal)
 })
  </script>
<template>
  <div>
   <button @click="setCount">+{{count}}</button>
  </div>
</template> -->
<!-- <script setup>
  //侦听多个数据变化
  import {ref,watch} from 'vue'

  const count = ref(0)
  const changeCount = () =>{
    count.value++
  }

  const name = ref('cp')
  const changeName = () =>{
    name.value='pc'
  }

  // watch侦听多个数据源
  watch(
    [count,name],
    (
      [newCount,newName],
      [oldCount,oldName]
    ) =>{
      console.log('count或者name变化了',[newCount,newName],
      [oldCount,oldName])
    })
</script> 

<template>
  <div>
    <button @click="changeCount">修改count--{{count}}</button>
  </div>
  <div>
    <button @click="changeName">修改name--</button>
  </div>
</template>
-->
<script setup>
  //立即执行immediate
  import { ref,watch} from 'vue'
  const count = ref(0)

  const setCount = () =>{
  count.value++
  }

  // watch 立即执行
  watch(count,() =>{
    console.log("count变化了")
  },{
    immediate : true
  })
</script>
<template>
  <div>
    <button @click="setCount">+{{count}}</button>
  </div>
</template>