import { createMemoryHistory, createRouter } from 'vue-router'
import LibraryView from './views/LibraryView.vue'

export const routes = [{ path: '/', component: LibraryView, name: 'Library' }]

export const router = createRouter({
  history: createMemoryHistory(),
  routes
})
