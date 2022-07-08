import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GameView from '../views/GameView.vue'
import RoomView from '../views/RoomView.vue'
import NewsView from '../views/NewsView.vue'
import ForumView from '../views/ForumView.vue'
import store from '../store'

const routes = [
  {
    meta: {layout: 'home'},
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/game',
    name: 'Game',
    meta: {requiresAuth: true},
    component: GameView,
  },
  {
    path: '/room',
    name: 'Rooms',
    meta: {requiresAuth: true},
    component: RoomView,
  },
  {
    path: '/news',
    name: 'News',
    component: NewsView,
  },
  {
    path: '/forum',
    name: 'Forum',
    component: ForumView,
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
