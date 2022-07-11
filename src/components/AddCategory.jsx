import React, { useState } from "react";

export const AddCategory = ({ onNewCategory }) => { //setCategories
  // const handleAdd = (e) => {
  //     setCategories( [...categories, 'Naruto']);
  // };

  const [inputValue, setinputValue] = useState('');

  const handleInputChange = (e) => {
    setinputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); //prevent post and refresh

    if (inputValue.trim().length <= 1) return;

    // setCategories((catgs) => [...catgs, inputValue]);
    setinputValue("");
    onNewCategory(inputValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={handleInputChange}
      />
    </form>
  );
};
