import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "tw-elements";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { store } from "./store/store";
import { Provider } from "react-redux";
import App from "./App";
import "./assets/fonts/IRANYekanWebRegular.ttf";

import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
