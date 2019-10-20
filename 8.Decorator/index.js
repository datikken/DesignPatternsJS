var Shopper = require('./Shopper');
var {
    InventoryItem,
    GoldenInventoryItem,
    PlatinumInventoryItem
} = require('./InventoryItem');

var alex = new Shopper('Alex', 10000);

var walkman = new InventoryItem("Walkman", 29.99);
var necklace = new InventoryItem("Necklace", 9.99);

var gold_necklace = new GoldenInventoryItem(necklace);

var diamond_gold_necklace = new PlatinumInventoryItem(gold_necklace);

var diamond_walkman = new PlatinumInventoryItem(walkman);

alex.purchase(diamond_gold_necklace);
alex.purchase(diamond_walkman);

alex.printStatus();
