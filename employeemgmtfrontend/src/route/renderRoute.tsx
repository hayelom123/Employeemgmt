import { Route, Navigate } from "react-router-dom";

import IRoute from "./routeInterface";

// cookie.load("user") && cookie.load("user")["signed"]
export const RenderRoute = (props: IRoute, login: boolean) => {
  if (login) {
    return (
      <Route key={props.name} path={props.path} element={<props.component />} />
    );
  } else if (props.path == "/signin" || props.path == "/signup") {
    {
      console.log("sign");
    }
    return (
      <Route key={props.name} path={props.path} element={<props.component />} />
    );
  } else {
    return (
      <Route
        key={props.name}
        path={props.path}
        element={<Navigate to="/signin" />}
      />
    );
  }
};
