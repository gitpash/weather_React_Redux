import React from "react";
import reducers from "./reducers";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import { loadState, saveState } from "./helpers/localStorage";

const persistedState = loadState();

const makeStore = () => {
  return createStore(
    reducers,
    persistedState,
    compose(
      applyMiddleware(thunk),
      // this code allows to use redux dev tools chrome extension
      typeof window === "object" &&
      typeof window.devToolsExtension !== "undefined"
        ? // initialize, if there is a redux dev tools chrome extension
          window.devToolsExtension()
        : f => f
    )
  );
};
const store = makeStore();

store.subscribe(() => {
  saveState(store.getState());
});
export const wrap = child => <Provider store={store}>{child}</Provider>;
