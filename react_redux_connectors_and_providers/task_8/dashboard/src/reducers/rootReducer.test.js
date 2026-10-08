import { rootReducer } from "./rootReducer";

describe("rootReducer", () => {
    it("should return the initial state", () => {
        expect(rootReducer(undefined, {}).ui).toBeTruthy();
        expect(rootReducer(undefined, {}).courses).toBeTruthy();
        expect(rootReducer(undefined, {}).notifications).toBeTruthy();
    });
});