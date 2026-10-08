import {notificationReducer} from './notificationReducer';
import { Map } from 'immutable';

describe('notificationReducer', () => {
  const initialState = Map({
    notifications: Map(),
    filter: 'DEFAULT',
    loading: false
  });

  it('should return the initial state', () => {
    expect(notificationReducer(undefined, {})).toEqual(initialState);
  });

});