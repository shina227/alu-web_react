import React from "react";
import CourseList from "./CourseList";
import { render, screen } from "@testing-library/react";
import { StyleSheetTestUtils } from "aphrodite";
import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "../reducers/rootReducer";
import {thunk} from "redux-thunk";
import { Provider } from "react-redux";

StyleSheetTestUtils.suppressStyleInjection()

const store = createStore(rootReducer, applyMiddleware(thunk));

test("renders CourseList component", () => {
    const listCourses = [
    { id: 1, name: "ES6", credit: 60 },
    { id: 2, name: "Webpack", credit: 20 },
    { id: 3, name: "React", credit: 40 },
  ];
    render(<Provider store={store}><CourseList /></Provider>);
    
    expect(screen.getAllByTestId("course-table-header")).toHaveLength(4);
    expect(screen.getAllByTestId("course-table-body")).toHaveLength(2);
});