<template>
        <button class="shopbasket header__shopbasket">
            <router-link to="/cart" class="shopbasket">Корзина:</router-link>
            <div class="shopbasket__counter">{{ itemsCount }} / {{ totalPrice }} руб</div>
    </button>
</template>

<script>
    import { mapGetters } from "vuex"

    export default {
        computed: {
            ...mapGetters('cart', ['itemsCount', 'totalPrice'])
        }
    }
</script>

<style scoped>
    .header__shopbasket {
        width: 20%;
        background-color: dodgerblue;
    }

</style>
