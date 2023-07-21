import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

import "./i18n.js";
import {
  AlertWrapper,
  QueryWrapper,
  ThemeWrapper,
  StoreWrapper,
} from "@wrappers/_exports";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StoreWrapper>
      <ThemeWrapper>
        <AlertWrapper>
          <QueryWrapper>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </QueryWrapper>
        </AlertWrapper>
      </ThemeWrapper>
    </StoreWrapper>
  </React.StrictMode>
);
