import React from "react";
import reducers from "./reducers";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";

export const makeStore = () => {
  return createStore(
    reducers,
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

export const wrap = child => <Provider store={makeStore()}>{child}</Provider>;
