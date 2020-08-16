import React, { useEffect, useState } from "react";
import moment from "moment";
import PropTypes from "prop-types";

import Doughnut from "components/Doughnut";
import { getData } from "pages/configAxios";
import { Wrapper } from "./style";

function DoughtnutPage(props) {
  const [chartData, setChartData] = useState(null);
  const [page, setPage] = useState(moment().month() + 1);
  const { isSubmit, onSubmitForm } = props;

  const getSpendingData = async () => {
    const spending = await getData("spending");
    setChartData(spending);
  };
  useEffect(() => {
    getSpendingData();
    onSubmitForm(false);
  }, [page, isSubmit, onSubmitForm]);

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
DoughtnutPage.propTypes = {
  onSubmitForm: PropTypes.func,
  isSubmit: PropTypes.bool
};
DoughtnutPage.defaultProps = {
  onSubmitForm: null,
  isSubmit: null
};
export default DoughtnutPage;
