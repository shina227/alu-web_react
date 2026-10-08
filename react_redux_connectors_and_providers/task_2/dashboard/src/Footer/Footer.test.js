import { createStore } from 'redux';
import Footer from "./Footer";
import { render, screen } from "@testing-library/react";
import { uiReducer } from '../reducers/uiReducer';
import { Provider } from 'react-redux';
import { LOGIN_SUCCESS } from '../actions/uiActionTypes';
describe("Footer", () => {
    it("should render the footer element correctly when user is logged in", () => {
        const store = createStore(uiReducer);
        store.dispatch({ type: LOGIN_SUCCESS });
        render(<Provider store={store}><Footer /> </Provider>);
        screen.getByText(/Copyright/i);
        screen.getByText('contact us');
    });

    it("should render the footer element correctly when user is logged out", () => {
        const store = createStore(uiReducer);
        store.dispatch({ type: 'LOGOUT' });
        render(<Provider store={store}><Footer /> </Provider>);
        screen.getByText(/Copyright/i);
        expect(screen.queryByText('contact us')).toBeNull();
    });
})