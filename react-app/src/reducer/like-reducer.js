import { createSlice } from "@reduxjs/toolkit";

const noteLocalStorage = JSON.parse(localStorage.getItem("allStore"));

export const likeSlice = createSlice({
  name: "like",
  // Начальное состояние хранилища, товаров нет

  initialState: {
    products: !noteLocalStorage ? [] : noteLocalStorage.like.products,
  },

  // Все доступные метода
  reducers: {
    // Добавить товар, первый параметр это текущеесостояние
    // А второй параметр имеет данные для действия

    addLikeProduct: (prevState, action) => {
      return {
        ...prevState,
        // Внутри action.payload информация о добавленномтоваре
        // Возвращаем новый массив товаров вместе сдобавленным
        products: [...prevState.products, action.payload],
      };
    },
    removeLikeProduct: (prevState, action) => {
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

export const { addLikeProduct, removeLikeProduct } = likeSlice.actions;

export default likeSlice.reducer;
