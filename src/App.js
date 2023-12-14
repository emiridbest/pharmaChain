import React, { useState, useEffect, useCallback } from "react";
import Web3 from "web3";
import "./App.css";

import { contractABI, contractAddress } from "./utils/const";
import {
  ManufactureItem,
  AssignRole,
  Navbar,
  SellItem,
  ShipToDistributor,
  ShipToRetailer,
  TrackItem,
  Welcome,
  Footer,
  TrustedAddressesTextBox
} from "./components/Index";

function App() {
  const [currentAccount, setCurrentAccount] = useState("");
  const [formData, setFormData] = useState({
    itemName: "",
    itemPrice: "",
    manufacturerName: "",
    itemId: "",
    distributorAddress: "",
    retailerAddress: "",
    customerName: "",
  });
  const [itemCount, setItemCount] = useState(0);
  const [items, setItems] = useState([]);
  const [role, setRole] = useState(null);
  const [contract, setContractInstance] = useState(null);

  const initContract = useCallback(async () => {
    try {
      if (!window.ethereum) {
        console.error("Wallet extension not detected");
        return;
      }

      const web3 = new Web3(window.ethereum);
      await window.ethereum.request({ method: "eth_requestAccounts" });
      const contract = new web3.eth.Contract(contractABI, contractAddress);

      setCurrentAccount((await web3.eth.getAccounts())[0]);
      setContractInstance(contract);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleChange = (e, name) => {
    setFormData((prevState) => ({ ...prevState, [name]: e.target.value }));
  };

  const checkIfWalletIsConnected = () => {
    try {
      if (!window.ethereum)
        return alert("Please install the wallet extension");

      const web3 = new Web3(window.ethereum);
      web3.eth.getAccounts((err, accounts) => {
        if (err) {
          console.error(err);
          throw new Error("Failed to get accounts");
        }
        if (accounts && accounts.length) {
          setCurrentAccount(accounts[0]);
        } else {
          console.log("No accounts found");
        }
        console.log(accounts);
      });
    } catch (error) {
      console.log(error);
      throw new Error("No ethereum object");
    }
  };

  const connectToWallet = async () => {
    try {
      if (!window.ethereum)
        throw new Error("wallet extension not detected");

      await window.ethereum.enable({ method: "eth_requestAccounts" });
      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);
      throw new Error("Failed to connect to wallet");
    }
  };

  const assignRole = async (address, role) => {
    try {
      await contract.methods
        .assignRole(address, role)
        .send({ from: currentAccount, gasLimit: 3000000 });
      setRole(role);

      alert(`Role assigned to ${address} successfully!`);
    } catch (error) {
      console.error(error);
    }
  };

  const manufactureItem = async (itemName, itemPrice, manufacturerName) => {
    try {
      await contract.methods
        .manufactureItem(itemName, itemPrice, manufacturerName)
        .send({ from: currentAccount, gasLimit: 3000000 });
      const itemCount = await contract.methods.itemCount().call();
      const newItem = await contract.methods.items(itemCount).call();
      setItemCount(itemCount);
      setItems([...items, newItem]);
    } catch (error) {
      console.error(error);
    }
  };

  const shipToDistributor = async (itemId, distributorAddress) => {
    try {
      await contract.methods
        .shipItemToDistributor(itemId, distributorAddress)
        .send({ from: currentAccount, gasLimit: 3000000 });
      const updatedItem = await contract.methods.items(itemId).call();
      const updatedItems = [...items];
      updatedItems[itemId - 1] = updatedItem;
      setItems(updatedItems);

      alert(`Item shipped successfully to ${distributorAddress}`);
    } catch (error) {
      alert("Attempt to ship item failed");
    }
  };

  const shipToRetailer = async (itemId, retailerAddress) => {
    try {
      await contract.methods
        .shipItemToRetailer(itemId, retailerAddress)
        .send({ from: currentAccount, gasLimit: 3000000 });
      const updatedItem = await contract.methods.items(itemId).call();
      const updatedItems = [...items];
      updatedItems[itemId - 1] = updatedItem;
      setItems(updatedItems);

      alert(`Item shipped succesfully to ${retailerAddress}`);
    } catch (error) {
      alert("Attempt to ship item failed");
    }
  };

  const sellItem = async (itemId, customerName) => {
    try {
      await contract.methods
        .sellItem(itemId, customerName)
        .send({ from: currentAccount, gasLimit: 3000000 });
      console.log(trackItem);
      alert(
        `Item with ID ${itemId} has been sold to ${customerName} successfully`
      );
    } catch (error) {
      console.error(error);
      alert(`Error occurred while selling item with ID ${itemId}`);
    }
  };

  const trackItem = async (itemId) => {
    try {
      const item = await contract.methods.items(itemId).call();
      console.log(`Item with ID ${itemId}:`, item);

      // Format the item information for better readability
      const formattedItem = formatItem(item);

      // Display the formatted item information as an alert
      alert(`Item with ID ${itemId}:\n${formattedItem}`);

      return item;
    } catch (error) {
      console.error(
        `Error occurred while fetching item with ID ${itemId}:`,
        error
      );
      return null;
    }
  };
  function formatItem(item) {
    const formattedItem = `
      Name: ${item.name}
      Price: ${item.price}
      State: ${item.state}
      Manufacturer: ${item.manufacturer[2]} (Address: ${item.manufacturer[0]}, ID: ${item.manufacturer[1]})
      Distributor: ${item.distributor[2]} (Address: ${item.distributor[0]}, ID: ${item.distributor[1]})
      Retailer: ${item.retailer[2]} (Address: ${item.retailer[0]}, ID: ${item.retailer[1]})
      Customer: ${item.customer[2]} (Address: ${item.customer[0]}, ID: ${item.customer[1]})
    `;
    return formattedItem;
  }

  useEffect(() => {
    if (currentAccount) {
      initContract();
    }
  }, [currentAccount, initContract]);

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome
          connectToWallet={connectToWallet}
          currentAccount={currentAccount}
        />
      </div>
      <TrustedAddressesTextBox />
      <div className="container">
        <AssignRole
          formData={formData}
          assignRole={assignRole}
          handleChange={handleChange}
        />
        <ManufactureItem
          formData={formData}
          manufactureItem={manufactureItem}
          handleChange={handleChange}
        />
        <ShipToDistributor
          formData={formData}
          shipToDistributor={shipToDistributor}
          handleChange={handleChange}
        />
        <ShipToRetailer
          formData={formData}
          shipToRetailer={shipToRetailer}
          handleChange={handleChange}
        />
        <SellItem
          formData={formData}
          sellItem={sellItem}
          handleChange={handleChange}
        />
        <TrackItem
          formData={formData}
          trackItem={trackItem}
          handleChange={handleChange}
        />
        </div>
        <div>
        <Footer />
      </div>
    </div>
  );
}
export default App;
