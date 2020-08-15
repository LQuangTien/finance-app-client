import styled from "styled-components";

import { Menu, Button } from "antd";

export const NavMenu = styled(Menu)`
  height: 100vh;
  position: relative;
`;
export const StyledButton = styled(Button)`
  position: absolute;
  bottom: 5%;
  border: none;
  font-size: 14px;
  &:hover {
    transform: scale(1.05);
    font-weight: bold;
    transition: all 0.5s;
  }
`;
