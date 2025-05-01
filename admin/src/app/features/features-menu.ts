import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Tenant',
    icon: 'keypad-outline',
    link: '/feature/tenant',
    home: true,
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
];
