<template>
    <div class="header">
        <div class="header__logo">Maгазин</div>
        <div class="shopbasket header__shopbasket">
            <div class="shopbasket">Корзина:</div>
            <div class="shopbasket__counter">1</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Navbar"
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