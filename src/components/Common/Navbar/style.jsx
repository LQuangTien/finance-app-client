import styled from "styled-components";

import { Menu, Button } from "antd";

export const NavMenu = styled(Menu)`
  height: 100vh;
  position: relative;
`;
export const MenuItem = styled(Menu.Item)`
  position: absolute !important;
  bottom: 5%;
`;
export const StyledButton = styled(Button)`
  text-align: left;
  padding-left: 0;
  border: none;
  font-size: 14px;
  &:hover {
    transform: scale(1.05);
    font-weight: bold;
    transition: all 0.2s;
  }
`;
