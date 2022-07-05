export default {
  state() {
    return {
      ProductCart: [],
      err: "",
    };
  },
  getters: {
    getProductCart(state) {
      return state.ProductCart;
    },
    getCartError(state) {
      return state.err;
    },
  },
  actions: {
    addProductCart({ commit }, data) {
      commit("setProductCart", data);
    },
    removeProductCart({ commit }, data) {
      commit("setRemoveProduct", data);
    },
  },
  mutations: {
    setProductCart(state, data) {
      if (!state.ProductCart.find((el) => el.id === data.id)) {
        state.ProductCart.push(data);
      } else {
        state.err = "Данный товар уже добавлен в корзину";
        setTimeout(() => {
          state.err = "";
        }, 4000);
      }
    },
    setRemoveProduct(state, data) {
      state.ProductCart = state.ProductCart.filter((el) => {
        console.log(data, el);
        if (el.id !== data) {
          return el;
        }
      });
    },
  },
};
