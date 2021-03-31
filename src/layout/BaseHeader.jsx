import React from "react";
import { Layout, Menu, Avatar, Badge } from "antd";
import { routes } from "../router/router";
import "./BaseLayout.less";
import { forumlist } from "../service/forum";
import { UserOutlined } from "@ant-design/icons";

const { Header } = Layout;
const { SubMenu } = Menu;

class BaseHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuList: [],
    };
  }
  async componentDidMount() {
    const { list } = await forumlist();
    if (list && Array.isArray(list)) {
      this.setState({
        menuList: list,
      });
    }
  }
  render() {
    const { menuList } = this.state;
    const pathName = (id) => {
      return routes.filter((item) => item.matchId === id)[0]?.path;
    };
    const onTitleClick = (e) => {
      console.log(e);
    };
    const menuItems = menuList.map((menu, index) => (
      <SubMenu
        key={menu.board_category_id}
        title={menu.board_category_name}
        onTitleClick={onTitleClick}
      >
        {menu.board_list.map((sub) => (
          <Menu.Item key={sub.board_id}>
            <a
              href={"#" + pathName(menu.board_category_id) + "/" + sub.board_id}
            >
              {sub.board_name}
            </a>
          </Menu.Item>
        ))}
      </SubMenu>
    ));
    return (
      <Header className="header" style={{ backgroundColor: "#fff" }}>
        <div style={{ display: "flex" }}>
          <div className="logo"></div>
          <Menu theme="light" mode="horizontal">
            {menuItems}
          </Menu>
        </div>
        <div>
          <span className="avatar-item">
            <Badge count={1}>
              <Avatar shape="square" icon={<UserOutlined />} />
            </Badge>
          </span>
        </div>
      </Header>
    );
  }
}

export default BaseHeader;
