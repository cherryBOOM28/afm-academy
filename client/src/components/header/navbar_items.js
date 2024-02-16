const navbar_items = [
    {
        name: 'Главная',
        route: '/',
        subItems: []
    },
    {
      name: 'about us',
      route: null,
      subItems: [
        {
          name: 'about the academy',
          route: '/about'
        },
        {
          name: 'board of directors',
          route: '/management'
        },
        {
          name: 'structure',
          route: '/structure'
        },
        {
          name: 'corporate governance',
          route: '/charter'
        },
        {
          name: 'contacts',
          route: '/contacts'
        }
      ]
    },
    {
      name: 'training',
      route: null,
      subItems: [
        {
          name: 'types of courses',
          route: '/#coursesSection'
        },
        {
          name: 'course catalog',
          route: '/courses/catalog'
        },
        {
          name: 'my courses',
          route: '/courses/myCourses'
        },
      ]
    },
    {
      name: 'webinars',
      route: null,
      subItems: [
        {
          name: 'webinars',
          route: '/vebinars'
        },
        {
          name: 'announcements',
          route: '/vebinars/calendar'
        },
        {
          name: 'surveys',
          route: '/vebinars/surveys'
        },
      ]
    },
    {
      name: 'news',
      route: '/#newsSection',
      subItems: [
        
      ]
    },
    {
      name: 'aml/ft',
      route: null,
      subItems: [
        {
          name: 'anti-washing system of the RK',
          route: '/anti-laundering'
        },
        {
          name: 'fatf',
          route: '/fatf'
        },
        {
          name: 'eag',
          route: '/eag'
        },
        {
          name: 'mutual assessment',
          route: '/mutual-evaluation'
        },
      ]
  },
    {
      name: 'ric',
      route: null,
      subItems: [
      ]
    },
    {
      name: 'sfm',
      route: null,
      subItems: [
        {
          name: 'types of subjects of financial monitoring',
          route: '/subjects'
        },
        {
          name: 'internal control rules',
          route: '/rules'
        },
        {
          name: 'transactions subject to financial monitoring',
          route: '/operations'
        },
      ]
    },
  ]

export default navbar_items;