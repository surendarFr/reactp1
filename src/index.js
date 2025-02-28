import React from "react";
import ReactDOM from "react-dom/client";  
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./store/Store";
import "semantic-ui-css/semantic.min.css";


const root = ReactDOM.createRoot(document.getElementById("root"));  // ✅ Use createRoot()
root.render(
  <Provider store={store}>  
    <App />
  </Provider>
);
