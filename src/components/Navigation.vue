<template>
  <div class="navigation">
    <div class="name">
      <router-link to="/">intha-amnouay marc</router-link>
    </div>
    <button
      class="switch-button"
      v-on:click="toggleDark()"
    >
      Dark
    </button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'navigation',
  methods: {
    ...mapActions([
      'toggleDark'
    ])
  }
}
</script>

<style lang="scss">
  .navigation {
    display: flex;
    padding: 20px;
    
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
        background-color:rgba(17, 158, 239, 0.3);
        transition: width ease .25s
      }
    }

    .name:hover {
      &:after {
        content: "";
        width: 180px;
        height: 2px;
        display: block;
        background-color: rgba(17, 158, 239, 0.3);
      }
    }

    a {
      font-weight: 500;
      text-decoration: none;
      font-size: 1.15em;
      letter-spacing: 1px;
    }
  }

  button {
    width: 60px;
    background-color: transparent;
    height: 30px;
    border: 1px solid black;
    border-radius: 5px;
    transition: all ease .25s;
  }

  button:hover {
    border-color: rgba(17, 158, 239, 0.3);
    cursor: pointer;
  }
</style>