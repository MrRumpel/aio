<template>
  <!--单例模式，name相同则复用一个无界实例，改变url则子应用重新渲染实例到对应路由 -->
  <WujieVue width="100%" height="100%" name="react" :url="url" :sync="true"
    :props="{ data: 123, methods: () => console.info(this) }"></WujieVue>
</template>

<script lang="ts">
export default {
  data() {
    return {
      url: 'http://localhost:5174/',
    }
  },
}
</script>
