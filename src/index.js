import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import AuthLayout from "layouts/Auth.js";
import AdminLayout from "layouts/Admin.js";

import "assets/scss/material-dashboard-pro-react.scss?v=1.9.0";

const hist = createBrowserHistory();
const isAuth = localStorage.getItem("isAuth");

ReactDOM.render(
  <Router history={hist}>
      { isAuth
          ?
          <Switch>
              <Route path="/admin" component={AdminLayout}/>
              <Redirect from="/" to="/admin/dashboard"/>
          </Switch>
          :
          <Switch>
              <Route path="/auth/login-page" component={AuthLayout}/>
              <Redirect from="/" to="/auth/login-page"/>
          </Switch>
      }
  </Router>,
  document.getElementById("root")
);
