import { combineReducers } from 'redux';
import { uiReducer } from './uiReducer';
import { courseReducer } from './courseReducer';
import { notificationReducer } from './notificationReducer';

export const rootReducer = combineReducers({
    ui: uiReducer,
    courses: courseReducer,
    notifications: notificationReducer
});