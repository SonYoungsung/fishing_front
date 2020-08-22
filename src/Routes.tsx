import React, { useState } from "react";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import { Row, Col, Divider } from "antd";

import Signin from "./Routers/Signin";
import Main from "./Routers/Main";
import CreateSale from "./Routers/Sale/CreateSale";
import Sidebar from "./Components/Sidebar"

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

export default function () {
  return(
    <>
    <Row>
      <Col span={6}>
        <Sidebar></Sidebar>
      </Col>
      <Col span={18}>
        <AppRouter></AppRouter>
      </Col>
    </Row>
    </>
  )
};
