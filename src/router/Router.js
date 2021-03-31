import React from "react";
import { Switch, Route } from "react-router-dom";
import Jobs from "../pages/employment/jobs/Jobs";
import Login from "../components/base/Login";

const routes = [
  {
    path: "/login",
    name: "登录",
    matchId: 0,
    component: Login,
  },
  {
    path: "/employment",
    name: "前程似锦",
    matchId: 427,
    component: PageContainer,
    routes: [
      {
        path: "/employment/174",
        name: "就业创业",
        matchId: 174,
        component: Jobs,
      },
    ],
  },
  {
    path: "/school",
    name: "成电校园",
    matchId: 273,
    component: PageContainer,
    routes: [
      {
        path: "/employment/174",
        exact: true,
        name: "前程似锦",
        matchId: 174,
        component: () => <h2>Shoelaces</h2>,
      },
    ],
  },
  {
    path: "/scientific",
    name: "科技学术",
    matchId: 95,
    component: PageContainer,
    routes: [
      {
        path: "/employment/174",
        exact: true,
        name: "前程似锦",
        matchId: 174,
        component: () => <h2>Shoelaces</h2>,
      },
    ],
  },
  {
    path: "/daily",
    name: "生活信息",
    matchId: "427",
    component: PageContainer,
    routes: [
      {
        path: "/employment/174",
        exact: true,
        name: "前程似锦",
        matchId: 174,
        component: () => <h2>Shoelaces</h2>,
      },
    ],
  },
  {
    path: "/entertainment",
    name: "休闲娱乐",
    matchId: 203,
    component: PageContainer,
    routes: [
      {
        path: "/employment/174",
        exact: true,
        name: "前程似锦",
        matchId: 174,
        component: () => <h2>Shoelaces</h2>,
      },
    ],
  },
  {
    path: "/announcement",
    name: "站务管理",
    matchId: 1,
    component: PageContainer,
    routes: [
      {
        path: "/employment/174",
        exact: true,
        name: "前程似锦",
        matchId: 174,
        component: () => <h2>Shoelaces</h2>,
      },
    ],
  },
];

function RouteConfig() {
  return (
    <Switch>
      {routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route} />
      ))}
    </Switch>
  );
}

function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={(props) => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}

function PageContainer({ routes }) {
  return (
    <Switch>
      {routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route} />
      ))}
    </Switch>
  );
}

export { routes, RouteConfig };
