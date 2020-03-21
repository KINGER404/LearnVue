<template>
    <div class="wrapper">
    <div class="header">
    <div class="header_shopbasket">
        <div class="header_shopbasket__icon">
            Корзина:
        </div>
        <div class="header_shopbasket__counter">
            {{ addedGoodsCount }} / {{ addedGoodsTotalPrice }} руб
        </div>
    </div>
    </div>
    <div class="app_main">
        <div class="app_goods">
            <div v-for="someGood in someGoods" :key="someGood.id">
                {{ someGood.name }}
                <br>
                {{ someGood.category }}
                <br>
                {{ someGood.price }}
                <br>
                {{ someGood.stock }}
                <br>
                {{ someGood.description }}
                <button @click="addGood(someGood)" class="add_goodsbutton">Добавить товар</button>
            </div>
        </div>
        <navbar></navbar>

        <div class="cart">
            <div class="cart__title"></div>
            <div class="cart__goodsList">
                <div class="cart__goodItem" v-for="addedGood in addedGoods" :key="addedGood.id">
                    <p>{{ addedGood.name }}</p>
                    <input type="number" v-model="addedGood.qty" min="0" max="10">
                    <button @click="deleteGood(addedGood.id)" class="add_goodsbutton">Удалить</button>
                </div>
                <button @click="deleteAllGoods()" class="add_goodsbutton">Удалить всё</button>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
    import Navbar from "./Navbar"

    export default {
        name: "App",
        components: {Navbar},
        data() {
            return {
                someGoods: [
                    {id: 1, name: 'First', price: 103.2, stock: 32, category: 'Jeans', description: 'У этих модулей нет никакой косметики, используются только для позиционирования компонентов c- и для построения макета приложения.\n'},
                    {id: 2, name: 'Two', price: 1013.1, stock: 7, category: 'T-shirts', description: 'Эти классы имеют одну функцию, часто используют !important для повышения их специфичности. (В основном используются для позиционирования или видимости.)'},
                    {id: 3, name: 'Three', price: 5035.2, stock: 2, category: 'Coats', description: 'Показывают различные состояния, которые могут быть у компонентов c-. Более детальное описание можно найти ниже в 6 проблеме.'}
                ],
                addedGoods: []
            }
        },
        computed: {
            addedGoodsTotalPrice() {
                let price = 0;

                this.addedGoods.forEach(addedGood => price += addedGood.price * Number.parseInt(addedGood.qty))

                return price;
            },
            addedGoodsCount() {
                let count = 0;

                this.addedGoods.forEach(good => count += Number.parseInt(good.qty))

                return count;
            }
        },
        methods: {
            findAddedGoodById(addedGoodId) {
                return this.addedGoods.find(addedGood => addedGood.id === addedGoodId);
            },
            addGood(good) {
                let addedGood = this.findAddedGoodById(good.id);

                if (addedGood) {
                    addedGood.qty += 1;
                } else {
                    this.addedGoods.push({
                        id: good.id,
                        qty: 1,
                        name: good.name,
                        price: good.price,
                        stock: good.stock,
                        category:good.category,
                        description: good.description

                    })
                }
            },
            deleteGood(addedGoodId) {
                this.addedGoods = this.addedGoods.filter(good => good.id !== addedGoodId)
            },
            deleteAllGoods() {
                this.addedGoods = [];
            }
        }
    }
</script>

<style scoped>
    .wrapper {
        margin: 0;
        padding: 0;
    }
    .header {
        display: flex;
        justify-content: flex-end;
        align-content: center;
        height: 64px;
        background-color: #7f9cf5;
    }
    .header_shopbasket {
        font-size: 20px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 200px;
    }
    .header_shopbasket__icon {
        display: flex;
    }
    .app_main {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .app_goods {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 50%;
        height: 400px;
        background-color: #4299e1;
    }

    .cart {
        display: flex;
        background-color: greenyellow;
        width: 50%;
    }
    .cart__goodItem {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>
