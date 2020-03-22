<template>
    <div>
        <goods-list :items="items"></goods-list>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import GoodsList from "./GoodsList"

    export default {
        components: {
            GoodsList
        },
        computed: {
            ...mapGetters('catalog', ['items'])
        }
    }
</script>
