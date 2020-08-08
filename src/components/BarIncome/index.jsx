import React from "react";
import moment from "moment";
import PropTypes from "prop-types";
import { Bar } from "react-chartjs-2";
import { PageButton, SwitchMode } from "./style";

BarIncome.propTypes = {
  chartData: PropTypes.object,
  isMonth: PropTypes.bool,
  onPrev: PropTypes.func,
  onNext: PropTypes.func,
  onDay: PropTypes.func,
  onMonth: PropTypes.func,
  page: PropTypes.number
};
BarIncome.defaultProps = {
  chartData: null,
  isMonth: true,
  onPrev: null,
  onNext: null,
  onDay: null,
  onMonth: null,
  page: 1
};

// temp data use for Bar, wait for get data from sever
let data = {
  labels: ["Loading"],
  datasets: [
    {
      label: "Loading",
      data: [0]
    }
  ]
};

function BarIncome(props) {
  const { chartData, isMonth, onNext, onPrev, onMonth, onDay, page } = props;

  if (!chartData) {
    return (
      <div>
        <SwitchMode block disabled>
          Loading
        </SwitchMode>
        <Bar
          data={data}
          width={400}
          height={340}
          options={({ responsive: true }, { maintainAspectRatio: false })}
        />
        <PageButton block type="prev" disabled>
          Loading
        </PageButton>
        <PageButton block type="next" disabled>
          Loading
        </PageButton>
      </div>
    );
  }

  const { totalMoneyEachYear, transactions } = chartData;

  //use for Month
  // handle NEXT button
  const maxPageMonth = totalMoneyEachYear.length;

  //use for Day
  const perPage = 4;
  // handle NEXT button
  const maxPageDay = Math.ceil(transactions.length / perPage);
  const start = (page - 1) * perPage;
  const end = page * perPage;

  if (isMonth) {
    // data for Chart if is Month
    const index = totalMoneyEachYear.findIndex(
      (x) => x.year === moment().year() + 1 - page
    );

    data = {
      labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      datasets: [
        {
          label: `Money each month in ${totalMoneyEachYear[index].year}`,
          data: totalMoneyEachYear[index].months,
          backgroundColor: "rgb(170, 220, 255)"
        }
      ]
    };
  } else {
    // transactionData makes easier to assign data
    const transactionData = transactions.reduce(
      (accumulator, currentValue) => {
        accumulator.labels.push(currentValue.date);
        accumulator.amount.push(currentValue.amount);
        return accumulator;
      },
      { labels: [], amount: [] }
    );

    // data for Chart if is Day
    data = {
      labels: transactionData.labels.slice(start, end), // 4 per page
      datasets: [
        {
          label: "Money each day",
          data: transactionData.amount.slice(start, end), // 4 per page
          backgroundColor: "rgb(170, 220, 255)",
          maxBarThickness: 60
        }
      ]
    };
  }

  const handleOnPrev = () => {
    if (onPrev) {
      onPrev();
    }
  };
  const handleOnNext = () => {
    if (onNext) {
      onNext();
    }
  };

  return (
    <div className="">
      {/* when click, show the latest data */}
      <div>
        {!isMonth && (
          <SwitchMode block onClick={() => onMonth(1)}>
            Switch to Month
          </SwitchMode>
        )}
        {isMonth && (
          <SwitchMode block onClick={() => onDay(maxPageDay)}>
            Switch to Day
          </SwitchMode>
        )}
      </div>

      <Bar
        className="chartBar"
        data={data}
        width={400}
        height={340}
        options={({ responsive: true }, { maintainAspectRatio: false })}
      />

      <div>
        {
          // show this Next button when click Month
          isMonth && (
            <PageButton
              block
              type="prev"
              disabled={page >= maxPageMonth}
              onClick={page < maxPageMonth ? handleOnNext : null}
              className="pagebutton buttonPrev"
            >
              {page < maxPageMonth ? "Prev" : "(Out of page)"}
            </PageButton>
          )
        }
        {!isMonth && (
          <PageButton
            block
            type="prev"
            disabled={page <= 1}
            onClick={page > 1 ? handleOnPrev : null}
            className="pagebutton buttonPrev"
          >
            {page > 1 ? "Prev" : "(Out of page)"}
          </PageButton>
        )}

        {isMonth && (
          <PageButton
            block
            type="next"
            disabled={page <= 1}
            onClick={page > 1 ? handleOnPrev : null}
            className="pagebutton buttonNext"
          >
            {page > 1 ? "Next" : "(Out of page)"}
          </PageButton>
        )}

        {
          // show this Next button when click Day
          !isMonth && (
            <PageButton
              block
              type="next"
              disabled={page >= maxPageDay}
              onClick={page < maxPageDay ? handleOnNext : null}
              className="pagebutton buttonNext"
            >
              {page < maxPageDay ? "Next" : "(Out of page)"}
            </PageButton>
          )
        }
      </div>
    </div>
  );
}

export default BarIncome;
