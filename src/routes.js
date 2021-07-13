import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Repositories from "./pages/Repositories";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Repositories" component={Repositories} />
      </Switch>
    </BrowserRouter>
  );
}
//estrutura basica do arquivo de rotas
//exact - mantem somente /, sem puxar outros repositorios. 