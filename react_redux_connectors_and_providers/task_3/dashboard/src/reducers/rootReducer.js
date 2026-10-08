import { combineReducers } from 'redux';
import { uiReducer } from './uiReducer';
import { coursesReducer } from './coursesReducer';
import { notificationReducer } from './notificationReducer';

export const rootReducer = combineReducers({
    ui: uiReducer,
    courses: coursesReducer,
    notifications: notificationReducer
});