<template>
    <div class="app_main">
        <div class="cart">
            <div class="cart__title"></div>
            <div class="cart__goodsList" v-if="!items.isEmpty()">
                <div class="cart__goodItem" v-for="item in items.all()" :key="item.id">
                    <p>{{ item.name }}</p>
                    <div>
                        <button @click="addToCart(item)">+</button>
                        <div class="counter">{{ item.qty }}</div>
                        <button @click="deleteFromCart(item)">-</button>
                    </div>
                    <button @click="deleteById(item.id)" class="add_goodsbutton">Удалить</button>
                </div>
                <button @click="clear()" class="add_goodsbutton">Удалить всё</button>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState, mapMutations} from "vuex"
    export default {
        computed: {
            ...mapState('cart', ['itemsCount', 'totalPrice', 'items'])
        },
        methods: {
            ...mapMutations('cart', ['deleteById', 'clear']),

            deleteFromCart(item) {
                this.$store.commit('cart/decrementItemById', item.id)
            },

            addToCart(item) {
                this.$store.commit('cart/incrementItemById', item.id)
            }
        }
    }
</script>
