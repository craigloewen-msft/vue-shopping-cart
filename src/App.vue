<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">My Store</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/home">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/features">Features</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/pricing">Pricing</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <div class="container main-page-container">
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
.brand-text {
  margin-left: 5px;
}

.main-page-container {
  margin-top: 50px;
}

.topButtonsRow {
  display: flex;
  justify-content: space-between;
  align-items: top;
}
</style>
