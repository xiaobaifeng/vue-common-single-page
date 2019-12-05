<template>
  <div id="app">
    <layout>
      <guide />
    </layout>
  </div>
</template>

<script>
import Layout from '@/layout'
import guide from '@/views/guide/index.vue'

export default {
  name: 'app',
  components: {
    Layout, guide
  }
}
</script>

<style>
</style>
