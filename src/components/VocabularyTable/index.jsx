import { Button, Space, Table } from "antd";
import React, { useState } from "react";
import VocabularyAddModal from "components/VocabularyAddModal";
import PropTypes from "prop-types";
import { FlexWrapper, Wrapper } from "./style";

function VocabularyTable(props) {
  const { vocabularies, onAddVocabulary, onDeleteVocabulary } = props;
  const [isVisible, setVisible] = useState(false);

  const onOpenSubmit = () => {
    setVisible(true);
  };
  const onCloseSubmit = () => {
    setVisible(false);
  };
  const onSubmitVocabulary = (values) => {
    onAddVocabulary(values);
    setVisible(false);
  };
  const handleDelete = (id) => {
    onDeleteVocabulary(id);
  };
  const COLUMNS = [
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
      render: (text, record) => (
        <Space size="small">
          <Button onClick={() => handleDelete(record.key)}>
            Delete
          </Button>
          <Button>
            Edit
          </Button>
        </Space>
      )
    }
  ];
  const tableColumns = COLUMNS.map((item) => ({ ...item }));
  const types = COLUMNS[1].filters.map((item) => item.value);
  return (
    <FlexWrapper>
      <Wrapper>
        <Button
          onClick={onOpenSubmit}
          style={{ "margin-bottom": "8px" }}
          type="primary"
        >
          Add New Vocabulary
        </Button>
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
      <VocabularyAddModal
        isVisible={isVisible}
        onCloseSubmit={onCloseSubmit}
        onSubmitVocabulary={onSubmitVocabulary}
        types={types}
      />
    </FlexWrapper>
  );
}
VocabularyTable.propTypes = {
  vocabularies: PropTypes.shape(),
  onAddVocabulary: PropTypes.func,
  onDeleteVocabulary: PropTypes.func
};
VocabularyTable.defaultProps = {
  vocabularies: [],
  onAddVocabulary: null,
  onDeleteVocabulary: null
};
export default VocabularyTable;
