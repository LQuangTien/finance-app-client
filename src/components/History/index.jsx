import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Timeline, Skeleton, Typography, Space } from "antd";
import { StyledTimeline } from "./style";
const { Text } = Typography;
History.propTypes = {};
History.defaultProps = {};

function History(props) {
  const { history, isExpend } = props;
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

  if (!isExpend) {
    return (
      <StyledTimeline reverse={true} mode="left">
        {history.map((income) => (
          <Timeline.Item label={income.date}>
            <Space direction="vertical">
              <Text strong>Amount: </Text>
              {income.amount}
            </Space>
          </Timeline.Item>
        ))}
      </StyledTimeline>
    );
  }
  return (
    <StyledTimeline reverse={true} mode="left">
      {history.map((expend) => (
        <Timeline.Item label={expend.date}>
          <Space direction="vertical">
            <p>
              <Text strong>Category: </Text>
              {expend.category}
            </p>
            <p>
              <Text strong>Type: </Text>
              {expend.type}
            </p>
            <p>
              <Text strong>Amount: </Text>
              {expend.amount}
            </p>
          </Space>
        </Timeline.Item>
      ))}
    </StyledTimeline>
  );
}

export default History;
