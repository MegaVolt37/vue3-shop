<template>
  <div class="cart__item">
    <p class="cart__item-title">{{ Product.Title }}</p>
    <div class="cart__item-price">
      <p>Цена</p>
      <span>{{ PriceProduct }}</span>
    </div>
    <div class="cart__item-count">
      <p>Количество</p>
      <span>{{ Product.count }}</span>
    </div>
    <div class="cart__item-btn" @click="removeProduct">Удалить товар</div>
  </div>
  <div class="error" v-if="getCartError">{{ getCartError }}</div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "CartItem",
  data() {
    return {
      count: 1,
      addedToCart: false,
    };
  },
  computed: {
    ...mapGetters(["getCartError", "getProductCart"]),
    PriceProduct() {
      return parseFloat(this.Product.price).toFixed(2);
    },
  },
  watch: {},
  props: { Product: Object, index: Number },
  methods: {
    removeProduct() {
      this.$store.dispatch("removeProductCart", this.Product.id);
    },
  },
};
</script>
<style lang="scss">
.error {
  position: fixed;
  max-width: 500px;
  border: 1px solid #000;
  padding: 20px;
  top: 50%;
  transform: translateY(-50%) translateX(-50%);
  left: 50%;
  border-radius: 6px;
  background-color: #fff;
  z-index: 1;
}
.cart__item {
  display: flex;
  padding: 20px;
  border: 1px solid #000;
  gap: 10px;
  &-title {
  }
  &-price {
  }
  &-count {
  }
  &-choiser {
    display: flex;
    align-items: baseline;
    gap: 5px;
  }
  &-btn {
    grid-column: 1/3;
    border: none;
    padding: 5px 10px;
    background-color: rgb(122, 160, 100);
    border-radius: 6px;
    cursor: pointer;
  }
  .choiser-value {
    border: 1px solid #000;
    padding: 5px 20px;
  }
  .choiser-remove {
    cursor: pointer;
    font-size: 20px;
    height: max-content;
  }
  .choiser-add {
    cursor: pointer;
    font-size: 20px;
    height: max-content;
  }
}
</style>
