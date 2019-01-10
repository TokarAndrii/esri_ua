import types from './types';

const INITIAL_NAVLIST = [
  {
    name: 'Головна',
    id: '5',
    path: '/',
    subMenu: [],
    isOpenSubMenu: false,
  },
  {
    name: 'Проекти',
    id: '1',
    path: '/projects',
    isOpenSubMenu: false,
    subMenu: [
      {
        name: 'Екологія',
        id: '11',
        path: '/ecology',
      },
      {
        name: 'ОТГ',
        id: '12',
        path: '/otg',
      },
      {
        name: 'Картографування',
        id: '13',
        path: '/cartography',
      },
      {
        name: 'Бізнес',
        id: '14',
        path: '/business',
      },
      {
        name: 'Навчання',
        id: '15',
        path: '/study',
      },
    ],
  },
  {
    name: 'Продукти',
    id: '2',
    path: '/products',
    isOpenSubMenu: false,
    subMenu: [
      {
        name: 'ArcGIS',
        id: '21',
        path: '/arc-gis',
      },
      {
        name: 'ENVI',
        id: '22',
        path: '/envi',
      },
      {
        name: 'Для розробників',
        id: '23',
        path: '/for-developers',
      },
      {
        name: 'Тестова версія',
        id: '24',
        path: '/test-version',
      },
    ],
  },
  {
    name: 'Новини',
    id: '6',
    path: '/news',
    isOpenSubMenu: false,
    subMenu: [
      {
        name: 'Актуальні',
        id: '61',
        path: '/actual-news',
      },
      {
        name: 'Події в світі ГІС',
        id: '62',
        path: '/events-world-gis-news',
      },
    ],
  },
  {
    name: 'Технічна підтримка',
    id: '3',
    path: '/tech-support',
    isOpenSubMenu: false,
    subMenu: [],
  },
  {
    name: 'Про компанію',
    id: '4',
    path: '/contacts',
    isOpenSubMenu: false,
    subMenu: [
      {
        name: 'ESRI Ukraine',
        id: '41',
        path: '/esri-ukraine',
      },
      {
        name: 'Контакти',
        id: '42',
        path: '/contacts',
      },
      {
        name: 'Задати питання',
        id: '43',
        path: '/mail-us',
      },
    ],
  },
];

function navigationListReducer(
  state = [...INITIAL_NAVLIST],
  { type, payload },
) {
  switch (type) {
    case types.GET_ALL_NAVLIST:
      return state;
    case types.TOGGLE_NAVLIST_ITEM_IS_OPEN_SUBMENU:
      return state.map(currentItem =>
        currentItem.id === payload
          ? { ...currentItem, isOpenSubMenu: !currentItem.isOpenSubMenu }
          : currentItem,
      );

    case types.SET_ALL_NAVLIST_ITEM_IS_OPEN_SUBMENU_TO_FALSE:
      return state.map(currentItem => ({
        ...currentItem,
        isOpenSubMenu: false,
      }));

    default:
      return state;
  }
}

export default navigationListReducer;