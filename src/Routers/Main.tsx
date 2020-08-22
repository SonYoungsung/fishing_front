import React from "react";
import { Row, Col, Divider } from "antd";
import { Layout } from "antd";

const { Header, Footer, Sider, Content } = Layout;

export default () => {
  return (
    <div>
    <Row> 
      <Col span={8}>
        col-18 col-push-6
      </Col>
      <Col span={8}>
        col-18 col-push-6
      </Col>
    </Row>
    </div>
  );
};
