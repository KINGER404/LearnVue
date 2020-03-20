window.Vue = require('vue');

const app = new Vue({
    el: "#app",
    data() {
        return {
            show: true,
            formData: {
                firstname: "",
                lastname: "",
                email: "",
                url: "https://www.",
                image: "",
                date: ""
            },

        }
    }

})
