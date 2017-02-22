import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

function load(component) {
  return () => System.import(`components/${component}.vue`)
}

export default new VueRouter({
  routes: [
    {
      path: '/', component: load('Index'), children: [
        { path: '/home', component: load('Home')},
        { path: '/orders', component: load('Orders')},
        { path: '/order/:id', component: load('Order')},
        { path: '/customers', component: load('Customers')}
      ]
    },
    { path: '*', component: load('Error404') }, // Not found
  ]
})
