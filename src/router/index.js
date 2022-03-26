import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GameView from '../views/GameView.vue'
import RoomView from '../views/RoomView.vue'
import NewsView from '../views/NewsView.vue'
import ForumView from '../views/ForumView.vue'
import store from '../store'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/game',
    name: 'Game',
    component: GameView,
    meta: {requiresAuth: true}
  },
  {
    path: '/room',
    name: 'Rooms',
    component: RoomView,
    meta: {requiresAuth: true}
  },
  {
    path: '/news',
    name: 'News',
    component: NewsView,
    // meta: {requiresAuth: true}
  },
  {
    path: '/forum',
    name: 'Forum',
    component: ForumView,
    // meta: {requiresAuth: true}
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next();
      return
    }
    else{
      next('/');
    }
  } else {
    next() 
  }
})

export default router
