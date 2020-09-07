import React, { useEffect } from "react";
import VocabularyTable from "components/VocabularyTable";
import { useSelector, useDispatch } from "react-redux";
import { GetVocabulary, AddVocabulary, DeleteVocabulary } from "ReduxFolder/actions/vocabulary";

function VocabularyTablePage() {
  const vocabularies = useSelector((state) => state.vocabulary.vocabularies);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetVocabulary());
  }, [dispatch, vocabularies]);
  const onAddVocabulary = (values) => {
    dispatch(AddVocabulary(values));
  };
  const onDeleteVocabulary = (id) => {
    dispatch(DeleteVocabulary(id));
  };
  return (
    <div>
      <VocabularyTable
        vocabularies={vocabularies}
        onAddVocabulary={onAddVocabulary}
        onDeleteVocabulary={onDeleteVocabulary}
      />
    </div>
  );
}

export default VocabularyTablePage;
