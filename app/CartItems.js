import CartItem from "./CartItem";
import Items from "./Items";

class CartItems extends Items {

    constructor() {
        super();
        this.items = []
    }

    push(item) {
        this.items.push(new CartItem(item))
    }

    deleteById(id) {
        this.items = this.items.filter(item => item.id !== id)
    }

    incrementById(id) {
        let item = this.findById(id)

        if (! item || item.stock <= 0) {
            return false;
        }

        item.incrementQty();
        item.decrementStock();
    }

    decrementById(id) {
        let item = this.findById(id)

        if (! item || item.qty <= 0) {
            return false;
        }

        item.decrementQty();
        item.incrementStock();
    }

    count() {
        let count = 0;

        this.items.forEach(item => count += Number.parseInt(item.qty))

        return count;
    }

    price() {
        let price = 0;

        this.items.forEach(item => price += item.price * Number.parseInt(item.qty))

        return price;
    }
}

export default CartItems;
