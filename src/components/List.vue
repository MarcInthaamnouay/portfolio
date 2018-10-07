<template>
  <div class="list">
    <div
      class="project"
      v-for="project in projects"
      v-bind:key="project.id"
    >
      <h3>{{project.name}}</h3>
      <p>{{project.desc}}</p>
      <div class="tag">
        <span
          v-for="tag in project.lang"
          v-bind:key="tag"
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
  }
}
</script>

<style lang="scss">
.project {
  width: 30%;
  background-color: #f9f5ef;
  min-height: 150px;
  border-radius: 10px;
  margin-left: 5px;
  margin-right: 5px;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 10px;
  color: #3d68a3;
}

.list, .tag {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
</style>