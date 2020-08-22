import React, { useState } from "react";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import { currentUser } from "./Api/firebase/auth";

import Signin from "./Routers/Signin";
import Main from "./Routers/Main";

const AppRouter = () => {
  const [login, setLogin] = useState(false);
  currentUser(setLogin);
  return (
    <BrowserRouter>
      <Switch>
        {login === true ? (
          <Route path="/" component={Main}></Route>
        ) : (
          <Route path="/" component={Signin}></Route>
        )}
        <Route path="/" component={Signin}></Route>
        <Redirect path="*" to="/"></Redirect>
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
