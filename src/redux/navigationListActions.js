import types from './types';

const GET_ALL_NAVLIST = () => ({
  type: types.GET_ALL_NAVLIST,
  payload: null,
});

const TOGGLE_NAVLIST_ITEM_IS_OPEN_SUBMENU = id => ({
  type: types.TOGGLE_NAVLIST_ITEM_IS_OPEN_SUBMENU,
  payload: id,
});

const SET_ALL_NAVLIST_ITEM_IS_OPEN_SUBMENU_TO_FALSE = () => ({
  type: types.SET_ALL_NAVLIST_ITEM_IS_OPEN_SUBMENU_TO_FALSE,
  payload: null,
});

export default {
  GET_ALL_NAVLIST,
  TOGGLE_NAVLIST_ITEM_IS_OPEN_SUBMENU,
  SET_ALL_NAVLIST_ITEM_IS_OPEN_SUBMENU_TO_FALSE,
};
