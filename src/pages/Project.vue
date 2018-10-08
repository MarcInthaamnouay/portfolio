<template>
  <div class="project-template">
    <h2>{{project.name}}</h2>
    <div v-bind:class="project.type">
      <p>{{project.type}}</p>
    </div>
    <div id="desc">
      <h3>Description</h3>
      <p>{{project.description}}</p>
    </div>
    <div id="lang">
      <h3>Languages</h3>
      <span
        v-for="lang in project.languages"
        v-bind:key="lang"
      >
        {{lang}}
      </span>
    </div>
    <div id="framework">
      <h3>Framework</h3>
      <span
        v-for="f in project.framework"
        v-bind:key="f"
      >
        {{f}}
      </span>
    </div>
  </div>
</template>

<script>
import { getProjectById } from '@/selector/project'

export default {
  name: 'project',
  data: function() {
    const id = this.$route.params.id
    return {
      project: getProjectById(id)
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
  .project-template {
    padding: 20px;
    color: #091123;

    h2 {
      font-weight: 500; 
    }
  }
</style>