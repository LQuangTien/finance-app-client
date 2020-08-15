import styled from "styled-components";

import { Typography, Row } from "antd";

const { Title } = Typography;
export const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;

height: 100%;
padding: 32px 24px;
background: white;
`;
export const FormWrapper = styled.div`
  margin-top: 12px;
 flex-grow: 1;
`;
export const StyledRow = styled(Row)`
  height: 100vh;
`;
export const StyledTitle = styled(Title)`
  text-align:  ${(props) => props.type};
  color: #00aaff !important;
`;
export const StyledImg = styled.img`
  width: 90%;
  height: 100%;
  padding: 10%;
`;
