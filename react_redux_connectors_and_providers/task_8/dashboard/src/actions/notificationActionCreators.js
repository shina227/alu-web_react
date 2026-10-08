import { getNotifications } from '../data';
import { MARK_AS_READ, SET_TYPE_FILTER, SET_LOADING_STATE, FETCH_NOTIFICATIONS_SUCCESS } from './notificationActionTypes';
import { bindActionCreators } from 'redux';
import { normalize, schema } from 'normalizr';


const userSchema = new schema.Entity('users');
const notificationSchema = new schema.Entity('notifications', {
  author: userSchema,
  context: {},
});
const notificationsSchema = [notificationSchema];
export const markAsRead = index => {
    return { type: MARK_AS_READ, index }
};
export const setNotificationFilter = (filter) => { 
    return { type: SET_TYPE_FILTER, filter };
}


export const setLoadingState = (loading) => {
    
    return { type: SET_LOADING_STATE, loading };
}

export const setNotifications = (data) => {
    const normalizedData = normalize(data, notificationsSchema);
    return { type: FETCH_NOTIFICATIONS_SUCCESS, data: normalizedData.entities.notifications };
}

export const fetchNotifications = () => {
    return async (dispatch) => {
        dispatch(setLoadingState(true));
        try {
            const data = await getNotifications();
            dispatch(setNotifications(data));
            dispatch(setLoadingState(false));
        } catch (error) {
            console.log(error);
            dispatch(setLoadingState(false));
        }
    }
}
export const boundMarkAsRead = (dispatch) => bindActionCreators(markAsRead, dispatch);
export const boundSetNotificationFilter = (dispatch) => bindActionCreators(setNotificationFilter, dispatch);
export const boundFetchNotifications = (dispatch) => bindActionCreators(fetchNotifications, dispatch);
export const boundSetLoadingState = (dispatch) => bindActionCreators(setLoadingState, dispatch);

