let displayName: string = "Jess's standing desk";
let inventoryType:  string = "furniture";
let trackingNumber: string = "FD123455";
let createDate: Date = new Date();
let originalCost : number = 425;

enum InventoryItemType{
    Computer = 'computer',
     Furniture  = 'furniture',
  }

interface InventoryItem {
    displayName: string;
    inventoryType: "computer" | "furniture";
    readonly trackingNumber: string;
    createDate: Date;
    originalCost?: number;
    addNote? : (note :string) => string;
}


function getInventoryItem(trackingNumber : string) : InventoryItem {
    return null;
}

function saveInventoryItem(item : InventoryItem) {

}

let inventoryItem = getInventoryItem(trackingNumber);

inventoryItem.createDate = new Date();

saveInventoryItem({
    displayName : 'MacBook 2019 Pro 13 Retina',
    inventoryType : "computer",
    trackingNumber : 'MBP123456',
    createDate : new Date(),
    originalCost : 1399
});

