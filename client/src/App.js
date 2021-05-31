import React from 'react';
import "./Stylesheets/App.css";
import Header from "./Header/Header.js";
import Register from "./Register/Register";
import Login from "./Login/Login";
import { withRouter, Route, Switch } from "react-router-dom";

function App() {
  
  return (<>
    <div className="App">

      <Header />

        <Switch>
          <Route exact path="/">

          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>

    </div>
  </>
  );
}

export default withRouter(App);

