const navbar_items = [
    {
        name: 'Главная',
        route: '/',
        subItems: []
    },
    {
      name: 'О нас',
      route: null,
      subItems: [
        {
          name: 'Об академии',
          route: '/about'
        },
        {
          name: 'Совет директоров',
          route: '/management'
        }
      ]
    },
    {
      name: 'Обучение',
      route: null,
      subItems: [
        {
          name: 'Виды курсов',
          route: '/#coursesSection'
        },
        {
          name: 'Каталог курсов',
          route: '/courses/catalog'
        },
        {
          name: 'Мои курсы',
          route: '/courses/myCourses'
        },
      ]
    },
    {
      name: 'Вебинары',
      route: null,
      subItems: [
        {
          name: 'Все вебинары',
          route: '/vebinars'
        },
        {
          name: 'Календарь мероприятий',
          route: '/vebinars/calendar'
        },
        {
          name: 'Опросы',
          route: '/vebinars/surveys'
        },
      ]
    },
    {
      name: 'Новости',
      route: '/#newsSection',
      subItems: [
        
      ]
    },
    {
      name: 'ПОД/ФТ',
      route: null,
      subItems: [
        {
          name: 'Антиотмывочная система РК',
          route: '/anti-laundering'
        },
        {
          name: 'ФАТФ',
          route: '/fatf'
        },
        {
          name: 'ЕАГ',
          route: '/eag'
        },
        {
          name: 'Взаимная оценка',
          route: '/mutual-evaluation'
        },
      ]
    },
    {
      name: 'СФМ',
      route: null,
      subItems: [
        {
          name: 'Виды субъектов финансового мониторинга',
          route: '/subjects'
        },
        {
          name: 'Правила внутреннего контроля',
          route: '/rules'
        },
        {
          name: 'Операции, подлежащие финансовому мониторингу',
          route: '/operations'
        },
      ]
    },
  ]

export default navbar_items;