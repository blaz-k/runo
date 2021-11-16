import {createRouter, createWebHashHistory} from 'vue-router'
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Article from '../pages/Article.vue'
import EditorsPick from '../pages/EditorsPick.vue'



const routes = [
  { path: '/', name:'Home' , component: Home },
  { path: '/about', name:'About', component: About},
  { path: '/article', name:'Article', component: Article},
  { path: '/editors-pick', name:'EditorsPick', component: EditorsPick},
]

const router = createRouter({
 history: createWebHashHistory(process.env.BASE_URL),
 routes
})

export default router