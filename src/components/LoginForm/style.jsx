import styled from "styled-components";
import { Input, Typography } from "antd";
import { Link } from 'react-router-dom'

const { Title } = Typography;

export const StyledInput = styled(Input)`
  padding: 8px 6px;
`

export const StyledLink = styled(Link)`
  float: right;
  font-size: 18px;
  padding: 0 12px;
  margin: 0;
`
