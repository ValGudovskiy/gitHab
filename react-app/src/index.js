import App from "./App";
import "./index.css";
import React, { StrictMode } from "react";
import reportWebVitals from "./reportWebVitals";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import { store } from "./store";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  // <StrictMode>
  <>
    {/* подключение хранилища */}
    <Provider store={store}>
      {/* <React.StrictMode> */}
        <App />
      {/* </React.StrictMode> */}
    </Provider>
    </>
  //  </StrictMode>
);

reportWebVitals();
