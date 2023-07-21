import React from "react";
import { Provider } from "react-redux";
import Store from "@store";

const StoreWrapper = ({ children }) => {
  return <Provider store={Store}>{children}</Provider>;
};

export default StoreWrapper;
