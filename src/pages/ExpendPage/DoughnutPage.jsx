import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

import Doughnut from "components/Doughnut";
import { Wrapper } from "./style";

function DoughtnutPage() {
  const [chartData, setChartData] = useState(null);
  const [page, setPage] = useState(moment().month() + 1);
  const getData = async () => {
    const res = await axios.get("https://skrj0.sse.codesandbox.io/expend");
    const { expend } = res.data;
    setChartData(expend);
  };

  useEffect(() => {
    getData();
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
