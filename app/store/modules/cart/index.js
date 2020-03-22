import CartItems from "../../../CartItems";

const cart = {
    namespaced: true,
    state: {
        items: new CartItems(),
    },
    getters: {
        itemsCount: (state) => {
            return state.items.count()
        },
        totalPrice: (state) => {
            return state.items.price()
        }
    },
    mutations: {
        clear(state) {
            state.items = new CartItems()
        },

        deleteById(state, id) {
            state.items.deleteById(id)
        },

        add(state, itemToAdd) {
            let item = state.items.findById(itemToAdd.id);

            if (item) {
                if (item.stock === 0) {
                    return false;
                }

                this.commit('cart/incrementItemById', item.id)
            } else {
                state.items.push(itemToAdd)
            }
        },

        incrementItemById(state, id) {
            state.items.incrementById(id);
        },

        decrementItemById(state, id) {
            state.items.decrementById(id);
        }
    }
};

export default cart;
