import CatalogItem from "./CatalogItem";

class CartItem extends CatalogItem {
    /**
     * @param item
     */
    constructor(item) {
        super(item);

        this.qty = 1;
        this.stock = this.stock - 1
    }

    incrementQty() {
        this.qty += 1;
    }

    decrementQty() {
        this.qty -= 1;
    }

    incrementStock() {
        this.stock += 1;
    }

    decrementStock() {
        this.stock -= 1;
    }
}

export default CartItem;
