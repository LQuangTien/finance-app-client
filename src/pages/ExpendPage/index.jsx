import React from "react";

import BarExpendPage from "./BarExpendPage";
import DoughnutPage from "./DoughnutPage";
import ExpendFormPage from "./ExpendFormPage";
import { Page, PageWrapper } from "./style";
function ExpendPage(props) {
  return (
    <PageWrapper>
      <Page>
        <BarExpendPage />
      </Page>
      <Page>
        <DoughnutPage />
        <ExpendFormPage />
      </Page>
    </PageWrapper>
  );
}
export default ExpendPage;
