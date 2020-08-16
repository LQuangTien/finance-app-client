import styled from "styled-components";
import { Form, Typography } from "antd";

const { Text } = Typography;
export const Wrapper = styled.div`
  background: white;
  padding: 20px;
  margin: 8px 18px;
  border-radius: 12px;
  border: 1px solid #ccc;
  box-shadow: 0 0 8px 5px #ddd;
`;

export const CreditCard = styled.img`
  width: 52px;
  cursor: pointer;
`;

export const MoneyForm = styled(Form)`
  margin-bottom: 12px;
  height: 50px;
  display: flex;
  align-items: center;
`;
export const Money = styled.div`
  flex-grow: 1;
  text-align: right;
  padding-right: 12px;
`;
export const StyledText = styled(Text)`
  color: ${(props) => props.type || "black"};
  font-weight: bold;
  font-size: 18px;
`;
