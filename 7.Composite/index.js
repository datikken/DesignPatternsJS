var CatalogItem = require('./CatalogItem');
var CatalogGroup = require('./CatalogGroup');

var boots = new CatalogItem("Leather Boots", 79.99);
var sneakers = new CatalogItem("Kicks", 39.99);
var flipFlops = new CatalogItem("California work boots", 19.99);

var group_shoes = new CatalogGroup("Shoes and Such", [boots, sneakers, flipFlops]);

var group_food = new CatalogGroup('Food', [
    new CatalogItem('Milk shake', 35),
    new CatalogItem('Juice', 15),
    new CatalogItem('Gin', 5),
]);

var catalog = new CatalogGroup('Catalog', [group_shoes, group_food]);

catalog.print();