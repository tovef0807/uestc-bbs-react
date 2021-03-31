import React from "react";
import { Layout } from "antd";
import { RouteConfig } from "../router/router";
import "./EmptyLayout.less";
import { Header } from "antd/lib/layout/layout";

const { Content, Footer } = Layout;

export default class EmptyLayout extends React.Component {
  render() {
    return (
      <Layout>
        <Header style={{ backgroundColor: "#fff" }}></Header>
        <Content className="content">
          <RouteConfig />
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    );
  }
}
