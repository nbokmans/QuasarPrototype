<template>
    <div class="list">
        Testestest {{this.orderId}} {{getCurrentRoute()}}
    </div>
</template>

<script>
    export default {
        data() {
            return {
                orderId: this.$route.params['id'],
            }
        }, methods: {
            getCurrentRoute() {
                return this.$route.path.split('/').length > 1 ? this.$route.path.split('/')[1] : 'home';
            }
        }
    }
</script>