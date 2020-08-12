import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import { Wrapper } from "./style";
import History from "components/History";
import { Row, Col, Typography } from "antd";
import { Scrollbars } from "react-custom-scrollbars";
const { Title } = Typography;
function HistoryPage() {
  const [historyIncome, setHistoryIncome] = useState(null);
  const [historyExpend, setHistoryExpend] = useState(null);
  const getData = async (path) => {
    const res = await axios.get(`https://skrj0.sse.codesandbox.io/${path}`);

    if (path === "income") {
      const { income } = res.data;
      const { transactions } = income;
      setHistoryIncome(transactions);
    } else {
      const { expend } = res.data;
      const { transactions } = expend;
      setHistoryExpend(transactions);
    }
  };

  useEffect(() => {
    getData("income");
    getData("expend");
  }, []);
  return (
    <Row>
      <Col xs={24} sm={24} md={12} lg={12} xl={12}>
        <Wrapper>
          <Title level={2} style={{ color: "#00aaff" }}>
            Income History
          </Title>
          <Scrollbars>
            <History history={historyIncome} isExpend={false} />
          </Scrollbars>
        </Wrapper>
      </Col>
      <Col xs={24} sm={24} md={12} lg={12} xl={12}>
        <Wrapper>
          <Title level={2} style={{ color: "#ff6b6b" }}>
            Expend History
          </Title>
          <Scrollbars>
            <History history={historyExpend} isExpend={true} />
          </Scrollbars>
        </Wrapper>
      </Col>
    </Row>
  );
}

export default HistoryPage;
