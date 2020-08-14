import styled from "styled-components";

import { Input, Typography, Row } from "antd";

const { Title } = Typography;
export const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;

height: 100%;
padding: 0 24px;
background: white;
`;
export const StyledRow = styled(Row)`
  height: 100vh;
`
export const StyledTitle = styled(Title)`
  float:  ${props => props.type};
  color: #00aaff !important;
`
export const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  padding: 10%;
`