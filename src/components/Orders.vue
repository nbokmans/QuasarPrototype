<template>
    <div class="list">
        <div v-for="(item, index) in items" class="item">
            <i class="item-primary">lightbulb_outline</i>
            <div class="item-content has-secondary">
                <router-link :to="{ path: 'order/'+item.id }">
                    <div>{{item.orderName}}</div>
                </router-link>
            </div>
            <div class="item-secondary">
                <i slot="target">
               more_vert
               <q-popover  :ref="'popover'">
                  <div class="list">
                     <div class="item item-link" @click="deleteItem(item, index)">
                        <div class="item-content">Delete</div>
                     </div>
                  </div>
               </q-popover>
            </i>
            </div>
        </div>
    </div>
</template>
<script>
import store from './store'
    export default {
        data() {
            return {
                items: [
                    { orderName: 'Order 1 (22-02-2017 12:45)', id: 1 },
                    { orderName: 'Order 2 (22-02-2017 12:45)', id: 2 }
                ]
            }
        },
        methods: {
            addOrder() {
                var date = new Date();
                this.items.push("Order " + date.getDate() + "-"
                    + (date.getMonth()) + "-"
                    + date.getFullYear() + " @ "
                    + date.getHours() + ":"
                    + date.getMinutes() + ":"
                    + date.getSeconds());
            },
            deleteItem(item, index) {
                this.$refs.popover[0].close(index);
                var index = this.items.indexOf(item);
                this.items.splice(index, 1);
            }
        },
        mounted() {
            store.set('')
        }

    }
</script>