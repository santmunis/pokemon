import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './pages/home'
import Agua from './pages/water/index'
import Fantasma from './pages/ghost/index'
import Ground from './pages/ground/index'


const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route path="/water" component={ Agua } />
      <Route path="/ghost" component={ Fantasma } />
      <Route path="/ground" component={ Ground } />
      <Route path="*" component={() => <h3 style={{ margin: 40 }}> Página não encontrada </h3>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;