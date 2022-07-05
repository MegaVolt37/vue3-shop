<template>
  <div class="cart">
    <h1>Корзина</h1>
    <div class="container" v-if="getProductCart.length > 0">
      <CartItem
        v-for="(Product, index) in getProductCart"
        :key="index"
        :Product="Product"
        :index="index"
      />
    </div>
    <div class="container" v-else><h2>Нет товаров</h2></div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CartItem from "../components/Cart/CartItem.vue";
export default {
  name: "CartProduct",
  components: {
    CartItem,
  },
  computed: {
    ...mapGetters(["getProductCart"]),
  },
};
</script>
<style lang="scss">
.cart {
  h1 {
    margin-top: 70px;
  }
  .container {
    margin-top: 70px;
  }
  h2 {
    text-align: left;
  }
}
</style>
