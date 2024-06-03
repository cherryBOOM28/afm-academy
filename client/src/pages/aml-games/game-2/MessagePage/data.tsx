import Character3 from './../../assets/asian-man.png';
import Character1 from './../../assets/asian-woman.png';
import Character2 from './../../assets/white-woman.png';
import { ChatProps, UserProps } from './types';

export const users: UserProps[] = [
  {
    name: 'Айжан',
    username: '',
    avatar: Character1,
    online: true,
  },
  {
    name: 'Дамир',
    username: '',
    avatar: Character2,
    online: true,
  },
  {
    name: 'Дархан',
    username: '',
    avatar: Character3,
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
        content: 'Какое у вас образование?',
        timestamp: 'среда 9:00',
        sender: 'You',
      },
      {
        id: '2',
        content: 'Высшее образование по специальности юриспруденция.',
        timestamp: 'среда 9:02',
        sender: users[0],
      },
      {
        id: '3',
        timestamp: 'среда 9:05',
        sender: 'You',
        content: 'Какой у вас опыт в ювелирном секторе?',
      },
      {
        id: '4',
        timestamp: 'среда 9:07',
        sender: users[0],
        content: 'В ювелирном секторе отсутствует стаж работы, при этом имеется юристом в финансовых компаниях более трех лет, включая работу с вопросами ПОД/ФТ и соблюдение законодательства.',
      },
      {
        id: '5',
        timestamp: 'среда 9:10',
        sender: 'You',
        content: 'Расскажите о Вашей деловой репутации?',
      },
      {
        id: '6',
        timestamp: 'среда 9:12',
        sender: users[0],
        content: 'Положительные рекомендации от предыдущих работодателей, в том числе за высокий уровень профессионализма и четкое понимание требований в сфере ПОД/ФТ.',
      },
      {
        id: '7',
        timestamp: 'среда 9:16',
        sender: 'You',
        content: 'Имеется ли у вас неснятая или непогашенная судимость?',
      },
      {
        id: '8',
        timestamp: 'среда 9:20',
        sender: users[0],
        content: 'Отсутствует неснятая или непогашенная судимость. Также, отсутствует решения суда о применении уголовного наказания в виде лишения права занимать должность руководящего работника.',
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
      },
    ],
  },
  ];