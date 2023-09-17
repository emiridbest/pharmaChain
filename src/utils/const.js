

export const contractABI = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "itemId",
				"type": "uint256"
			}
		],
		"name": "ItemManufactured",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "itemId",
				"type": "uint256"
			}
		],
		"name": "ItemShippedToDistributor",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "itemId",
				"type": "uint256"
			}
		],
		"name": "ItemShippedToRetailer",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "itemId",
				"type": "uint256"
			}
		],
		"name": "ItemSold",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"internalType": "enum SupplyChain.Role",
				"name": "role",
				"type": "uint8"
			}
		],
		"name": "assignRole",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "itemName",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "itemPrice",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "manufacturerName",
				"type": "string"
			}
		],
		"name": "manufactureItem",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "itemId",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "customerName",
				"type": "string"
			}
		],
		"name": "sellItem",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "itemId",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "distributorAddress",
				"type": "address"
			}
		],
		"name": "shipItemToDistributor",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "itemId",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "retailerAddress",
				"type": "address"
			}
		],
		"name": "shipItemToRetailer",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "itemCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "items",
		"outputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "price",
				"type": "uint256"
			},
			{
				"internalType": "enum SupplyChain.State",
				"name": "state",
				"type": "uint8"
			},
			{
				"components": [
					{
						"internalType": "address",
						"name": "id",
						"type": "address"
					},
					{
						"internalType": "enum SupplyChain.Role",
						"name": "role",
						"type": "uint8"
					},
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					}
				],
				"internalType": "struct SupplyChain.Actor",
				"name": "manufacturer",
				"type": "tuple"
			},
			{
				"components": [
					{
						"internalType": "address",
						"name": "id",
						"type": "address"
					},
					{
						"internalType": "enum SupplyChain.Role",
						"name": "role",
						"type": "uint8"
					},
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					}
				],
				"internalType": "struct SupplyChain.Actor",
				"name": "distributor",
				"type": "tuple"
			},
			{
				"components": [
					{
						"internalType": "address",
						"name": "id",
						"type": "address"
					},
					{
						"internalType": "enum SupplyChain.Role",
						"name": "role",
						"type": "uint8"
					},
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					}
				],
				"internalType": "struct SupplyChain.Actor",
				"name": "retailer",
				"type": "tuple"
			},
			{
				"components": [
					{
						"internalType": "address",
						"name": "id",
						"type": "address"
					},
					{
						"internalType": "enum SupplyChain.Role",
						"name": "role",
						"type": "uint8"
					},
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					}
				],
				"internalType": "struct SupplyChain.Actor",
				"name": "customer",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "roles",
		"outputs": [
			{
				"internalType": "enum SupplyChain.Role",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "itemId",
				"type": "uint256"
			}
		],
		"name": "trackItem",
		"outputs": [
			{
				"internalType": "enum SupplyChain.State",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
export const contractAddress= "0xB695030458F05BD2331BAc7AF5A003CB42b53427"