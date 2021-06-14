/*
PROTEIN CURATION APP
VALERIA PATRICIA URBINA CASTILLO
PONTIFICIA UNIVERSIDAD CATÓLICA DEL PERÚ
EL PSY CONGROO
*/

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// styles
import "bootstrap/scss/bootstrap.scss";
import "assets/scss/paper-kit.scss?v=1.3.0";
import "assets/demo/demo.css?v=1.3.0";
// pages
import Index from "views/MainView";
// others
import { TerminalContextProvider } from "react-terminal";

ReactDOM.render(
  <TerminalContextProvider>
    <BrowserRouter>
      <Switch>
        <Route path="/" render={(props) => <Index {...props} />} />
      </Switch>
    </BrowserRouter>
  </TerminalContextProvider>,
  document.getElementById("root")
);
