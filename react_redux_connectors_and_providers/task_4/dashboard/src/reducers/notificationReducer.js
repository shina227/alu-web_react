import { MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters, FETCH_NOTIFICATIONS_SUCCESS } from '../actions/notificationActionTypes';

const initialState = {
    notifications: [],
    filter: NotificationTypeFilters.DEFAULT,
};

export function notificationReducer(state = initialState, action) {
    switch (action.type) {
        case MARK_AS_READ:
            return {
                ...state,
                notifications: state.notifications.map((notification) => {
                    if (notification.id === action.index) {
                        return {
                            ...notification,
                            isRead: true,
                        };
                    }
                    return notification;
                }),
            };
        case SET_TYPE_FILTER:
            return {
                ...state,
                filter: action.filter,
            };
        case FETCH_NOTIFICATIONS_SUCCESS:
            return {
                ...state,
                notifications: action.data.map((notification) => ({
                    ...notification,
                    isRead: false,
                })),
            };
        default:
            return state;
    }
}
