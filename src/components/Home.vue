<template>
    <div>
        test
    </div>
</template>
<script>
    import store from './store'

    export default {
        data() {
            return {

            }
        },
        mounted() {
          store.set('') 
        }
    }
</script>