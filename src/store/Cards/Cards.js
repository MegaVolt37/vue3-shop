export default {
  state() {
    return {
      Products: [
        {
          Images: "@/assets/images/ProductImg.jpg",
          Title: "Пылесос",
          Price: "12500.70",
          Count: 32,
        },
        {
          Images: "@/assets/images/ProductImg.jpg",
          Title: "Телевизор",
          Price: "32500.70",
          Count: 13,
        },
        {
          Images: "@/assets/images/ProductImg.jpg",
          Title: "Микроволновка",
          Price: "2500",
          Count: 11,
        },
        {
          Images: "@/assets/images/ProductImg.jpg",
          Title: "Гарнитур",
          Price: "22500.50",
          Count: 3,
        },
        {
          Images: "@/assets/images/ProductImg.jpg",
          Title: "Холодильник",
          Price: "15500.40",
          Count: 5,
        },
      ],
    };
  },
  getters: {
    getProducts(state) {
      return state.Products;
    },
  },
};
