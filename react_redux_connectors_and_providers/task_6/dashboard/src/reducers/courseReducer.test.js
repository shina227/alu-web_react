import { courseReducer } from "./courseReducer";

describe("courseReducer", () => {
    it("should return the initial state", () => {
        expect(courseReducer(undefined, {})).toEqual([]);
    });
    
    it("should handle SELECT_COURSE", () => {
        expect(
        courseReducer(
            [
            { id: 1, isSelected: false },
            { id: 2, isSelected: false },
            ],
            { type: "SELECT_COURSE", index: 1 }
        )
        ).toEqual([
        { id: 1, isSelected: true },
        { id: 2, isSelected: false },
        ]);
    });
    
    it("should handle UNSELECT_COURSE", () => {
        expect(
        courseReducer(
            [
            { id: 1, isSelected: true },
            { id: 2, isSelected: false },
            ],
            { type: "UNSELECT_COURSE", index: 1 }
        )
        ).toEqual([
        { id: 1, isSelected: false },
        { id: 2, isSelected: false },
        ]);
    });
    
    it("should handle FETCH_COURSE_SUCCESS", () => {
        expect(
        courseReducer([], {
            type: "FETCH_COURSE_SUCCESS",
            data: [
            { id: 1, isSelected: false },
            { id: 2, isSelected: false },
            ],
        })
        ).toEqual([
        { id: 1, isSelected: false },
        { id: 2, isSelected: false },
        ]);
    });
});