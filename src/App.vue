<template>
  <h1>My Store</h1>
  <StoreCart :items="cartItems" v-on:removeFromCart="removeFromCart" />
  <div id="storeItems">
    <div v-for="item in availableItems" :key="item.itemName">
      <StoreItem :item="item" v-on:addToCart="addToCart(item)" />
    </div>
  </div>
</template>

<script>
import StoreItem from "./components/StoreItem.vue";
import StoreCart from "./components/StoreCart.vue";

export default {
  name: "App",
  data: function () {
    return {
      availableItems: [
        { name: "Penguin Statue", price: 4 },
        { name: "Windows Sticker", price: 3.5 },
        { name: "Azure Mug", price: 5 },
      ],
      cartItems: [],
    };
  },
  components: {
    StoreItem,
    StoreCart,
  },
  methods: {
    addToCart: function (item) {
      this.cartItems.push(item);
    },
    removeFromCart: function (itemIndex) {
      this.cartItems.splice(itemIndex, 1);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
