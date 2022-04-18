<template>
  <div>
    <h1>My Cart</h1>
    <div v-for="(item, itemIndex) in items" :key="itemIndex">
      {{ item.name }}, {{ item.price }}
      <button v-on:click="removeFromCart(itemIndex)">Remove</button>
    </div>
    <div v-if="items.length > 0">Sum: {{ sum }}</div>
  </div>
</template>

<script>
export default {
  name: "StoreCart",
  emits: ["removeFromCart"],
  props: {
    items: Array,
  },
  methods: {
    removeFromCart: function (itemIndex) {
      this.$emit("removeFromCart", itemIndex);
    },
  },
  computed: {
    sum: function () {
      let sum = 0;

      for (let i = 0; i < this.items.length; i++) {
        sum = sum + this.items[i].price;
      }

      return sum;
    },
  },
};
</script>

<style>
</style>
