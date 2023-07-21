import {
  Home,
  Logout,
  Playground,
  Profile,
  Regions,
  RegionsDetail,
} from "@navigation/imports";

import { paths } from "@navigation/_exports";

// Routes and the component they render
// Can change according to user role

const routes = [
  {
    path: paths.home,
    component: Home,
  },
  {
    path: paths.logout,
    component: Logout,
  },
  {
    path: paths.playground,
    component: Playground,
  },
  {
    path: paths.profile,
    component: Profile,
  },
  {
    path: paths.regions,
    component: Regions,
  },
  {
    path: paths.details,
    component: RegionsDetail,
  },
];

export default routes;
