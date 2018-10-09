<template>
  <div
    id="app"
    v-bind:class="{ darker: isDark }"
  >
    <Navigation />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'
import Footer from './components/Footer.vue'
import { mapState } from 'vuex'

export default {
  name: 'App',
  components: {
    Navigation,
    Footer
  },
  computed: mapState({
    isDark: state => state.dark
  })
}
</script>

<style lang="scss">
  a, p, h1, h2, h3, h4 {
    color: #2f3136;
  }

  #app {
    background-color: #d5ebf7;
    transition: all ease .25s;
    
    .project-wrapper {
      background-color: rgb(145, 198, 228);
    }

    .project {
      background-color: white;

      span {
        p {
          color: white;
        }
      }
    }

    &.darker {
      a, p, h1, h2, h3, h4, svg {
        color: #e5e9f3;
      }

      background-color: #3e4d55;

      .project-wrapper {
        background-color: rgb(57, 104, 131);
      }

      .project {
        background-color: rgb(50, 55, 65);

        &:hover {
          background-color: rgb(36, 39, 46);
        }
      }

      .switch-button {
        color: white;
        border-color: white;

        &:hover {
          border-color: rgba(17, 158, 239, 0.3);
          cursor: pointer;
        }
      }
    }
  }

  body {
    margin: 0px;
  }
</style>