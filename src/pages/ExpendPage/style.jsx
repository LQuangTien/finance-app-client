import styled from "styled-components";
import { Form } from "antd";
export const Wrapper = styled.div`
  background: white;
  padding: 20px;
  margin: 12px;
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
export const PageWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
export const Page = styled.div`
  flex: 1 1 40px;
`;
