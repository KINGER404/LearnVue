import CatalogItem from "./CatalogItem";
import Items from "./Items";

class CatalogItems extends Items {
    /**
     * @param items
     */
    constructor(items) {
        super();
        this.items = items.map(item => new CatalogItem(item))
    }

    decrementStockById(id) {
        let item = this.findById(id);

        if (! item || item.stock === 0) {
            return false;
        }

        item.stock -= 1;
    }

    incrementStockById(id) {
        let item = this.findById(id);

        if ( item || item.stock <= item.qty) {
            return false;
        }

        item.stock += 1;
    }
}

export default CatalogItems;

