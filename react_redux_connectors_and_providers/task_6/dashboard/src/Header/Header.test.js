import Header from "./Header";
import { screen, render } from "@testing-library/react";
import { StyleSheetTestUtils } from "aphrodite";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { login, loginSuccess } from "../actions/uiActionCreators";
import { rootReducer } from "../reducers/rootReducer";

StyleSheetTestUtils.suppressStyleInjection()

describe("Header", () => {
  it("should render the correct header element when user is logged in", () => {
    const store = createStore(rootReducer);
    store.dispatch(login('test@test.com', 'passkey'));
    store.dispatch(loginSuccess());
    render(<Provider store={store}><Header /></Provider>);
    screen.getByRole("img");
    screen.getByText('Welcome test@test.com')
    screen.getByTestId('logout-link')
  });

  it("should render the correct header element when user is logged out", () => {
    const store = createStore(rootReducer);
    render(<Provider store={store}><Header /></Provider>);
    screen.getByRole("img");
    expect(screen.queryByTestId('logout-link')).toBeNull();
  });
});
