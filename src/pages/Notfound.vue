<template>
  <div class="notfound">
    <img src="../assets/img/totoro.png" />
    <p>Oops look like you're trying to access to an unknown page !</p>
  </div>
</template>

<script>
export default {
  name: 'notfound'
}
</script>

<style lang="scss">
  .notfound {
    min-height: calc(100vh - 60px - 200px);

    img {
      display: block;
      margin: 0 auto;
      width: 300px;
    }

    p {
      text-align: center;
      font-size: 1.5em;
    }
  }
</style>