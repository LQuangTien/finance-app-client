import styled from "styled-components";
import { Form } from "antd";

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
