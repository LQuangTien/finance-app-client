import React, { useEffect, useRef, useState } from "react";
import moment from "moment";
import { Button, Form, InputNumber } from "antd";
import { getData, postEarningData, getWallet } from "api/finance";

import BarEarning from "components/BarEarning";
import { CreditCard, MoneyForm, Wrapper, Money, StyledText } from "./style";

function EarningPage() {
  const [chartData, setChartData] = useState(null);
  const [isMonth, setIsMonth] = useState(true);
  const [page, setPage] = useState(1);
  const [isAdd, setIsAdd] = useState(false);
  const [isSubmit, setSubmit] = useState(null);
  const [wallet, setWallet] = useState(0);
  const [isNegative, setNegative] = useState(false);
  const inputRef = useRef();

  const [form] = Form.useForm();
  const formatMoneyStyle = (value) => `$${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  useEffect(() => {
    const getEarningData = async () => {
      const earning = await getData("earning");
      setChartData(earning);
    };
    const getCurrentWallet = async () => {
      let currentWallet = await getWallet();
      if (currentWallet < 0) {
        setNegative(true);
        currentWallet = -currentWallet;
      }
      const formatWallet = formatMoneyStyle(currentWallet);
      setWallet(formatWallet);
    };

    getEarningData();
    getCurrentWallet();
    setSubmit(false);
  }, [page, isSubmit]);

  useEffect(() => {
    if (isAdd) {
      inputRef.current.focus();
    }
  }, [isAdd]);
  // switch to view months
  const handleSwitchMonth = (maxPage) => {
    setPage(maxPage);
    setIsMonth(true);
  };
  const handleSwitchDay = (maxPage) => {
    setPage(maxPage);
    setIsMonth(false);
  };
  const handlePrevClick = () => {
    setPage(page - 1);
  };
  const handleNextClick = () => {
    setPage(page + 1);
  };
  const handleSubmitForm = (value) => {
    if (value.amount) {
      const newTransaction = {
        date: moment().format("DD/MM/YYYY"),
        amount: value.amount
      };
      console.log(newTransaction);
      postEarningData(newTransaction);
      setSubmit(true);
      form.resetFields();
    }
  };

  const handleCreditClick = () => {
    setIsAdd(true);
  };
  return (
    <Wrapper>
      <MoneyForm form={form} layout="inline" onFinish={handleSubmitForm}>
        {!isAdd && (
          <Form.Item>
            <CreditCard
              src="https://res.cloudinary.com/quangtien/image/upload/v1596092599/credit-card_gkmypg.png"
              alt=""
              onClick={handleCreditClick}
            />
          </Form.Item>
        )}
        {isAdd && (
          <>
            <Form.Item name="amount">
              <InputNumber
                formatter={(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
                ref={inputRef}
                style={{ width: "100%" }}
              />
            </Form.Item>
            <Form.Item>
              <Button style={{ margin: "0 12px 0 0" }} htmlType="submit">
                Submit
              </Button>
              <Button onClick={() => setIsAdd(false)}>
                Close
              </Button>
            </Form.Item>
          </>
        )}
        <Money>
          <StyledText>
            My wallet:&nbsp;
          </StyledText>
          {!isNegative
            && (
            <StyledText
              type="#55a630"
            >
              {wallet}
            </StyledText>
            )}
          {isNegative && (
          <StyledText
            type="#e63946"
          >
            -
            {wallet}
          </StyledText>
          )}

        </Money>
      </MoneyForm>
      <BarEarning
        chartData={chartData}
        isMonth={isMonth}
        onPrev={handlePrevClick}
        onNext={handleNextClick}
        onMonth={handleSwitchMonth}
        onDay={handleSwitchDay}
        page={page}
      />
    </Wrapper>
  );
}

export default EarningPage;
