import { Menu } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { NavMenu } from "./style.jsx";
import { useLocation } from "react-router-dom";
const NavbarMenu = () => {
  const location = useLocation();
  const currentPath = () => {
    const path = location.pathname.split("/");
    return path[1];
  };
  const path = currentPath();
  return (
    <NavMenu theme="light" mode="inline" defaultSelectedKeys={[path]}>
      <Menu.Item key="Earning">
        <Link to="/earning">Earning</Link>
      </Menu.Item>
      <Menu.Item key="spending">
        <Link to="/spending">Spending</Link>
      </Menu.Item>
      <Menu.Item key="history">
        <Link to="/history">History</Link>
      </Menu.Item>

    </NavMenu>
  );
};
export default NavbarMenu;
