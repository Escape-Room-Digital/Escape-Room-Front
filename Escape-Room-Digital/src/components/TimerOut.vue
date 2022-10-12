
<script>
export default {

    data() {
        return {
            timerCount: 900
        }
    },

    watch: {

        timerCount: {
            handler(value) {

                if (value > 0) {
                    setTimeout(() => {
                        this.timerCount--;
                    }, 1000);
                }

            },
            immediate: true // This ensures the watcher is triggered upon creation
        }

    }
}
</script>


<template>
  

    <v-alert dense elevation="10" outlined shaped class="text-center" max-width="200px">
        <h6>Cuenta regresiva</h6>
        <p>{{ timerCount }}</p>
    </v-alert>
</template>


<style scoped>

p{
    color:#FF4702;
    font-size: 1.8rem;
    font-weight: 700;
}

h6{
    height: 100%;
    background-color:#FF4702;
    color: black;
    font-style: italic;
}

</style>