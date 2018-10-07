<template>
  <div class="home wrapper">
    <Header />
    <h2>Recent works</h2>
    <List />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import List from '@/components/List.vue'

export default {
  name: 'home',
  components: {
    Header,
    List
  }
}
</script>

<style lang="scss">
  body {
    font-family: 'Raleway', sans-serif;
    background-color: rgba(48, 94, 156, 0.8);
    color: white;
  }
</style>