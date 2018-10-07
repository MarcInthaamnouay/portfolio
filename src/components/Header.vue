<template>
  <div class="header">
    <div class="model-wrapper"></div>
    <div class="content">
      <p id="title">Hi all, I am Marc !</p>
      <p>A Full Stack developer who love exploring new frontier.</p>
    </div>
    <div class="arrow">
      <font-awesome-icon icon="angle-down" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'header'
}
</script>

<style lang="scss">
  .header {
    height: 100vh;

    .content {
      width: 40%;
      margin: 0 auto;
      margin-top: 33vh;

      p {
        font-size: 1.85em;
      }

      #title {
        font-size: 2em;
      }
    } 

    .arrow {
      margin: 0 auto;
      width: 20px;

      svg {
        font-size: 2em;
      }
    }
  }
</style>
