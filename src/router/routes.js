
const routes = [
  { path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'Resources', component: () => import('pages/Resources.vue') },
      { path: '/Events/Add_Event', component: () => import('pages/Add_Event.vue') },
      { path: '/Events', component: () => import('pages/Events.vue') }
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
