import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";

// Allowed host URLs for access
const allowedUrls = process.env.REACT_APP_ALLOWED_URLS?.split(",") || [];
class GreenApp extends HTMLElement {
  connectedCallback() {
    const color = this.getAttribute("color") || "green";

    const appUrl = store.getState().appUrl;

    if (!allowedUrls.includes(appUrl)) {
      const root = ReactDOM.createRoot(this);
      root.render(
         <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          fontFamily: "sans-serif",
          background: "#111",
          color: "#fff",
          textAlign: "center"
        }}>
          <h1>🚫 Access Denied</h1>
          <p>This application is not authorized for this host.</p>
        </div>
      );

      return; // do not render React app
    }

    const root = ReactDOM.createRoot(this);
    root.render(
      <Provider store={store}>
        <App color={color} />
      </Provider>
    );
  }
}

customElements.define("green-app", GreenApp);
