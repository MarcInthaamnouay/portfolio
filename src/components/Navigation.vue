<template>
  <div class="navigation">
    <div class="name">
      <router-link to="/">intha-amnouay marc</router-link>
    </div>
    <router-link to="/about">About</router-link>
  </div>
</template>

<script>
export default {
  name: 'navigation'
}
</script>

<style lang="scss">
  .navigation {
    display: flex;
    
    .name {
      flex-grow: 1;

      a {
        text-transform: uppercase;
      }

      &:after {
        content: "";
        width: 50px;
        height: 2px;
        display: block;
        background-color: white;
        transition: width ease .25s
      }
    }

    .name:hover {
      &:after {
        content: "";
        width: 180px;
        height: 2px;
        display: block;
        background-color: white;
      }
    }

    a {
      color: white;
      font-weight: 500;
      text-decoration: none;
      font-size: 1.15em;
      letter-spacing: 1px;
    }
  }
</style>