<template>
    <div class="list">
        Testestest {{this.orderId}} {{getCurrentRoute()}}
    </div>
</template>

<script>
import state from './store'
    export default {
        data() {
            return {
                orderId: this.$route.params['id'],
            }
        }, methods: {
            getCurrentRoute() {
                return this.$route.path.split('/').length > 1 ? this.$route.path.split('/')[1] : 'home';
            }
        },
        mounted() {
            state.set('/orders')
        }
    }
</script>