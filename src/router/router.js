import VueRouter from 'vue-router'

// template
import About from '../pages/About.vue'
import Project from '../pages/Project.vue'
import Home from '../pages/Home.vue'

const routes = [
  { path: '/about', component: About },
  { path: '/project/:id', component: Project },
  { path: '/', component: Home }
]

const router = new VueRouter({ routes })

export default router
