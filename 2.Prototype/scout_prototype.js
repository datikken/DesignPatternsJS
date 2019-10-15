class Shopper {

    constructor(name='unnamed person') {
        this._name = name;
        this._shoppingList = [];
    }

    set name(value) {
        this._name = value;
    }

    get name() {
        return this._name;
    }

    get shoppingList() {
        return this._shoppingList;
    }

    addItemToList(item) {
        this._shoppingList.push(item);
    }

    clone() {
        const proto = Object.getPrototypeOf(this);
        const cloned = Object.create(proto);

        cloned._name = this._name;
        cloned._shoppingList = [...this.shoppingList];

        return cloned;
    }
}

var scout = new Shopper();

    scout.addItemToList('camping knife');
    scout.addItemToList('tent');
    scout.addItemToList('backpack');
    scout.addItemToList('map');

module.exports = scout;