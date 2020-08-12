import { Button } from "antd";

import styled from "styled-components";
const colorButton = (background, borderColor = background, color = "white") => {
  return `
    background: ${background};
    border-color: ${borderColor};
    border-radius: 0;
    color: ${color};
  `;
};
export const SwitchMode = styled(Button)`
  ${colorButton("#00ccff")}
  font-weight: bold;

  &:hover {
    ${colorButton("#00ddff")}
  }
  &:focus {
    transition: all 0.1s;
    ${colorButton("#00aaff")}
  }
`;
export const PageButton = styled(Button)`
  ${colorButton("white", "#28a745", "#28a745")}
  font-weight: bold;
  width: 50%;
  border-right: ${props => props.type === "prev" && "none"};
  border-left: ${props => props.type === "next" && "none"};
  &:hover,
  &:focus {
    ${colorButton("white", "#28a745", "#28a745")}
  }
  &:active {
    transition: all 0.15s;
    ${colorButton("#28a745", "#28a745", "white")}
  }
`;
