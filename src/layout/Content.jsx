import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import { paths, routes } from "@navigation/_exports";

// Here we can handle routes depending on user type/role

const Content = () => {
  return (
    <main>
      <Suspense fallback={<>Loading....</>}>
        <Switch>
          {routes.map((route, index) => (
            <Route
              exact
              key={index}
              path={route.path}
              render={(props) => <route.component {...props} />}
            />
          ))}
          <Redirect from="/" to={paths.home} />
        </Switch>
      </Suspense>
    </main>
  );
};

export default React.memo(Content);
