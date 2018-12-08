
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'Add_Event', component: () => import('pages/Add_Event.vue') },
      { path: 'Events', component: () => import('pages/Events.vue') },
      { path: 'Chat', component: () => import('pages/Chat.vue') },
      { path: 'Resources', component: () => import('pages/Resources.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
