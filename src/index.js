import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

class GreenApp extends HTMLElement {
  connectedCallback() {
    const color = this.getAttribute("color") || "green";
    const root = ReactDOM.createRoot(this);
    root.render(<App data-testid='main-wrapper-green' color={color} />);
  }
}
customElements.define("green-app", GreenApp);
