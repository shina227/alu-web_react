import { SELECT_COURSE, UNSELECT_COURSE } from "./courseActionTypes";
import { selectCourse, unSelectCourse } from "./courseActionsCreators";


describe('Action creators', () => {
    test('selectCourse', () => {
      const result = selectCourse(1);

      expect(result.type).toBe(SELECT_COURSE);
        expect(result.index).toBe(1);
    });

    test('unSelectCourse', () => {
      const result = unSelectCourse(1);
      expect(result.type).toBe(UNSELECT_COURSE);
        expect(result.index).toBe(1);

    });
  });