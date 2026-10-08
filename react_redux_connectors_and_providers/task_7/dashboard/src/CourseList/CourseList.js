import React, { useEffect} from "react";
import CourseListRow from "./CourseListRow";
import CourseShape from "./CourseShape";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";
import { connect } from "react-redux";
import { selectCourse, unSelectCourse, fetchCourses } from "../actions/courseActionsCreators";
import { getListCourses } from "../selectors/courseSelector";


export function CourseList({ listCourses = [], fetchCourses }) {

    useEffect(() => {
        fetchCourses();
    }, [fetchCourses])

    return <table id="CourseList" className={css(styles.CourseList)}>
        <thead>
            <CourseListRow isHeader={true} textFirstCell="Available courses" />
            <CourseListRow isHeader={true} textFirstCell="Course name" textSecondCell="Credit" />
        </thead>
        <tbody>
        {listCourses.size > 0 ? (
          listCourses.map((course) => <CourseListRow key={course.get('id')} textFirstCell={course.get('name')} textSecondCell={course.get('credit')} />)
        ) : (
          <CourseListRow textFirstCell="No course available yet" />
        )}
        </tbody>
    </table>
}

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
};

const styles = StyleSheet.create({
  CourseList: {
    width: '100%',
    marginTop: '40px',
  },
});

export function mapStateToProps(state) {
  return {
    listCourses: getListCourses(state),
  };
}

export default connect(mapStateToProps, {
  selectCourse,
  unSelectCourse,
  fetchCourses,
})(CourseList);

