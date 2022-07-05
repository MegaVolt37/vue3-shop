<template>
  <div class="product__item">
    <img
      class="product__item-img"
      src="@/assets/images/ProductImg.jpg"
      alt="Planet"
    />
    <p class="product__item-title">{{ Product.Title }}</p>
    <div class="product__item-price">
      <p>Цена</p>
      <span>{{ Price ? Price.toFixed(2) : Product.Price }}</span>
    </div>
    <div class="product__item-count">
      <p>Количество</p>
      <span>{{ Product.Count }}</span>
    </div>
    <div class="product__item-choiser">
      <span class="choiser-remove" @click="removeCount">-</span>
      <div class="choiser-value">{{ count }}</div>
      <span class="choiser-add" @click="addCount">+</span>
    </div>
    <button
      class="product__item-btn"
      v-if="!addedToCart"
      @click="addProductCart"
    >
      Добавить в корзину
    </button>
    <button class="product__item-btn" v-else @click="goToCart">
      Товар добавлен.<br />Перейти в корзину
    </button>
  </div>
  <div class="error" v-if="getCartError">{{ getCartError }}</div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "ProductItem",
  data() {
    return {
      count: 1,
      addedToCart: false,
      Price: "",
    };
  },
  computed: {
    ...mapGetters(["getCartError", "getProductCart"]),
    price() {
      return this.Product.Price;
    },
  },
  watch: {
    count(value) {
      if (value) {
        this.Price = parseFloat(this.Product.Price).toFixed(2) * Number(value);
      }
    },
  },
  props: { Product: Object, index: Number },
  methods: {
    goToCart() {
      this.$router.push("/cart");
    },
    removeCount() {
      if (this.count > 1) {
        this.count = this.count - 1;
      }
    },
    addCount() {
      if (this.count != this.Product.Count) {
        this.count = this.count + 1;
      }
    },
    addProductCart() {
      const Data = {
        count: this.count,
        title: this.Product.Title,
        price: this.Price ? this.Price : this.Product.Price,
        id: this.index,
      };
      this.$store.dispatch("addProductCart", Data);
      this.addedToCart = true;
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
.product__item {
  max-width: 300px;
  display: grid;
  padding: 20px;
  border: 1px solid #000;
  gap: 10px;
  &-img {
    max-width: 100%;
    border-radius: 6px;
    grid-column: 1/3;
  }
  &-title {
    grid-column: 1/3;
  }
  &-price {
    grid-column: 1;
  }
  &-count {
    grid-column: 2;
    grid-row: 3;
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
