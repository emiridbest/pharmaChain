// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SupplyChain {


enum Role {
    Owner,
    Manufacturer,
    Distributor,
    Retailer
}

struct Actor {
    address id;
    Role role;
    string name;
}

enum State {
    Manufactured,
    ShippedToDistributor,
    ShippedToRetailer,
    Sold
}

struct Item {
    string name;
    uint256 price;
    State state;
    Actor manufacturer;
    Actor distributor;
    Actor retailer;
    Actor customer;
}

uint256 public itemCount;

mapping(uint256 => Item) public items;

mapping(address => Role) public roles;


event ItemManufactured(uint256 itemId);
event ItemShippedToDistributor(uint256 itemId);
event ItemShippedToRetailer(uint256 itemId);
event ItemSold(uint256 itemId);


address public owner;

constructor() {
    owner = msg.sender; 
    roles[owner] = Role.Owner; 
}


// Modifiers
modifier onlyManufacturer(uint256 itemId) {
    require(
        items[itemId].manufacturer.id == msg.sender,
        "Only the manufacturer can perform this action."
    );
    _;
}

modifier onlyDistributor(uint256 itemId) {
    require(
        items[itemId].distributor.id == msg.sender,
        "Only the distributor can perform this action."
    );
    _;
}

modifier onlyRetailer(uint256 itemId) {
    require(
        items[itemId].retailer.id == msg.sender,
        "Only the retailer can perform this action."
    );
    _;
}

// Functions

function assignRole(address user, Role role) public {
    require(msg.sender == owner, "Only the contract owner can assign roles");
    roles[user] = role;
}

function manufactureItem(
    string memory itemName,
    uint256 itemPrice,
    string memory manufacturerName
) public {
    itemCount++;
    Item memory newItem = Item({
        name: itemName,
        price: itemPrice,
        state: State.Manufactured,
        manufacturer: Actor(msg.sender, Role.Manufacturer, manufacturerName),
        distributor: Actor(address(0), Role.Distributor, ""),
        retailer: Actor(address(0), Role.Retailer, ""),
        customer: Actor(address(0), Role.Retailer, "")
    });
    items[itemCount] = newItem;
    emit ItemManufactured(itemCount);
}

function shipItemToDistributor(uint256 itemId, address distributorAddress)
    public
    onlyManufacturer(itemId)
{
    items[itemId].distributor.id = distributorAddress;
    items[itemId].distributor.name = "";
    items[itemId].state = State.ShippedToDistributor;
    emit ItemShippedToDistributor(itemId);
}

function shipItemToRetailer(uint256 itemId, address retailerAddress)
    public
    onlyDistributor(itemId)
{
    items[itemId].retailer.id = retailerAddress;
    items[itemId].retailer.name = "";
    items[itemId].state = State.ShippedToRetailer;
    emit ItemShippedToRetailer(itemId);
}

function sellItem(uint256 itemId, string memory customerName)
    public
    onlyRetailer(itemId)
{
    items[itemId].customer.id = msg.sender;
    items[itemId].customer.name = customerName;
    items[itemId].state = State.Sold;
    emit ItemSold(itemId);
}

function trackItem(uint256 itemId) public view returns (State) {
    return items[itemId].state;
}

}
