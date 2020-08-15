import React, { useEffect, useRef, useState } from "react";
import moment from "moment";
import { Button, Form, Input } from "antd";
import { getData, postEarningData } from "pages/configAxios";

import BarEarning from "components/BarEarning";
import { CreditCard, MoneyForm, Wrapper } from "./style";

function EarningPage() {
  const [chartData, setChartData] = useState(null);
  const [isMonth, setIsMonth] = useState(true);
  const [page, setPage] = useState(1);
  const [isAdd, setIsAdd] = useState(false);
  const inputRef = useRef();

  const [form] = Form.useForm();

  const getEarningData = async () => {
    const earning = await getData("earning");
    setChartData(earning);
  };
  useEffect(() => {
    getEarningData();
  }, [page]);

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
      postEarningData(newTransaction);

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
              <Input ref={inputRef} size={40} />
            </Form.Item>
            <Form.Item>
              <Button style={{ margin: "0 12px 0 0" }} htmlType="submit">
                Submit
              </Button>
              <Button onClick={() => setIsAdd(false)}>Close</Button>
            </Form.Item>
          </>
        )}
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
