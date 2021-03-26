import React from "react";
import { Layout, Breadcrumb } from "antd";
import { BasicRoute } from "../router/Router";
import BaseHeader from "./BaseHeader";
import "./BaseLayout.less";

const { Content, Footer } = Layout;

export default class BaseLayout extends React.Component {
  render() {
    return (
      <Layout>
        <BaseHeader />
        <Content
          className="site-layout"
          style={{ padding: "0 50px", marginTop: 64 }}
        >
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div className="content" style={{ padding: 24, minHeight: 380 }}>
            <BasicRoute />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    );
  }
}
