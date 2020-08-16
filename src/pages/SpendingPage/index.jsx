import React, { useState, useEffect } from "react";
import BarSpendingPage from "./BarSpendingPage";
import DoughnutPage from "./DoughnutPage";
import SpendingormPage from "./SpendingFormPage";
import { Page, PageWrapper } from "./style";

function SpendingPage() {
  const [isSubmit, setSubmit] = useState(null);
  useEffect(() => {
    setSubmit(false);
  }, []);
  const onSubmitForm = (value) => {
    setSubmit(value);
  };
  return (
    <PageWrapper>
      <Page>
        <BarSpendingPage isSubmit={isSubmit} onSubmitForm={onSubmitForm} />
      </Page>
      <Page>
        <DoughnutPage isSubmit={isSubmit} onSubmitForm={onSubmitForm} />
        <SpendingormPage onSubmitForm={onSubmitForm} />
      </Page>
    </PageWrapper>
  );
}
export default SpendingPage;
