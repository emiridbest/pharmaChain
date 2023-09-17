import React from "react";

const Input = ({ placeholder, name, type, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    onChange={(e) => handleChange(e, name)}
    className="white-glassmorphism"
  />
);

const ShipToDistributor = ({
  formData = {},
  shipToDistributor,
  handleChange,
}) => {
  const handleSubmit = (e) => {
    const { itemId, distributorAddress } = formData;
    e.preventDefault();
    if (!itemId || !distributorAddress) return;

    shipToDistributor(itemId, distributorAddress);
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
          name="distributorAddress"
          type="text"
          handleChange={handleChange}
        />
      </div>
      <div />
      <button type="button" onClick={handleSubmit}>
        Ship To Distributor
      </button>
    </div>
  );
};

export default ShipToDistributor;
