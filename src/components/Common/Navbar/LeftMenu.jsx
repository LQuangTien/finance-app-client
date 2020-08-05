import { Menu } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { NavMenu } from "./style.jsx";

const LeftMenu = () => {
  return (
    <NavMenu theme="light" mode="inline" defaultSelectedKeys={["1"]}>
      <Menu.Item key="1">
        <Link to="/">Income</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/expend">Expend</Link>
      </Menu.Item>
    </NavMenu>
  );
};
export default LeftMenu;
