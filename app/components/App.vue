<template>
    <div class="wrapper">
        <navbar></navbar>
        <router-view></router-view>
    </div>
</template>

<script>
    import Navbar from "./Navbar"

    export default {
        name: "App",
        components: {
            Navbar
        }
    }
</script>
