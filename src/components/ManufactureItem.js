import React from "react";

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.01"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="white-glassmorphism"
  />
);

const ManufactureItem = ({ formData, manufactureItem, handleChange }) => {
  const handleSubmit = (e) => {
    const { itemName, itemPrice, manufacturerName } = formData;
    e.preventDefault();
    if (!itemName || !itemPrice || !manufacturerName) return;

    manufactureItem(itemName, itemPrice, manufacturerName);
  };

  return (
    <div className="white-glassmorphism">
      <div className="blue-glassmorphism">
        <Input
          placeholder="Item Name"
          name="itemName"
          type="text"
          handleChange={handleChange}
        />
        <Input
          placeholder="Amount(Celo)"
          name="itemPrice"
          type="number"
          handleChange={handleChange}
        />
        <Input
          placeholder="Manufacturer"
          name="manufacturerName"
          type="text"
          handleChange={handleChange}
        />
      </div>
      <div />
      <button type="button" onClick={handleSubmit}>
        Add Item
      </button>
    </div>
  );
};

export default ManufactureItem;
