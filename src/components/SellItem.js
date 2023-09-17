import React from "react";

const Input = ({ placeholder, name, type, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    onChange={(e) => handleChange(e, name)}
    className="white-glassmorphism"
  />
);

const SellItem = ({ formData, sellItem, handleChange }) => {
  const handleSubmit = (e) => {
    const { itemID, name } = formData;
    e.preventDefault();
    if (!itemID || !name) return;

    sellItem(itemID, name);
  };

  return (
    <div className="white-glassmorphism">
      <div className="blue-glassmorphism">
        <Input
          placeholder="Item ID"
          name="ItemID"
          type="number"
          handleChange={handleChange}
        />
        <Input
          placeholder="Customer Name"
          name="name"
          type="text"
          handleChange={handleChange}
        />
      </div>
      <div />
      <button type="button" onClick={handleSubmit}>
        Sell Item
      </button>
    </div>
  );
};

export default SellItem;
