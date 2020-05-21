import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Fire from './../pages/fire/index'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ Fire } />
      <Route path="*" component={() => <h3 style={{ margin: 40 }}> Página não encontrada </h3>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;