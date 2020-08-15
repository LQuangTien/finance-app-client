import React from "react";
import BarSpendingPage from "./BarSpendingPage";
import DoughnutPage from "./DoughnutPage";
import SpendingormPage from "./SpendingFormPage";
import { Page, PageWrapper } from "./style";

function SpendingPage() {
  return (
    <PageWrapper>
      <Page>
        <BarSpendingPage />
      </Page>
      <Page>
        <DoughnutPage />
        <SpendingormPage />
      </Page>
    </PageWrapper>
  );
}
export default SpendingPage;
