<template>
    <div class="good">
        <div class="good__title">{{ item.name }}</div>
        <div class="good__description">{{ item.description }}</div>
        <div class="good_detail">
            <div class="good_detail__product">
                <div class="good_detail_product__price">{{ item.price }}</div>
                <div class="good_detail_product__stock">{{ item.stock }}</div>
                <div class="good_detail_product__btn-add-to-bag">
                    <button @click="addToCart(item)" :disabled="!isPositiveStock" :class="{'btn-disabled': !isPositiveStock}">Добавить в корзину</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['item'],
        computed: {
            isPositiveStock() {
                return this.item.isPositiveStock();
            }
        },
        methods: {
            addToCart(item) {
                this.$store.commit('cart/add', item)
                this.$store.commit('catalog/decrementStockById', item.id)
            }
        }
    }
</script>

<style scoped>

</style>
