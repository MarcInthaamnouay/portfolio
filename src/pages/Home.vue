<template>
  <div class="home wrapper">
    <div class="animation">
      <Header />
    </div>
    <div class="project-wrapper">
      <h2>Recent works</h2>
      <List />
    </div>
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
    background-color: #f1f1f1;
    color: white;
  }

  .animation {
    height: calc(100vh - 63px);
  }

  .project-wrapper {
    background-color: #c2c2c2;
    height: 100vh;

    h2 {
      padding-left: 20px;
      padding-right: 20px;
      padding-top: 20px;
      padding-bottom: 10px;
      margin-bottom: 0px;
      color: #091123;
      font-weight: 500;
    }
  }
</style>