import React from "react";
import BarExpendPage from "./BarExpendPage";
import DoughnutPage from "./DoughnutPage";
import { Row, Col } from "antd";
import { Page, PageWrapper } from "./style";
function ExpendPage(props) {
  return (
    <PageWrapper>
      <Page>
        <BarExpendPage />
      </Page>
      <Page>
        <DoughnutPage />
        <DoughnutPage />
      </Page>
      {/* <Page /> */}
    </PageWrapper>
  );
}
export default ExpendPage;
