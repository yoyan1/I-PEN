const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'grade-two/',
        children: [
          { path: 'home', component: () => import('pages/teacher/IndexPage.vue'),},
          { path: 'pre-test', component: () => import('src/pages/teacher/gradeTwo/PreTest.vue')},
          { path: 'lesson-one', component: () => import('src/pages/teacher/gradeTwo/LessoneTwo.vue') },
          { path: 'lesson-two', component: () => import('src/pages/teacher/gradeTwo/LessoneTwo.vue') },
          { path: 'lesson-3', component: () => import('src/pages/teacher/gradeTwo/LessonThree.vue') },
          { path: 'post-test', component: () => import('src/pages/teacher/gradeTwo/PostTest.vue') },
        ]
      },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
