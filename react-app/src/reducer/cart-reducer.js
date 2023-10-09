import { createSlice } from "@reduxjs/toolkit";
const noteLocalStorage = JSON.parse(localStorage.getItem("allStore"));

export const cartSlice = createSlice({
  name: "cart",
  // Начальное состояние хранилища, товаров нет
  initialState: { products: !noteLocalStorage ? [] : noteLocalStorage.cart.products },
  // Все доступные метода
  reducers: {
    // Добавить товар, первый параметр это текущеесостояние// А второй параметр имеет данные для действия
    addProduct: (prevState, action) => {
      let product = action.payload;
      //усдовие добавления
      const hasInCart = prevState.products.some(
        (prevProduct) => prevProduct.id === product.id
      );
      if (hasInCart) {
        return prevState;
      }
      return {
        ...prevState,
        // Внутри action.payload информация о добавленномтоваре
        // Возвращаем новый массив товаров вместе сдобавленным
        products: [...prevState.products, product],
      };
    },
    //удалить товар
    removeProduct: (prevState, action) => {
      const product = action.payload;
      return {
        ...prevState,
        products: prevState.products.filter((prevProduct) => {
          return prevProduct.id !== product.id;
        }),
      };
    },
  },
});
 // возврат addProduct
export const { addProduct, removeProduct } = cartSlice.actions;
// И сам редуктор тоже
export default cartSlice.reducer;
