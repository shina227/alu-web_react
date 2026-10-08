import { MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters, FETCH_NOTIFICATIONS_SUCCESS, SET_LOADING_STATE } from '../actions/notificationActionTypes';
import { Map, fromJS } from 'immutable';

const initialState = Map({
    notifications: Map(),
    filter: NotificationTypeFilters.DEFAULT,
    loading: false
});

export function notificationReducer(state = initialState, action) {
    switch (action.type) {
        case MARK_AS_READ:
            console.log(state.get('notifications').get(action.index).toJS());
            const newState = state.setIn(['notifications', action.index, 'context', 'isRead'], true);
            console.log(newState.toJS(), '====new');
            console.log(newState.get('notifications').get(action.index).toJS(), '====new');
            return newState;
        case SET_TYPE_FILTER:
            return state.set('filter', action.filter);
        case FETCH_NOTIFICATIONS_SUCCESS:
            return state.set('notifications', fromJS(action.data));
        case SET_LOADING_STATE:
            return state.set('loading', action.loading);
        default:
            return state;
    }
}
