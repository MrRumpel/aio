<template>
    <div>123</div>
</template>

<script setup>
import { ref, watch } from 'vue';

const count = ref(0); // 包装响应式数据
const timer = null;
// 监听数据变化
const unwatch = watch(
  () => count.value,
  (newValue) => {
    console.log('Count changed:', newValue);
    // 在这里执行需要在数据变化时执行的逻辑
  },
);

// 去除监听数据变化
const unwatchCount = watch(
  () => count.value,
  (newValue) => {
    console.log('Count changed (unwatch):', newValue);
    // 在这里执行需要在数据变化时执行的逻辑，然后移除监听
    unwatch(count, unwatchCount);
  },
);

// 模拟数据变化
setInterval(() => {
  count.value++;
}, 1000);
</script>