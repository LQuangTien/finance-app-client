import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import BarSpending from "components/BarSpending";
import { getData } from "api/finance";
import { Wrapper } from "./style";

function BarSpendingPage(props) {
  const [chartData, setChartData] = useState(null);
  const [isMonth, setIsMonth] = useState(true);
  const [page, setPage] = useState(1);
  const { isSubmit, onSubmitForm } = props;
  const getSpendingData = async () => {
    const spending = await getData("spending");
    setChartData(spending);
  };

  useEffect(() => {
    getSpendingData();
    onSubmitForm(false);
  }, [page, isSubmit, onSubmitForm]);

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
BarSpendingPage.propTypes = {
  onSubmitForm: PropTypes.func,
  isSubmit: PropTypes.bool
};
BarSpendingPage.defaultProps = {
  onSubmitForm: null,
  isSubmit: null
};
export default BarSpendingPage;
