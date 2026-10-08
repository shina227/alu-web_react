import { StyleSheetTestUtils } from "aphrodite";
import App, { mapStateToProps } from "./App";
import { render, screen } from '@testing-library/react';
import { fromJS } from 'immutable';
import { createStore,applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from "../reducers/rootReducer";
import {thunk} from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk));

StyleSheetTestUtils.suppressStyleInjection()
describe('App tests', () => {
    it('should render the right divs', () => {
        render(<Provider store={store}><App /></Provider>)
        screen.getByTestId('App-header')
        screen.getByTestId('App-body')
        screen.getByTestId('App-footer')
    });

    it('should map state correctly', () => {
        const state = {
            ui: fromJS({
                isUserLoggedIn: true,
            })
        }
        const props = mapStateToProps(state)
        expect(props.isLoggedIn).toBe(true)
    })
})