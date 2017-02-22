<template>
  <q-layout>
    <!-- Header -->
    <div slot="header" class="toolbar">
      <q-toolbar-title :padding="1">
        <div class="centeredText">
          MyNotion
        </div>
      </q-toolbar-title>

    </div>
    <!-- Navigation Tabs -->
    <q-tabs :refs="$refs" default-tab="home" slot="navigation">
      <q-tab name="home" route="/home" exact replace>Home</q-tab>
      <q-tab route="/orders" exact replace>Orders</q-tab>
      <q-tab route="/customers" exact replace>Klanten</q-tab>
    </q-tabs>
    <router-view class="layout-view"></router-view>
    <!-- Footer -->
    <div slot="footer" class="toolbar">
      {{getCurrentRoute()}}
    </div>
  </q-layout>
</template>
<script>
  export default {
    data() {
      return {
        route:''
      }
    },
    methods: {
      getCurrentRoute() {
        return this.$route.path.split('/').length > 1 && this.$route.path.split('/')[1] !== '' ? this.$route.path.split('/')[1] : 'home';
      }
    }
  }
</script>