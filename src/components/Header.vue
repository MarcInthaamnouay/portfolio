<template>
  <div class="header">
    <div class="model-wrapper"></div>
    <div class="content">
      <p id="title">Hi all, I am Marc !</p>
      <p>A Full Stack developer who love exploring new frontier.</p>
    </div>
    <div class="arrow">
      <font-awesome-icon
        icon="angle-down"
        v-on:click="goDown()"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'top',
  methods: {
    goDown() {
      const height = window.innerHeight
      window.scrollTo(0, height)
    }
  }
}
</script>

<style lang="scss">
  .header {
    height: 100%;

    .content {
      width: 40%;
      margin: 0 auto;
      padding-top: 15%;

      p {
        font-size: 1.85em;
        margin-bottom: 0px;
        margin-top: 0px;
      }

      #title {
        font-size: 2em;
      }
    } 

    .arrow {
      margin: 0 auto;
      width: 20px;
      position: absolute;
      bottom: 20px;
      left: 0;
      right: 0;
      color: #091123;
      animation: MoveUpDown 1s linear infinite;

      svg {
        font-size: 2em;
      }
    }
  }

  @keyframes MoveUpDown {
    0%, 100% {
      bottom: 0;
    }
    50% {
      bottom: 20px;
    }
  }
</style>
