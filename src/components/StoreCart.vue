<template>
  <div>
    <h1>My Cart</h1>
    <div id="cart">
      <div class="card" v-for="(item, itemIndex) in items" :key="itemIndex">
        <div class="cartItemInfo card-body">
          <h5 class="card-title">{{ item.name }}</h5>
          <div class="price-display">
            <h6 class="card-subtitle mb-2 text-muted">$</h6>
            <h6 class="card-subtitle mb-2 text-muted item-price">{{ item.price }}</h6>
          </div>
          <button
            class="btn btn-secondary"
            v-on:click="removeFromCart(itemIndex)"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
    <div v-if="items.length > 0" id="cartSum">
      <h4>Sum:</h4>
      <h4>{{ sum }}</h4>
    </div>
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
}

.price-display {
  display: flex;
}

#cartSum h4 {
  margin-left: 10px;
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
