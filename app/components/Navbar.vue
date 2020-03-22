<template>
    <div class="header">
        <div class="header__logo">Maгазин</div>
        <div class="shopbasket header__shopbasket">
            <router-link to="/cart" class="shopbasket">Корзина:</router-link>
            <div class="shopbasket__counter">{{ itemsCount }} / {{ totalPrice }} руб</div>
        </div>
    </div>
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
    .header {
        width: 100%;
        height: 100px;
        background-color: beige;
    }
    .header__logo {
        width: 20%;
        background-color: blanchedalmond;
    }
    .header__items {
        width: 60%;
        background-color: dodgerblue;
    }
    .header__shopbasket {
        width: 20%;
        background-color: dodgerblue;
    }

</style>
