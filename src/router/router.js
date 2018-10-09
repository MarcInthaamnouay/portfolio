import VueRouter from 'vue-router'

// template
import Project from '@/pages/Project.vue'
import Home from '@/pages/Home.vue'
import Notfound from '@/pages/Notfound.vue'

const routes = [
  {
    path: '/project/:id',
    component: Project,
    beforeEnter: (to, _, next) => {
      const id = parseInt(to.params.id)

      if (isNaN(id)) {
        return next({ path: '/' })
      }

      return next()
    }
  },
  { path: '/', component: Home },
  { path: '*', component: Notfound }
]

const router = new VueRouter({ routes })

export default router
