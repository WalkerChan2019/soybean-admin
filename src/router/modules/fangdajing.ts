const fangdajing: AuthRoute.Route = {
  name: 'fangdajing',
  path: '/fangdajing',
  component: 'self',
  meta: {
    title: '放大镜',
    requiresAuth: true,
    singleLayout: 'basic',
    permissions: ['super', 'admin', 'user'],
    icon: 'fluent:book-information-24-regular',
    order: 9
  }
};

export default fangdajing;
