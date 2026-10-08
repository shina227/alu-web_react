import { StyleSheetTestUtils } from "aphrodite";
import App,{ mapStateToProps }  from "./App";
import { render, screen } from '@testing-library/react';
import { fromJS } from 'immutable';
import { createStore } from 'redux';
import { uiReducer } from '../reducers/uiReducer';
import { Provider } from 'react-redux';

const store = createStore(uiReducer);

StyleSheetTestUtils.suppressStyleInjection()
describe('App tests', () => {
    it('should render the right divs', () => {
        render(<Provider store={store}><App /></Provider>)
        screen.getByTestId('App-header')
        screen.getByTestId('App-body')
        screen.getByTestId('App-footer')
    });

    it('should map state correctly', () => {
        const state = fromJS({
            isUserLoggedIn: true,
        })
        const props = mapStateToProps(state)
        expect(props.isLoggedIn).toBe(true)
    })
})