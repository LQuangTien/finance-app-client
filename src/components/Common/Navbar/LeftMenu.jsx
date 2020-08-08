import { Menu } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { NavMenu } from "./style.jsx";
import { useLocation } from "react-router-dom";
const LeftMenu = () => {
  const location = useLocation();
  const currentPath = () => {
    const path = location.pathname.split("/");
    return path[1];
  };
  const path = currentPath();
  return (
    <NavMenu theme="light" mode="inline" defaultSelectedKeys={[path]}>
      <Menu.Item key="income">
        <Link to="/income">Income</Link>
      </Menu.Item>
      <Menu.Item key="expend">
        <Link to="/expend">Expend</Link>
      </Menu.Item>
    </NavMenu>
  );
};
export default LeftMenu;
