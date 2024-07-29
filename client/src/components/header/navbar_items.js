const navbar_items = [
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
          name: 'course catalog',
          route: '/courses'
        },
        {
          name: 'my courses',
          route: '/courses/myCourses'
        },
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
        {
          name: 'AML словарь',
          route: '/vebinars/dictionary'
        },
      ]
    },
    {
      name: 'news',
      route: null,
      subItems: [
        {
          name: 'Последние новости',
          route: '/news-page'
        },
        {
          name: 'Архив новостей',
          route: '/all-news'
        },
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
        {
          name: 'transactions subject to financial monitoring',
          route: '/operations'
        },
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