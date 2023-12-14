import React, { useState, useEffect } from "react";

// Replace these hardcoded addresses and roles with your actual data
const hardcodedTrustedAddresses = [
  {
    address: "0x89563f2535ad834833c0D84CF81Ee335867b8e34",
    role: "Manufacturer",
  },
  {
    address: "0xA96320581e94Bb4A34ad1ea6bED3090FaAA2058F",
    role: "Distributor",
  },
  {
    address: "0x401e2a5deC261326b48de1F9fA26D93f94dECcfC",
    role: "Retailer",
  },
];

function TrustedAddressesTextBox() {
  const [trustedAddresses, setTrustedAddresses] = useState([]);

  useEffect(() => {
    // If you want to use hardcoded addresses, simply set them here
    setTrustedAddresses(hardcodedTrustedAddresses);
  }, []);

  return (
    <div className="trusted-addresses-box">
      {trustedAddresses.map((entry, index) => (
        <div key={index} className="trusted-address">
          <div className="address">{entry.address}</div>
          <div className="role">{entry.role}</div>
        </div>
      ))}
    </div>
  );
}


export default TrustedAddressesTextBox;
