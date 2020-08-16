import { Skeleton, Space, Timeline, Typography } from "antd";
import React from "react";
import PropTypes from "prop-types";
import StyledTimeline from "./style";

const { Text } = Typography;

function History(props) {
  const { history, isSpending } = props;
  if (!history) {
    return (
      <Timeline>
        <Skeleton active />
        <Skeleton active />
        <Skeleton active />
        <Skeleton active />
      </Timeline>
    );
  }

  if (!isSpending) {
    return (
      <StyledTimeline reverse mode="left">
        {history.map((earning) => (
          <Timeline.Item label={earning.date} key={earning._id}>
            <Space direction="vertical">
              <Text strong>
                Amount:
              </Text>
              <span>
                $
                {earning.amount}
              </span>
            </Space>
          </Timeline.Item>
        ))}
      </StyledTimeline>
    );
  }
  return (
    <StyledTimeline reverse mode="left">
      {history.map((spending) => (
        <Timeline.Item label={spending.date} key={spending._id}>
          <Space direction="vertical">
            <p>
              <Text strong>
                Category:&nbsp;
              </Text>
              {spending.category}
            </p>
            <p>
              <Text strong>
                Type:&nbsp;
              </Text>
              {spending.type}
            </p>
            <p>
              <Text strong>
                Amount:&nbsp;
              </Text>
              $
              {spending.amount}
            </p>
          </Space>
        </Timeline.Item>
      ))}
    </StyledTimeline>
  );
}
History.propTypes = {
  history: PropTypes.arrayOf(PropTypes.shape({})),
  isSpending: PropTypes.bool
};
History.defaultProps = {
  history: null,
  isSpending: null
};
export default History;
