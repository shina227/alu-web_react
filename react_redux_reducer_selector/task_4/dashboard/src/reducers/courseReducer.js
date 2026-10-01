import {
  FETCH_COURSE_SUCCESS,
  UNSELECT_COURSE,
  SELECT_COURSE,
} from "../actions/courseActionTypes";
import { normalize, schema } from "normalizr";
import immutable from "immutable";
const { Map } = immutable;

const courses = new schema.Entity("courses");

export const coursesNormalizer = (data) => {
  return normalize(data, [courses]).entities.courses;
};
export const reducerCourse = (state = Map([]), action) => {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS:
 const data = courseNormalizer(action.data);
 Object.keys(data).map((key)=>{
  data[key].isSelected = false
 })
 return state.merge(data)
    case SELECT_COURSE:
      return state.setIn([String(action.index), 'isSelected'], true)
    case UNSELECT_COURSE:
        return state.setIn([String(action.index), 'isSelected'], false)
    default:
      break;
  }
  return state;
};
