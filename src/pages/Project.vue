<template>
  <div id="project-wrapper-view">
    <div class="project-template">
      <div id="project-type">
        <h2>{{project.name}}</h2>
        <div>
          <p v-bind:class="project.type">{{project.type}}</p>
        </div>
      </div>
      <div id="desc">
        <h2>Description</h2>
        <p>{{project.deepDesc}}</p>
      </div>
      <div id="lang">
        <h2>Languages</h2>
        <span
          v-for="lang in project.languages"
          v-bind:key="lang"
          v-bind:class="lang"
        >
          {{lang}}
        </span>
      </div>
      <div id="framework" v-if="project.misc">
        <h2>Framework / Lib</h2>
        <span
          v-for="f in project.misc"
          v-bind:key="f"
          v-bind:class="f"
        >
          {{f}}
        </span>
      </div>
      <div id="link">
        <h2>Link</h2>
        <a v-bind:href="project.link">Github</a>
      </div>
    </div>
    <div id="img">
      <img :src="image" />
    </div>
  </div>
</template>

<script>
import { getProjectById } from '@/selector/project'

export default {
  name: 'project',
  data: function() {
    const id = this.$route.params.id
    const project = getProjectById(id)

    return {
      project,
      image: require(`../assets/img/${project.img}`)
    }
  },
  mounted: function() {
    this.$nextTick(function() {
      const id = parseInt(this.$route.params.id)
      if (typeof id !== 'number') {
        console.warn('redirect')
      }
    })
  }
}
</script>

<style lang="scss">
  @import '../assets/scss/lang';
  @import '../assets/scss/framework';

  #project-wrapper-view {
    display: flex;
  }

  .project-template {
    padding: 20px;
    color: #091123;
    min-height: 100vh;

    h2 {
      font-weight: 500; 
    }

    #project-type {
      display: flex;
      align-items: center;

      div {
        margin-left: 20px;

        p {
          padding: 5px;
          color: white;
          border-radius: 10px;
        }
      }
    }

    #lang, #framework {
      span {
        padding: 5px;
        border-radius: 10px;
        color: white;
        margin-left: 5px;
        margin-right: 5px;
      }
    }

    #link {
      a {
        color: #091123;
      }
    }
  }

  #img {
    padding: 20px;
    img {
      width: 100%;
    }
  }

  .personnal {
    background-color: rgba(54, 133, 206, 0.849);
  }

  .school {
    background-color: rgba(64, 54, 206, 0.849);
  }

  .work {
    background-color: rgba(163, 54, 206, 0.849);
  }
</style>