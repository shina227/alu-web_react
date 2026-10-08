import { SELECT_COURSE, UNSELECT_COURSE, FETCH_COURSE_SUCCESS } from '../actions/courseActionTypes';
import { fromJS } from 'immutable';

const initialState = fromJS({
  courses: {},
});

export const courseReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_COURSE:
            return state.setIn(['courses', action.index, 'isSelected'], true);
        case UNSELECT_COURSE:
            return state.setIn(['courses', action.index, 'isSelected'], false);
        case FETCH_COURSE_SUCCESS:
            const newState = state.set('courses', fromJS(action.data));
            console.log(newState.toJS(), '====== newState, ');
            return newState;
        default:
            return state;
    }
};