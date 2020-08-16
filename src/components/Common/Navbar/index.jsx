import React from "react";
import axios from "axios";
import { Menu } from "antd";
import { Link, useLocation, useHistory } from "react-router-dom";
// import { getData } from "pages/configAxios";
// import { getWallet } from "pages/configAxios";
import { NavMenu, StyledButton, MenuItem } from "./style";

const NavbarMenu = () => {
  const location = useLocation();
  const history = useHistory();
  const currentPath = () => {
    const path = location.pathname.split("/");
    return path[1];
  };

  const onLogoutClick = () => {
    axios.defaults.headers.common["x-access-token"] = "";
    localStorage.removeItem("accessToken");
    history.push("/login");
  };
  const path = currentPath();
  return (
    <NavMenu theme="light" mode="inline" defaultSelectedKeys={[path]}>
      <Menu.Item key="earning">
        <Link to="/earning">
          Earning
        </Link>
      </Menu.Item>
      <Menu.Item key="spending">
        <Link to="/spending">
          Spending
        </Link>
      </Menu.Item>
      <Menu.Item key="history">
        <Link to="/history">
          History
        </Link>
      </Menu.Item>
      <MenuItem>
        <StyledButton block danger onClick={onLogoutClick}>
          Logout
        </StyledButton>
      </MenuItem>

    </NavMenu>
  );
};
export default NavbarMenu;
