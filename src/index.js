import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";

class GreenApp extends HTMLElement {
  connectedCallback() {
    const color = this.getAttribute("color") || "green";
    
    const root = ReactDOM.createRoot(this);
    root.render(
      <Provider store={store}>
        <App color={color}/>
      </Provider>,
    );
  }
}
customElements.define("green-app", GreenApp);