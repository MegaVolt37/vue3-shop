<template>
  <div class="products">
    <div class="container">
      <div class="products__header">
        <h1>Витрина товаров</h1>
        <div class="products__header-cart" @click="goToCart">
          Корзина <span>{{ getProductCart.length }}</span>
        </div>
      </div>
      <div class="products__items">
        <ProductItem
          v-for="(Product, index) in getProducts"
          :key="index"
          :Product="Product"
          :index="index"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ProductItem from "../components/Products/ProductItem.vue";
export default {
  name: "HomeProducts",
  components: {
    ProductItem,
  },
  computed: {
    ...mapGetters(["getProducts", "getProductCart"]),
  },
  methods: {
    goToCart() {
      this.$router.push("/cart");
    },
  },
};
</script>
<style lang="scss">
.products {
  .products__header {
    margin-top: 70px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
    &-cart {
      cursor: pointer;
    }
  }
  .products__items {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
