import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../components/HomePage.vue'
import AboutView from '../views/AboutView.vue'
import AddBlog from '../components/Add-Blog.vue'
import Comments from '../components/Comments.vue'
import BlogDetails from '../components/BlogDetails.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
  }
  ,
  {
    path: '/blog',
    name: 'Blog',
    component: AddBlog
  },
  {
    path: '/comments',
    name: 'Comments',
    component: Comments
  }
  ,
  {
    path: '/blog-details/:blogId',
    name: 'BlogDetails',
    component: BlogDetails,
    props: true,
    params: true,
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
