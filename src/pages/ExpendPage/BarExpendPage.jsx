import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import moment from "moment";
import { Button, Form, Input } from "antd";

import BarExpend from "components/BarExpend";
import { CreditCard, MoneyForm, Wrapper } from "./style.jsx";

function BarExpendPage(props) {
  const [chartData, setChartData] = useState(null);
  const [isMonth, setIsMonth] = useState(true);
  const [page, setPage] = useState(1);
  const [inputValue, setInputValue] = useState(null);
  const [isAdd, setIsAdd] = useState(false);
  const inputRef = useRef();

  const getData = async () => {
    const res = await axios.get("https://skrj0.sse.codesandbox.io/expend");
    const { expend } = res.data;
    setChartData(expend);
  };

  useEffect(() => {
    getData();
  }, [page]);

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

  return (
    <Wrapper>
      <BarExpend
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

export default BarExpendPage;
