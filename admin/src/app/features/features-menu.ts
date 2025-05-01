import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'keypad-outline',
    link: '/feature/dashboard',
    home: true,
  },
  {
    title: 'Booking',
    icon: 'keypad-outline',
    link: '/feature/booking',
    home: true,
  },
  {
    title: 'Operation',
    icon: 'shuffle-2-outline',
    link: '/feature/operation',
  },
  {
    title: 'Accountancy',
    icon: 'layout-outline',
    children: [
      {
        title: 'Bank',
        // link: '/pages/layout/stepper',
      },
      {
        title: 'Invoice',
        // link: '/pages/layout/list',
      },
      {
        title: 'Current',
        // link: '/pages/layout/infinite-list',
      },
    ],
  },
  {
    title: 'Definitions',
    icon: 'layout-outline',
    children: [
      {
        title: 'Firma',
        // link: '/pages/layout/stepper',
      },
      {
        title: 'Yerler',
        // link: '/pages/layout/list',
      }
    ],
  },
  {
    title: 'Reports',
    icon: 'edit-2-outline',
    // link: '/feature/booking',
    home: true,
  },
];
