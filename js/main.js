const { createApp } = Vue

createApp({
    data() {
        return {
            message: "Tu non puoi passare!",
            image: "img/gandalf.jpg"
        }
    }
}).mount('#app')