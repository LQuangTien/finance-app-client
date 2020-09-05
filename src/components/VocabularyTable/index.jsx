import { Button, Space, Table } from "antd";
import React from "react";
import { FlexWrapper, Wrapper } from "./style";

const columns = [
  {
    title: "Vocabulary",
    dataIndex: "vocabulary",
    sorter: (a, b) => {
      if (a.vocabulary < b.vocabulary) {
        return -1;
      }
      if (a.vocabulary > b.vocabulary) {
        return 1;
      }
      return 0;
    }

  },
  {
    title: "Type",
    dataIndex: "type",
    filters: [
      {
        text: "Noun",
        value: "noun"
      },
      {
        text: "Adj",
        value: "adj"
      },
      {
        text: "Verb",
        value: "verb"
      },
      {
        text: "Adverb",
        value: "adverb"
      }
    ],
    onFilter: (value, record) => record.type.indexOf(value) === 0
  },
  {
    title: "Meaning",
    dataIndex: "meaning"
  },
  {
    title: "Action",
    key: "action",
    render: () => (
      <Space size="small">
        <Button>
          Delete
        </Button>
        <Button>
          Edit
        </Button>
      </Space>
    )
  }
];

function VocabularyTable(props) {
  const { vocabularies } = props;
  const tableColumns = columns.map((item) => ({ ...item }));
  return (
    <FlexWrapper>
      <Wrapper>
        <Table
          showHeader
          pagination={{ position: "bottomRight" }}
          columns={tableColumns}
          dataSource={vocabularies}
          size="small"
          expandedRowRender={(record) => (
            <p>
              {record.description}
            </p>
          )}
        />
      </Wrapper>
    </FlexWrapper>
  );
}
export default VocabularyTable;
