var displayName = "Jess's standing desk";
var inventoryType = "furniture";
var trackingNumber = "FD123455";
var createDate = new Date();
var originalCost;
if (typeof originalCost === 'number') {
    var cost = originalCost;
}
else {
    var x = originalCost;
}
var InventoryItemType;
(function (InventoryItemType) {
    InventoryItemType["Computer"] = "computer";
    InventoryItemType["Furniture"] = "furniture";
})(InventoryItemType || (InventoryItemType = {}));
function getInventoryItem(trackingNumber) {
    return null;
}
function saveInventoryItem(item) {
}
var inventoryItem = getInventoryItem(trackingNumber);
inventoryItem.createDate = new Date();
saveInventoryItem({
    displayName: 'MacBook 2019 Pro 13 Retina',
    inventoryType: "computer",
    trackingNumber: 'MBP123456',
    createDate: new Date(),
    originalCost: 1399
});
function clone(source, options) {
    var serialized = JSON.stringify(source);
    return JSON.parse(serialized);
}
var cloned = clone(inventoryItem, { deep: true });
var keyValue = { Key: 'something', Value: 1234 };
var keyValue2 = { Key: 1234, Value: true };
