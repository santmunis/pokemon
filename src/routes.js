import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './pages/home'


const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={ Home } />
      <Route path="*" component={() => <h3 style={{ margin: 40 }}> Página não encontrada </h3>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;