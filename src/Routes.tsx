import React, { useState } from "react";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";

import Signin from "./Routers/Signin";
import Main from "./Routers/Main";
import CreateSale from "./Routers/Sale/CreateSale";

const AppRouter = () => {
  console.log("");
  return (
    <BrowserRouter>
      <Switch>
        (<Route path="/" component={Main}></Route>)
        <Route path="/" component={Signin}></Route>)
        <Route path="/sale/createsale" component={CreateSale}></Route>
        {/* <Route path="/product/createproduct" component={CreateProduct}></Route> */}
        {/* <Route
          path="/customer/createcustomer"
          component={CreateCustomer}
        ></Route>
        <Route path="/buy/createbuy" component={CreateBuy}></Route>
        <Redirect path="*" to="/"></Redirect> */}
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
