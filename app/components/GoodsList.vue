<template>
    <div class="wrapper">
        <div v-if="!items.isEmpty()">
            <div v-for="item in items.all()" :key="item.id">
                <goods-list-item :item="item"></goods-list-item>
            </div>
        </div>
    </div>
</template>

<script>
    import GoodsListItem from "./GoodsListItem";

    export default {
        components: { GoodsListItem },
        props: ['items']
    }
</script>
