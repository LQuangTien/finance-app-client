import PropTypes from "prop-types";
import React from "react";
import { Doughnut } from "react-chartjs-2";
import moment from "moment";
import { Button } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { StyledButton, Month } from "./style";
DoughnutChart.propTypes = {
  chartData: PropTypes.object,
  onPrev: PropTypes.func,
  onNext: PropTypes.func
};
DoughnutChart.defaultProps = {
  chartData: null,
  onPrev: null,
  onNext: null
};

const DOUGHNUT_COLORS = [
  "#9b5de5",
  "#fee440",
  "#f15bb5",
  "#00bbf9",
  "#ee6c4d",
  "#00f5d4",
  "#d9d9d9"
];
function DoughnutChart(props) {
  const { chartData, onPrev, onNext, page } = props;

  const LOADING_DATA = {
    datasets: [
      {
        data: [1, 1, 1, 1, 1, 1, 1],
        backgroundColor: []
      }
    ],
    labels: ["Nothing"]
  };

  // wait for load data
  if (!chartData) {
    return (
      <div>
        <Doughnut
          data={LOADING_DATA}
          width={200}
          height={150}
          options={({ responsive: true }, { maintainAspectRatio: false })}
        />

        <StyledButton disabled icon={<LeftOutlined />} />
        <StyledButton disabled icon={<RightOutlined />} />
      </div>
    );
  }

  const handleOnPrevClick = () => {
    if (onPrev) {
      onPrev();
    }
  };
  const handleOnNextClick = () => {
    if (onNext) {
      onNext();
    }
  };

  const { transactions } = chartData;
  const filterTransaction = transactions.filter((transaction) => {
    const date = moment(transaction.date, "DD/MM/YYYY");
    if (date.year() === moment().year()) {
      return date.month() + 1 === page;
      // page is month
    }
  });

  // if any month has no transaction
  // return Doughtnut chart to loading

  if (!filterTransaction.length) {
    return (
      <div>
        <Doughnut
          data={LOADING_DATA}
          width={200}
          height={150}
          options={({ responsive: true }, { maintainAspectRatio: false })}
        />
        <Month>
          {page}-{moment().year()}
        </Month>
        <StyledButton onClick={handleOnPrevClick} icon={<LeftOutlined />} />
        <StyledButton onClick={handleOnNextClick} icon={<RightOutlined />} />
      </div>
    );
  }

  // used for the doughnutData below
  const categories = filterTransaction.reduce(
    (accumulator, currentValue) => {
      const category = currentValue.category;
      accumulator[category] += currentValue.amount;
      return accumulator;
    },
    {
      Ultilities: 0,
      Food: 0,
      Departmental: 0,
      Entertaiment: 0,
      Car: 0,
      Medical: 0,
      Misc: 0
    }
  );

  // used for the doughnutData below
  const DoughnutData = {
    datasets: [
      {
        data: [],
        backgroundColor: DOUGHNUT_COLORS
      }
    ],
    labels: []
  };
  for (let category in categories) {
    if (categories[category] > 0) {
      DoughnutData.datasets[0].data.push(categories[category]);
      DoughnutData.labels.push(category);
    }
  }

  return (
    <div>
      <Doughnut
        data={DoughnutData}
        width={200}
        height={150}
        options={({ responsive: true }, { maintainAspectRatio: false })}
      />
      <Month>
        {page}-{moment().year()}
      </Month>
      <StyledButton onClick={handleOnPrevClick} icon={<LeftOutlined />} />
      <StyledButton onClick={handleOnNextClick} icon={<RightOutlined />} />
    </div>
  );
}
export default DoughnutChart;
