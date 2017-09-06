import React from "react";
import ReactDOM from "react-dom";
import App from './containers/app';
import {wrap} from './setup';

ReactDOM.render(wrap(<App/>), document.getElementById("app"));

module.hot.accept();
