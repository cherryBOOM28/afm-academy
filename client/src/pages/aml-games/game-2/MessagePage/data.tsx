import { ChatProps, UserProps } from './types';

export const users: UserProps[] = [
  {
    name: 'Damir B.',
    username: '@Kachok',
    avatar: './../../assets/svg/Character1.svg',
    online: true,
  },
  {
    name: 'Dilnaz A.',
    username: '@dina',
    avatar: '/static/images/avatar/3.jpg',
    online: false,
  },
  {
    name: 'Daulet A.',
    username: '@phoenix',
    avatar: '/static/images/avatar/1.jpg',
    online: true,
  }
];

export const chats: ChatProps[] = [
  {
    id: '1',
    sender: users[0],
    messages: [
      {
        id: '1',
        content: 'Hi ',
        timestamp: 'Wednesday 9:00am',
        sender: users[0],
      },
      {
        id: '2',
        content: 'That ',
        timestamp: 'Wednesday 9:10am',
        sender: 'You',
      },
      {
        id: '3',
        timestamp: 'Wednesday 11:30am',
        sender: users[0],
        content: 'f the day.',
      },
      {
        id: '4',
        timestamp: 'Wednesday 2:00pm',
        sender: 'You',
        content: ' for it.',
      },
    ],
  },
  {
    id: '2',
    sender: users[1],
    messages: [
      {
        id: '1',
        content: 'Hi ',
        timestamp: 'Wednesday 9:00am',
        sender: users[1],
      },
      {
        id: '2',
        content:
          'That ?',
        timestamp: 'Wednesday 9:05am',
        sender: 'You',
      },
      {
        id: '3',
        content: 'I am .',
        timestamp: 'Wednesday 9:30am',
        sender: users[1],
      },
      {
        id: '4',
        content: 'time of year!',
        timestamp: 'Wednesday 9:35am',
        sender: 'You',
      }
    ],
  },
  {
    id: '3',
    sender: users[2],
    messages: [
      {
        id: '1',
        content: 'Hey!',
        timestamp: '5 mins ago',
        sender: users[2],
        unread: true,
      },
    ],
  },
  ];