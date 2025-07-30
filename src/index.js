import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Define as Web Component
class GreenApp extends HTMLElement {
  connectedCallback() {
    const color = this.getAttribute("color") || "green";
    const root = ReactDOM.createRoot(this);
    root.render(<App color={color} />);
  }
}
customElements.define("green-app", GreenApp);