
class Items {
    findById(id) {
        return this.items.find(item => item.id === id);
    }

    all() {
        return this.items
    }

    isEmpty() {
        return this.items.length <= 0;
    }
}

export default Items;
