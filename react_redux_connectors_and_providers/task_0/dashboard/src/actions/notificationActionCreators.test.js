import { markAsRead, setNotificationFilter, } from './notificationActionCreators';
import { MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters } from './notificationActionTypes';

describe('notification action creator', () => {
    test('markAsRead', () => {
    const result = markAsRead(1);

    expect(result.type).toEqual(MARK_AS_READ);
    expect(result.index).toEqual(1);
    });

    test('setNotificationFilter', () => {
    const { DEFAULT, URGENT } = NotificationTypeFilters;

    let result = setNotificationFilter(DEFAULT);

    expect(result.type).toEqual(SET_TYPE_FILTER);
    expect(result.filter).toEqual(DEFAULT);

    result = setNotificationFilter(URGENT);

    expect(result.type).toEqual(SET_TYPE_FILTER);
    expect(result.filter).toEqual(URGENT);
    });
});