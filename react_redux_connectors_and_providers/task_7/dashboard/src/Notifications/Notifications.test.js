import Notifications from "./Notifications";
import { render, screen, waitFor } from "@testing-library/react";
import { StyleSheetTestUtils } from "aphrodite";
import { createStore, applyMiddleware } from "redux";
import {thunk} from "redux-thunk";
import { rootReducer } from "../reducers/rootReducer";
import { Provider } from "react-redux";
import { displayNotificationDrawer} from "../actions/uiActionCreators";

StyleSheetTestUtils.suppressStyleInjection()

describe("Notifications tests", () => {
  it("should render all notifications", async () => {
    const store = createStore(rootReducer, applyMiddleware(thunk));
    store.dispatch(displayNotificationDrawer())
    render(<Provider store={store}><Notifications /></Provider>);
    await waitFor(() => expect(screen.getAllByRole("listitem")).toHaveLength(10));
    screen.getByText("Here is the list of notifications");

  });

});
