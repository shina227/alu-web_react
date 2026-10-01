import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from "./uiActionTypes";
import immutable from "immutable";

const { Map } = immutable;

export const initialState = {
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: {},
};

export const uiReducer = (state = initialState, action) => {
  state = Map(state);
  switch (action.type) {
    case DISPLAY_NOTIFICATION_DRAWER:
      return { ...state, isNotificationDrawerVisible: true };
    case HIDE_NOTIFICATION_DRAWER:
      return { ...state, isNotificationDrawerVisible: false };
    case LOGIN_SUCCESS:
      return { ...state, isUserLoggedIn: true };
    case LOGIN_FAILURE:
      return { ...state, isUserLoggedIn: false };
    case LOGOUT:
      return { ...state, isUserLoggedIn: false };
    default:
      break;
  }
  return state;
};
