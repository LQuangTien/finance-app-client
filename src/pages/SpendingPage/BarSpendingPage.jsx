import React, { useEffect, useState } from "react";
import axios from "axios";

import BarSpending from "components/BarSpending";
import { Wrapper } from "./style.jsx";
import { getData } from 'pages/configAxios'

function BarSpendingPage() {
  const [chartData, setChartData] = useState(null);
  const [isMonth, setIsMonth] = useState(true);
  const [page, setPage] = useState(1);

  const getSpendingData = async () => {
    const spending = await getData("spending")
    setChartData(spending);
  };

  useEffect(() => {
    getSpendingData();
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
      <BarSpending
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

export default BarSpendingPage;
