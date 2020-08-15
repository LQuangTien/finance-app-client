import React, { useEffect, useState } from "react";
import moment from "moment";

import Doughnut from "components/Doughnut";
import { getData } from "pages/configAxios";
import { Wrapper } from "./style";

function DoughtnutPage() {
  const [chartData, setChartData] = useState(null);
  const [page, setPage] = useState(moment().month() + 1);
  const getSpendingData = async () => {
    const spending = await getData("spending");
    setChartData(spending);
  };

  useEffect(() => {
    getSpendingData();
  }, [page]);

  const handleOnPrev = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };
  const handleOnNext = () => {
    if (page < 12) {
      setPage(page + 1);
    }
  };
  return (
    <Wrapper>
      <Doughnut
        chartData={chartData}
        onPrev={handleOnPrev}
        onNext={handleOnNext}
        page={page}
      />
    </Wrapper>
  );
}

export default DoughtnutPage;
