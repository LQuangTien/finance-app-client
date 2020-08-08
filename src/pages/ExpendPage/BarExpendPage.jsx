import React, { useEffect, useState } from "react";
import axios from "axios";

import BarExpend from "components/BarExpend";
import { Wrapper } from "./style.jsx";

function BarExpendPage() {
  const [chartData, setChartData] = useState(null);
  const [isMonth, setIsMonth] = useState(true);
  const [page, setPage] = useState(1);

  const getData = async () => {
    const res = await axios.get("https://skrj0.sse.codesandbox.io/expend");
    const { expend } = res.data;
    setChartData(expend);
  };

  useEffect(() => {
    getData();
  }, [page]);

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
