<template>
  <div class="topButtonsRow">
    <a class="nav-link active" href="#">Home</a>
    <h1>My Store</h1>
    <a class="nav-link" href="#">My Cart</a>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <h2>Available Items</h2>
        <div id="storeItems" class="storeItemBox">
          <div v-for="item in availableItems" :key="item.itemName">
            <StoreItem :item="item" v-on:addToCart="addToCart(item)" />
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <StoreCart :items="cartItems" v-on:removeFromCart="removeFromCart" />
      </div>
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
.storeItemBox {
}

.topButtonsRow {
  display: flex;
  justify-content: space-between;
  align-items: top;
}
</style>
