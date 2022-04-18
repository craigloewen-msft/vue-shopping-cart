<template>
  <h3>Name: {{ item.name }} , Price: {{ item.price }}</h3>
  <button v-on:click="addToCart">Add to Cart</button>
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
</style>
