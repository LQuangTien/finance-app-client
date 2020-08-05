import PropTypes from "prop-types";
import React from "react";
import { Doughnut } from "react-chartjs-2";
import moment from "moment";
import { Button } from "antd";
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

const loadingData = {
  datasets: [
    {
      data: [1, 1, 1, 1, 1, 1, 1],
      backgroundColor: []
    }
  ],
  labels: ["Nothing"]
};
const doughtnutColor = [
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
  if (!chartData) {
    return (
      <>
        <Doughnut
          data={loadingData}
          width={200}
          height={150}
          options={({ responsive: true }, { maintainAspectRatio: false })}
        />
        <Button disabled>Loading</Button>
        <Button disabled>Loading</Button>
      </>
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
  const filterTransaction = transactions.filter(transaction => {
    const date = moment(transaction.date, "MM/DD/YYYY");

    if (date.year() === moment().year()) {
      return date.month() + 1 === page;
    }
  });

  if (!filterTransaction.length) {
    return (
      <div>
        <Doughnut
          data={loadingData}
          width={200}
          height={150}
          options={({ responsive: true }, { maintainAspectRatio: false })}
        />
        <Button onClick={handleOnPrevClick}>Prev</Button>
        <Button onClick={handleOnNextClick}>Next</Button>
      </div>
    );
  }

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

  const data = { data: [], labels: [] };
  for (let category in categories) {
    if (categories[category] > 0) {
      data.data.push(categories[category]);
      data.labels.push(category);
    }
  }
  console.log(data);
  const DoughnutData = {
    datasets: [
      {
        data: data.data,
        backgroundColor: doughtnutColor
      }
    ],
    labels: data.labels
  };

  return (
    <div>
      <Doughnut
        data={DoughnutData}
        width={200}
        height={150}
        options={({ responsive: true }, { maintainAspectRatio: false })}
      />
      <Button onClick={handleOnPrevClick}>Prev</Button>
      <Button onClick={handleOnNextClick}>Next</Button>
    </div>
  );
}
export default DoughnutChart;
// Ultilities: Electricity, Gas, Phone, Internet, Water, Garbage
// Food: Groceries, Restaurant, FastFood
// Departmental: Clothing, Personal Item, Kids, Books
// Entertaiment: Movies, Music
// Car: petrol, Oil
// Medical: Hospital, Pharmacy
// Misc: Travel tickets, Hotel, Gift, Charity
