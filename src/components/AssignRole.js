import React from "react";

const Input = ({ placeholder, name, type, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    onChange={(e) => handleChange(e, name)}
    className="white-glassmorphism"
  />
);

const AssignRole = ({ formData = {}, assignRole, handleChange }) => {
  const handleSubmit = (e) => {
    const { address, role } = formData;
    e.preventDefault();
    if (!address || !role) return;

    assignRole(address, role);
  };

  return (
    <div className="white-glassmorphism">
      <div className="blue-glassmorphism">
        <Input
          placeholder="Address"
          name="address"
          type="text"
          handleChange={handleChange}
        />
        <label className="text-gradient">Roles</label>
        <select name="role" onChange={(e) => handleChange(e, "role")}>
          <option value="1">Manufacturer</option>
          <option value="2">Distributor</option>
          <option value="3">Retailer</option>
        </select>
      </div>
      <div />
      <button type="button" onClick={handleSubmit}>
        Assign Role
      </button>
    </div>
  );
};

export default AssignRole;
