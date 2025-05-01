import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Tenant',
    icon: 'keypad-outline',
    link: '/feature/tenant',
    home: false,
    children: [
      {
        title: 'Add Tenant',
        link: '/feature/tenant/add-edit/0',
      },
      {
        title: 'List Tenant',
        link: '/feature/tenant/list',
      },
    ],
  },
  {
    title: 'Subscription Plan',
    icon: 'keypad-outline',
    link: '/feature/subscription-plan',
    home: false,
    children: [
      {
        title: 'Add Subscription Plan',
        link: '/feature/subscription-plan/add-edit/0',
      },
      {
        title: 'List Subscription Plan',
        link: '/feature/subscription-plan/list',
      },
    ],
  },
  {
    title: 'User',
    icon: 'keypad-outline',
    link: '/feature/user',
    home: false,
    children: [
      {
        title: 'Add User',
        link: '/feature/user/add-edit/0',
      },
      {
        title: 'List User',
        link: '/feature/user/list',
      },
    ],
  },
];
