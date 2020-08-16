import SpendingForm from "components/SpendingForm";
import moment from "moment";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { postSpendingData } from "pages/configAxios";
import { Wrapper } from "./style";

const getTypes = (category) => {
  const CATEGORIES = {
    Ultilities: ["Electricity", "Gas", "Phone", "Internet", "Water", "Garbage"],
    Food: ["Groceries", "Restaurant", "FastFood"],
    Departmental: ["Clothing", "Personal", "Item", "Kids", "Books"],
    Entertaiment: ["Movies", "Music"],
    Car: ["Petrol", "Oil"],
    Medical: ["Hospital", "Pharmacy"],
    Misc: ["Travel tickets", "Hotel", "Gift", "Charity"]
  };
  return CATEGORIES[category];
};
function SpendingFormPage(props) {
  const [categoryInput, setCategoryInput] = useState("");
  const [typeInput, setTypeInput] = useState("");
  const [types, setTypes] = useState([]);
  const { onSubmitForm } = props;
  useEffect(() => {
    const typeOptions = getTypes(categoryInput);
    setTypes(typeOptions);
  }, [categoryInput]);

  const categoryOnChange = (value) => {
    setCategoryInput(value);
  };
  const typeOnChange = (value) => {
    setTypeInput(value);
  };
  const onFinishForm = (value) => {
    const cloneValue = value;
    cloneValue.date = moment(value.date).format("DD/MM/YYYY");
    postSpendingData(cloneValue);
    if (onSubmitForm) {
      onSubmitForm(true);
    }
  };
  return (
    <Wrapper>
      <SpendingForm
        categoryInput={categoryInput}
        typeInput={typeInput}
        types={types}
        categoryOnChange={categoryOnChange}
        typeOnChange={typeOnChange}
        onFinishForm={onFinishForm}
      />
    </Wrapper>
  );
}
SpendingFormPage.propTypes = { onSubmitForm: PropTypes.func };
SpendingFormPage.defaultProps = { onSubmitForm: null };
export default SpendingFormPage;
