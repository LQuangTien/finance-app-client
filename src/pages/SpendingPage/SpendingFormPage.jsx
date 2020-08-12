import SpendingForm from "components/SpendingForm";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { Wrapper } from "./style";
import { postSpendingData } from 'pages/configAxios'

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
function SpendingFormPage() {
  const [categoryInput, setCategoryInput] = useState("");
  const [typeInput, setTypeInput] = useState("");
  const [types, setTypes] = useState([]);

  useEffect(() => {
    const types = getTypes(categoryInput);
    setTypes(types);
  }, [categoryInput]);

  const categoryOnChange = (value) => {
    setCategoryInput(value);
  };
  const typeOnChange = (value) => {
    setTypeInput(value);
  };
  const onFinishForm = (value) => {
    value.date = moment(value.date).format("DD/MM/YYYY");
    postSpendingData(value)
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

export default SpendingFormPage;
