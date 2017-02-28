const routes = [
  {
    path: '/',
    name: 'home',
    component(resolve) {
      require.ensure(['./pages/Home.vue'], () => {
        resolve(require('./pages/Home.vue'));
      })
    },
  },
  {
    path: '/topics/:type',
    name: 'topics',
    component(resolve) {
      require.ensure(['./pages/Topics.vue'], () => {
        resolve(require('./pages/Topics.vue'));
      })
    }
  },
  {
    path: '/topic/:id',
    name: 't-detail',
    component(resolve) {
      require.ensure(['./pages/TopicDetail.vue'], () => {
        resolve(require('./pages/TopicDetail.vue'));
      })
    }
  },
  {
    path: '/user/:id',
    name: 'user',
    component(resolve) {
      require.ensure(['./pages/User.vue'], () => {
        resolve(require('./pages/User.vue'));
      })
    },
    children: [
      {
        path: '',
        name: 'u-topics',
        component(resolve) {
          require.ensure(['./pages/UTopics.vue'], () => {
            resolve(require('./pages/UTopics.vue'));
          })
        }
      },
      {
        path: 'replies',
        name: 'u-replies',
        component(resolve) {
          require.ensure(['./pages/UReplies.vue'], () => {
            resolve(require('./pages/UReplies.vue'));
          })
        }
      }, {
        path: 'favorites',
        name: 'u-favorites',
        component(resolve) {
          require.ensure(['./pages/UFavorites.vue'], () => {
            resolve(require('./pages/UFavorites.vue'));
          })
        }
      }, {
        path: 'following',
        name: 'u-following',
        component(resolve) {
          require.ensure(['./pages/UFollowing.vue'], () => {
            resolve(require('./pages/UFollowing.vue'));
          })
        }
      }, {
        path: 'followers',
        name: 'u-followers',
        component(resolve) {
          require.ensure(['./pages/UFollowers.vue'], () => {
            resolve(require('./pages/UFollowers.vue'));
          })
        }
      }
    ]
  },
  {
    path: '/node/:id',
    name: 'node',
    component(resolve) {
      require.ensure(['./pages/Node.vue'], () => {
        resolve(require('./pages/Node.vue'));
      })
    }
  }
];

export default routes;
