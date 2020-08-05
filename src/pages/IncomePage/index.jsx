import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import moment from "moment";
import { Button, Form, Input } from "antd";

import BarIncome from "components/BarIncome";
import { CreditCard, MoneyForm, Wrapper } from "./style.jsx";

function IncomePage(props) {
  const [chartData, setChartData] = useState(null);
  const [isMonth, setIsMonth] = useState(true);
  const [page, setPage] = useState(1);
  const [inputValue, setInputValue] = useState(null);
  const [isAdd, setIsAdd] = useState(false);
  const inputRef = useRef();

  const getData = async () => {
    const res = await axios.get("https://skrj0.sse.codesandbox.io/income");
    const { income } = res.data;
    setChartData(income);
  };

  useEffect(() => {
    getData();
  }, [page]);

  useEffect(() => {
    if (isAdd) {
      inputRef.current.focus();
    }
  }, [isAdd]);
  //switch to view months
  const handleSwitchMonth = maxPage => {
    setPage(maxPage);
    setIsMonth(true);
  };
  const handleSwitchDay = maxPage => {
    setPage(maxPage);
    setIsMonth(false);
  };
  const handlePrevClick = () => {
    setPage(page - 1);
  };
  const handleNextClick = () => {
    setPage(page + 1);
  };
  const handleSubmitForm = e => {
    e.preventDefault();
    if (inputValue) {
      const newTransaction = {
        date: moment().format("MM/DD/YYYY"),
        amount: inputValue
      };
      axios.post("https://skrj0.sse.codesandbox.io/income", newTransaction);
      setInputValue("");
    }
  };
  const handleInputOnChange = e => {
    setInputValue(+e.target.value);
  };
  const handleCreditClick = () => {
    setIsAdd(true);
  };
  return (
    <Wrapper>
      <MoneyForm layout="inline" onSubmit={handleSubmitForm}>
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
      <BarIncome
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

export default IncomePage;
