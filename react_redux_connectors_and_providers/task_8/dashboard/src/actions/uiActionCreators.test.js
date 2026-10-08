import configureStore from 'redux-mock-store';
import { thunk } from 'redux-thunk';
import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_FAILURE, LOGIN_SUCCESS } from './uiActionTypes';
import { login, logout, displayNotificationDrawer, hideNotificationDrawer, loginRequest } from './uiActionCreators';
import { getLoginInfo } from '../data';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

jest.mock('../data', () => {
    return {getLoginInfo: jest.fn()}
})
describe('ui action creators', () => {
    afterAll(() => {
        jest.restoreAllMocks();
    });
    it('login', () => {
        const result = login('user@test.com', 'password');

        expect(result.type).toBe(LOGIN);
        expect(result.user.email).toBe('user@test.com')
        expect(result.user.password).toBe('password')
    });

    it('logout', () => {
        const result = logout();

        expect(result.type).toBe(LOGOUT);
    });

    test('displayNotificationDrawer', () => {
        const result = displayNotificationDrawer();

        expect(result.type).toBe(DISPLAY_NOTIFICATION_DRAWER);
    });

    it('hideNotificationDrawer', () => {
        const result = hideNotificationDrawer();

        expect(result.type).toBe(HIDE_NOTIFICATION_DRAWER);
    })

    it('should creates LOGIN when loginRequest succeed', () => {
        getLoginInfo.mockReturnValue(Promise.resolve({
            "first_name": "Johann",
            "last_name": "Salva",
            "email": "johann.salva@holberton.nzss",
            "profile_picture": "http://placehold.it/32x32"
          }))

        const expectedActions = [
            { type: LOGIN, user: { email: 'test@example.com', password: 'password123' } },
            { type: LOGIN_SUCCESS },
        ];

        const store = mockStore({});
        return store.dispatch(loginRequest('test@example.com', 'password123')).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it('should creates LOGIN_FAILURE when loginRequest fails', () => {
        getLoginInfo.mockReturnValue(Promise.reject({}));

        const expectedActions = [
            { type: LOGIN, user: { email: 'test@example.com', password: 'password123' } },
            { type: LOGIN_FAILURE },
        ];

        const store = mockStore({});
        return store.dispatch(loginRequest('test@example.com', 'password123')).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});