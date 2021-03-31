import React from "react";
import { Layout, Breadcrumb } from "antd";
import { RouteConfig } from "../router/router";
import BaseHeader from "./BaseHeader";
import { withRouter } from "react-router-dom";
import "./BaseLayout.less";
import EmptyLayout from "./EmptyLayout";

const { Content, Footer } = Layout;

class BaseLayout extends React.Component {
  render() {
    const isEmptyLayout = this.props.location.pathname === "/login";
    const layout = isEmptyLayout ? (
      <EmptyLayout />
    ) : (
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
            <RouteConfig />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    );
    return layout;
  }
}

export default withRouter(BaseLayout);
