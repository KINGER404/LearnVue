
class CatalogItem {
    /**
     * @param item
     */
    constructor(item) {
        this.id = item.id
        this.name = item.name
        this.price = item.price
        this.description = item.description
        this.category = item.category
        this.stock = item.stock
    }

    isPositiveStock() {
        return this.stock !== 0
    }
}

export default CatalogItem;

