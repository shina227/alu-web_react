import { LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT, HIDE_NOTIFICATION_DRAWER, DISPLAY_NOTIFICATION_DRAWER } from '../actions/uiActionTypes';
import { Map } from 'immutable';

export const initialState = Map({
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: {}
})

export function uiReducer(state = initialState, action) {
    switch (action.type) {
        case LOGOUT:
            return state.set('isUserLoggedIn', false);
        case DISPLAY_NOTIFICATION_DRAWER:
            return state.set('isNotificationDrawerVisible', true);
        case HIDE_NOTIFICATION_DRAWER:
            return state.set('isNotificationDrawerVisible', false);
        case LOGIN_SUCCESS:
            return state.set('isUserLoggedIn', true);
        case LOGIN_FAILURE:
            return state.set('isUserLoggedIn', false);
        default:
            return state;
    }
}

