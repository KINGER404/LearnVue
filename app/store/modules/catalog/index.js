import CatalogItems from "../../../CatalogItems";

const catalog = {
    namespaced: true,
    state: {
        items: new CatalogItems([
            {id: 1, name: 'First', price: 103.2, stock: 32, category: 'Jeans', description: 'У этих модулей нет никакой косметики, используются только для позиционирования компонентов c- и для построения макета приложения.\n'},
            {id: 2, name: 'Two', price: 1013.1, stock: 7, category: 'T-shirts', description: 'Эти классы имеют одну функцию, часто используют !important для повышения их специфичности. (В основном используются для позиционирования или видимости.)'},
            {id: 3, name: 'Three', price: 5035.2, stock: 2, category: 'Coats', description: 'Показывают различные состояния, которые могут быть у компонентов c-. Более детальное описание можно найти ниже в 6 проблеме.'}
        ])
    },
    getters: {
        items: state => state.items
    },
    mutations: {
        decrementStockById(state, id) {
            state.items.decrementStockById(id);
        },
        incrementStockById(state, id) {
            state.items.incrementStockById(id);
        }
    }
}

export default catalog
