<template>
  <div id="app">
    <header-page></header-page>
    <router-view></router-view>
    <footer-page></footer-page>
  </div>
</template>

<script>
import HeaderPage from '@/components/Header.vue'
import FooterPage from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {
    HeaderPage,
    FooterPage
  },
  data() {
    return{}
  }
}
</script>

<style>

</style>
