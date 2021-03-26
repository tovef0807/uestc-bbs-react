import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import Employment from "../pages/employment/Employment";
const routes = [
  {
    path: "/employment",
    exact: true,
    name: "前程似锦",
    component: Employment,
  },
  {
    path: "/school",
    name: "成电校园",
    component: () => <h2>成电校园</h2>,
  },
  {
    path: "/scientific",
    name: "科技学术",
    component: () => <h2>Shoelaces</h2>,
  },
  {
    path: "/daily",
    name: "生活信息",
    component: () => <h2>Shoelaces</h2>,
  },
  {
    path: "/entertainment",
    name: "休闲娱乐",
    component: () => <h2>Shoelaces</h2>,
  },
  {
    path: "/announcement",
    name: "站务管理",
    component: () => <h2>Shoelaces</h2>,
  },
];
const BasicRoute = () => (
  <HashRouter>
    <Switch>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          render={(props) => (
            <route.component {...props} routes={route.routes}></route.component>
          )}
        />
      ))}
    </Switch>
  </HashRouter>
);

export { routes, BasicRoute };
