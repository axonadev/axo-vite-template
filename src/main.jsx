import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store/store";

import App from "./App.jsx";

import { Provider as Redux } from "react-redux";

import "./index.css";

// Rendering dell'app
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Redux store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Redux>
  </React.StrictMode>
);
