import { SELECT_COURSE, UNSELECT_COURSE, FETCH_COURSE_SUCCESS } from "./courseActionTypes";
import { bindActionCreators } from "redux"
import { getCourses } from "../data";
import { schema, normalize } from "normalizr";


const courseSchema = new schema.Entity('courses');
const coursesSchema = [courseSchema];


export function selectCourse(index) {
    return {
        type: SELECT_COURSE,
        index
    }
} 

export function unSelectCourse(index) {
    return {
        type: UNSELECT_COURSE,
        index
    }
}

export function setCourses(data) {
    const normalizedData = normalize(data, coursesSchema);
    return {
        type: FETCH_COURSE_SUCCESS,
        data: normalizedData.entities.courses
    }
}

export function fetchCourses() {
    return async (dispatch) => {
        const courses = await getCourses();
        dispatch(setCourses(courses));
    }
}

export const boundSelectCourse = (dispatch) => bindActionCreators(selectCourse, dispatch);
export const boundUnSelectCourse = (dispatch) => bindActionCreators(unSelectCourse, dispatch);

