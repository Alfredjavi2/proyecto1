import { configureStore } from "@reduxjs/toolkit";

import layout_reducer, { sliceName as layout } from "./layout";
import {
  profile_reducer,
  sliceName as profile,
} from "@resources/Profile/_exports";

const Store = configureStore({
  reducer: { [layout]: layout_reducer, [profile]: profile_reducer },
});

export default Store;
