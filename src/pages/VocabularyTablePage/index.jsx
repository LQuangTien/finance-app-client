import React, { useEffect } from "react";
import VocabularyTable from "components/VocabularyTable";
import { useSelector, useDispatch } from "react-redux";
import { GetVocabulary } from "ReduxFolder/actions/vocabulary";

function VocabularyTablePage() {
  const vocabularies = useSelector((state) => state.vocabulary.vocabularies);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetVocabulary());
  }, [dispatch]);
  return (
    <div>
      <VocabularyTable
        vocabularies={vocabularies}
      />
    </div>
  );
}

export default VocabularyTablePage;
