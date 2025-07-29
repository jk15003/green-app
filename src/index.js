import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { MemoryRouter } from "react-router-dom";

class GreenApp extends HTMLElement {
  connectedCallback() {
    const color = this.getAttribute("color") || "green";
    const root = ReactDOM.createRoot(this);
    root.render(
      <React.StrictMode>
        <MemoryRouter initialEntries={['/']}>
          <App color={color} />
        </MemoryRouter>
      </React.StrictMode>
    );
  }
}
customElements.define("green-app", GreenApp);
