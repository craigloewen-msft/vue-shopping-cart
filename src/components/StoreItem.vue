<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">{{ item.name }}</h5>
      <div class="price-display">
        <h6 class="card-subtitle mb-2 text-muted">$</h6>
        <h6 class="card-subtitle mb-2 text-muted item-price">{{ item.price }}</h6>
      </div>
      <button class="btn btn-primary" v-on:click="addToCart">
        Add to Cart
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "StoreItem",
  props: ["item"],
  emits: ["addToCart"],
  methods: {
    addToCart: function () {
      this.$emit("addToCart");
    },
  },
};
</script>

<style>
.price-display {
  display: flex;
}
</style>
