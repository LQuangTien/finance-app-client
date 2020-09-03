import { Col, Row, Typography } from "antd";
import History from "components/History";
import { getData } from "api/finance";
import React, { useEffect, useState } from "react";
import { Scrollbars } from "react-custom-scrollbars";
import Wrapper from "./style";

const { Title } = Typography;
function HistoryPage() {
  const [historyEarning, setHistoryEarning] = useState(null);
  const [historySpending, setHistorySpending] = useState(null);

  const getDataHistory = async () => {
    const earning = await getData("earning");
    setHistoryEarning(earning.transactions);

    const spending = await getData("spending");
    setHistorySpending(spending.transactions);
  };

  useEffect(() => {
    getDataHistory();
  }, []);
  return (
    <Row>
      <Col xs={24} sm={24} md={12} lg={12} xl={12}>
        <Wrapper>
          <Title level={2} style={{ color: "#00aaff" }}>
            Earning History
          </Title>
          <Scrollbars>
            <History history={historyEarning} isSpending={false} />
          </Scrollbars>
        </Wrapper>
      </Col>
      <Col xs={24} sm={24} md={12} lg={12} xl={12}>
        <Wrapper>
          <Title level={2} style={{ color: "#ff6b6b" }}>
            Spending History
          </Title>
          <Scrollbars>
            <History history={historySpending} isSpending />
          </Scrollbars>
        </Wrapper>
      </Col>
    </Row>
  );
}

export default HistoryPage;
