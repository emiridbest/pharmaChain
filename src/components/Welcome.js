import React from "react";

const Welcome = ({ connectToWallet, currentAccount }) => {
  return (
    <div>
      <div>
        <h1 className="text-gradient">
          Track Your Pharmaceutical Products <br />Across The World
        </h1>
        <p className="text-gradient ">
          Explore The World Of Pharmaceutical Supply Chain Management
        </p>
        {!currentAccount && (
          <button type="button" onClick={connectToWallet} className="button">
            <p> Connect Wallet</p>
          </button>
        )}
      </div>
    </div>
  );
};

export default Welcome;
