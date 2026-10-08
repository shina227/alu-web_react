import {notificationReducer} from './notificationReducer';
import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  NotificationTypeFilters,
  SET_TYPE_FILTER
} from '../actions/notificationActionTypes';

describe('notificationReducer', () => {
  const initialState = {
    notifications: [],
    filter: 'DEFAULT'
  };

  it('should return the initial state', () => {
    expect(notificationReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle FETCH_NOTIFICATIONS_SUCCESS', () => {
    const action = {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data: [
        { id: 1, isRead: false, type: NotificationTypeFilters.DEFAULT, value: "New available" },
        { id: 2, isRead: false, type: NotificationTypeFilters.URGENT, value: "old item deleted" },
        { id: 3, isRead: false, type:  NotificationTypeFilters.URGENT, value: "New piece added available" }
      ]
    };
    const expectedState = {
      filter: 'DEFAULT',
      notifications: [
        { id: 1, isRead: false, type: NotificationTypeFilters.DEFAULT, value: "New available" },
        { id: 2, isRead: false, type: NotificationTypeFilters.URGENT, value: "old item deleted" },
        { id: 3, isRead: false, type:  NotificationTypeFilters.URGENT, value: "New piece added available" }
      ]
    };
    expect(notificationReducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle MARK_AS_READ', () => {
    const initialState = {
      filter: 'DEFAULT',
      notifications: [
        { id: 1, isRead: false, type: NotificationTypeFilters.DEFAULT, value: "New available" },
        { id: 2, isRead: false, type: NotificationTypeFilters.URGENT, value: "old item deleted" },
        { id: 3, isRead: false, type:  NotificationTypeFilters.URGENT, value: "New piece added available" }
      ]
    };
    const action = {
      type: MARK_AS_READ,
      index: 2
    };
    const expectedState = {
      filter: 'DEFAULT',
      notifications: [
        { id: 1, isRead: false, type: NotificationTypeFilters.DEFAULT, value: "New available" },
        { id: 2, isRead: true, type: NotificationTypeFilters.URGENT, value: "old item deleted" },
        { id: 3, isRead: false, type:  NotificationTypeFilters.URGENT, value: "New piece added available" }
      ]
    };
    expect(notificationReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle SET_TYPE_FILTER', () => {
    const action = {
      type: SET_TYPE_FILTER,
      filter: 'URGENT'
    };
    const expectedState = {
      filter: 'URGENT',
      notifications: []
    };
    expect(notificationReducer(undefined, action)).toEqual(expectedState);
  });
});