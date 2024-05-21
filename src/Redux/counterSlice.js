import { createSlice } from "@reduxjs/toolkit";
import { json } from "react-router-dom";
export const counterSlice = createSlice({
  name: "counterSlice",
  initialState: {
    isDark: JSON.parse(localStorage.getItem("changeMode2")),
    numProducts:
      (localStorage.getItem("numofitem") &&
        parseInt(localStorage.getItem("numofitem"))) ||
      0,
    buyProduct:
      localStorage.getItem("buyProduct") &&
      JSON.parse(localStorage.getItem("buyProduct")),
    countOfProduct:
      localStorage.getItem("countOfProduct") &&
      JSON.parse(localStorage.getItem("countOfProduct")),
  },
  reducers: {
    handleChangeMode: (state) => {
      state.isDark = !state.isDark;
      localStorage.setItem("changeMode2", state.isDark);
    },
    handleIncreaseProducts: (state, action) => {
      state.numProducts += action.payload;
      localStorage.setItem("numofitem", JSON.stringify(state.numProducts));
    },
    handleAddProduct: (state, action) => {
      state.buyProduct = JSON.parse(localStorage.getItem("buyProduct")) || [];
      state.buyProduct.push(action.payload);
      localStorage.setItem("buyProduct", JSON.stringify(state.buyProduct));
      console.log(state.buyProduct);
    },
    handleAddAmount: (state, action) => {
      state.countOfProduct =
        JSON.parse(localStorage.getItem("countOfProduct")) || [];
      state.countOfProduct.push(action.payload);
      localStorage.setItem(
        "countOfProduct",
        JSON.stringify(state.countOfProduct)
      );
    },
    handleRemoveProduct: (state, action) => {
      const currentBuyProduct =
        JSON.parse(localStorage.getItem("buyProduct")) || [];
      const removeItemIndex = currentBuyProduct.indexOf(action.payload);
        currentBuyProduct.splice(removeItemIndex, 1);
        state.buyProduct = currentBuyProduct;
        localStorage.setItem("buyProduct", JSON.stringify(state.buyProduct));
    
    },
    handleRemoveAmount: (state, action) => {
      const removeAmount = state.countOfProduct.indexOf(action.payload);
      state.countOfProduct.splice(removeAmount, 1);

      localStorage.setItem("countOfProduct", state.countOfProduct);
    },
    handelDecreaseProducts: (state, action) => {
      state.numProducts -= action.payload;
      localStorage.setItem("numofitem", state.numProducts);
    },
  },
});

export const {
  handleChangeMode,
  handleIncreaseProducts,
  handleAddProduct,
  handleRemoveProduct,
  handelDecreaseProducts,
  handleRemoveAmount,
  handleAddAmount,
} = counterSlice.actions;
export default counterSlice.reducer;
