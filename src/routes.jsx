import React from "react";
import { Switch, Route } from "react-router-dom";
import GlobalLayout from "./layouts/global-layout";
import pages from "./pages";

export default function RouterViews() {
  return (
    <GlobalLayout>
      <Switch>
        {Object.entries(pages).map(([name, meta]) => {
          return (
            <Route
              key={meta.route}
              exact
              path={meta.route}
              component={meta.component}
            />
          );
        })}
      </Switch>
    </GlobalLayout>
  );
}
