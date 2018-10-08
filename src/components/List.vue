<template>
  <div class="list">
    <div
      class="project"
      v-for="project in projects"
      v-bind:key="project.id"
      v-on:click="goToProject(project.id)"
    >
      <h3>{{project.name}}</h3>
      <p>{{project.desc}}</p>
      <div class="tag">
        <span
          v-for="tag in project.lang"
          v-bind:key="tag"
          v-bind:class="tag"
        >
          <p>{{tag}}</p>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectParser from '@/selector/project'

export default {
  name: 'list',
  data: () => {
    return {
      projects: ProjectParser()
    }
  },
  methods: {
    /**
     * Go To Project
     * 
     * @param {Number} id
     */
    goToProject(id) {
      this.$router.push({ path: `/project/${id}` })
    }
  }
}
</script>

<style lang="scss">
.list {
  padding: 20px;
}

.project {
  width: 30.8%;
  background-color: #f9f5ef;
  min-height: 180px;
  border-radius: 10px;
  margin-left: 5px;
  margin-right: 5px;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 10px;
  color: #091123;
  transition: .25s ease;
}

.project:hover {
  background-color: #f9f5efc9;
  cursor: pointer;
}

.list, .tag {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

.tag {

  span {
    padding-left: 10px;
    padding-right: 10px;
    margin-left: 5px;
    margin-right: 5px;
    border-radius: 10px;

    p {
      margin: 5px;
      color: white;
    }
  }

  .js {
    background-color: #FFA646;
  }

  .c {
    background-color: #555555;
  }

  .java {
    background-color: #b07219;
  }

  .markdown {
    background-color: #1a64c6
  }

  .android {
    background-color: #A4C639;
  }
}
</style>