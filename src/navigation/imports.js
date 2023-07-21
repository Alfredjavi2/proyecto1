// Imports all the view components for its usage in navigation/routes.js

import { lazy } from "react";

export const Home = lazy(() => import("@resources/Home/views/Home.view"));

export const Logout = lazy(() => import("@resources/Auth/views/Logout.view"));

export const Playground = lazy(() =>
  import("@resources/Playground/views/Playground.view")
);

export const Profile = lazy(() =>
  import("@resources/Profile/views/Profile.view")
);

export const Regions = lazy(() =>
  import("@resources/Regions/views/Regions.view")
);

export const RegionsDetail = lazy(() =>
  import("@resources/Regions/UI/RegionsDetail/RegionsDetail")
);
