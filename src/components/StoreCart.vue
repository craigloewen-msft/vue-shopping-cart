<template>
  <div>
    <h1>My Cart</h1>
    <div id="cart">
      <div v-for="(item, itemIndex) in items" :key="itemIndex">
        <div class="cartItemInfo">
          <p>{{ item.name }}</p>
          <p>{{ item.price }}</p>
        </div>
        <button v-on:click="removeFromCart(itemIndex)">Remove</button>
      </div>
    </div>
    <div v-if="items.length > 0" id="cartSum">
      <p>Sum: </p>
        <p>{{ sum }}</p></div>
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
.cartItemInfo {
  display: flex;
  justify-content: center;
}

.cartItemInfo p {
  margin-right: 10px;
}

#cartSum {
  display: flex;
  justify-content: center;
}

#cartSum p {
  margin-right: 10px;
}
</style>
