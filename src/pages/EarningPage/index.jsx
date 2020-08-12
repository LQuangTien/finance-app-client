import React, { useEffect, useRef, useState } from "react";
import moment from "moment";
import { Button, Form, Input } from "antd";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { getData, postEarningData } from "pages/configAxios";

import BarEarning from "components/BarEarning";
import { CreditCard, MoneyForm, Wrapper } from "./style.jsx";

function EarningPage(props) {
  const [chartData, setChartData] = useState(null);
  const [isMonth, setIsMonth] = useState(true);
  const [page, setPage] = useState(1);
  const [inputValue, setInputValue] = useState(null);
  const [isAdd, setIsAdd] = useState(false);
  const inputRef = useRef();
  let history = useHistory();
  const [form] = Form.useForm();


  const getEarningData = async () => {
    const earning = await getData("earning");
    setChartData(earning);
  }
  useEffect(() => {
    getEarningData()
  }, [page]);

  useEffect(() => {
    if (isAdd) {
      inputRef.current.focus();
    }
  }, [isAdd]);
  //switch to view months
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
    if (inputValue) {
      const newTransaction = {
        date: moment().format("DD/MM/YYYY"),
        amount: inputValue
      };
      console.log(newTransaction)
      // postDataIncome(newTransaction);
      setInputValue("");
      form.resetFields();
    }
  };
  const handleInputOnChange = (e) => {
    setInputValue(+e.target.value);
  };
  const handleCreditClick = () => {
    setIsAdd(true);
  };
  return (
    <Wrapper>
      <MoneyForm form={form} layout="inline" onFinish={handleSubmitForm} >
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
            <Form.Item>
              <Input
                type="text"
                ref={inputRef}
                size={40}
                onChange={handleInputOnChange}
              />
            </Form.Item>
            <Button style={{ margin: "0 12px 0 0" }} htmlType="submit">
              Submit
            </Button>
            <Button onClick={() => setIsAdd(false)}>Close</Button>
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
