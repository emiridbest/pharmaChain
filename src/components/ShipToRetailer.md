import React from "react";

const Input = ({ placeholder, name, type, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    onChange={(e) => handleChange(e, name)}
    className="white-glassmorphism"
  />
);

const ShipToRetailer = ({ formData, shipToRetailer, handleChange }) => {
  const handleSubmit = (e) => {
    const { itemId, address } = formData;
    e.preventDefault();
    if (!itemId || !address) return;

    shipToRetailer(itemId, address);
  };

  return (
    <div className="white-glassmorphism">
      <div className="blue-glassmorphism">
        <Input
          placeholder="Item ID"
          name="itemId"
          type="number"
          handleChange={handleChange}
        />
        <Input
          placeholder="CeloAddress"
          name="address"
          type="text"
          handleChange={handleChange}
        />
      </div>
      <div />
      <button type="button" onClick={handleSubmit}>
        Ship To Retailer
      </button>
    </div>
  );
};

export default ShipToRetailer;
