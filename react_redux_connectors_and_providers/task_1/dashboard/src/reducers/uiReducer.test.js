import { uiReducer } from './uiReducer';
import { Map } from 'immutable';

describe('uiReducer', () => {
    const initialState = Map({
        isNotificationDrawerVisible: false,
        isUserLoggedIn: false,
        user: {}
    
    })
    it('should return the initial state', () => {
        expect(uiReducer(undefined, {})).toEqual(initialState);
    });

    it('should handle LOGOUT', () => {

        expect(
            uiReducer(undefined, {
                type: 'LOGOUT'
            })
        ).toEqual(initialState.set('isUserLoggedIn', false));
    });

    it('should handle DISPLAY_NOTIFICATION_DRAWER', () => {
        expect(
            uiReducer(undefined, {
                type: 'DISPLAY_NOTIFICATION_DRAWER'
            })
        ).toEqual(initialState.set('isNotificationDrawerVisible', true));
    });

    it('should handle HIDE_NOTIFICATION_DRAWER', () => {
        expect(
            uiReducer(undefined, {
                type: 'HIDE_NOTIFICATION_DRAWER'
            })
        ).toEqual(initialState.set('isNotificationDrawerVisible', false));
    });

    it('should handle LOGIN_SUCCESS', () => {
        expect(
            uiReducer(undefined, {
                type: 'LOGIN_SUCCESS'
            })
        ).toEqual(initialState.set('isUserLoggedIn', true));
    });

    it('should handle LOGIN_FAILURE', () => {
        expect(
            uiReducer(undefined, {
                type: 'LOGIN_FAILURE'
            })
        ).toEqual(initialState.set('isUserLoggedIn', false));
    });
});