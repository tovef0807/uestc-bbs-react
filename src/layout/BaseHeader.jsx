import React from "react";
import { Layout, Menu } from "antd";
import { routes } from "../router/Router";
import "./BaseLayout.less";

const { Header } = Layout;

class BaseHeader extends React.Component {
  render() {
    const menuItems = routes.map((menu, index) => (
      <Menu.Item key={menu.path}>
        <a href={"#" + menu.path}>{menu.name}</a>
      </Menu.Item>
    ));
    return (
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <div className="logo"></div>
        <Menu theme="light" mode="horizontal">
          {menuItems}
        </Menu>
      </Header>
    );
  }
}

export default BaseHeader;
