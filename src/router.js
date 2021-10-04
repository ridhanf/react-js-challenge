import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import BoxPage from "./pages/BoxPage";
import Notfound from "./pages/NotFound";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/box" component={BoxPage} />
        <Route component={Notfound} />
      </Switch>
    </BrowserRouter>
  )
};

export default Router;