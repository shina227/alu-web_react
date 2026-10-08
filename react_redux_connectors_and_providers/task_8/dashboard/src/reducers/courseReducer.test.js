import { courseReducer } from "./courseReducer";
import { fromJS } from "immutable";

const initialState = fromJS({
    courses: {},
});
describe("courseReducer", () => {
    it("should return the initial state", () => {
        expect(courseReducer(undefined, {})).toEqual(initialState);
    });
    
});