import React from "react";

const Input = ({ placeholder, name, type, value, onChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    value={value}
    onChange={(e) => onChange(e, name)}
    className="white-glassmorphism"
  />
);

const TrackItem = ({ formData, trackItem, handleChange }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { itemID } = formData;
    if (!itemID) {
      return;
    }
    await trackItem(itemID);
  };

  return (
    <div className="track">
      <Input
        placeholder="Item ID"
        name="itemID"
        type="number"
        value={formData.itemID}
        onChange={handleChange}
      />
      <button type="button" onClick={handleSubmit}>
        Track Item
      </button>
    </div>
  );
};

export default TrackItem;
