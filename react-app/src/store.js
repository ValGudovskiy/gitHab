import { configureStore } from "@reduxjs/toolkit";
 import cartReducer from "./reducer/cart-reducer";

import likeReducer from "./reducer/like-reducer";
import colorReducer from "./reducer/color-reducer";
import configReducer from "./reducer/config-reducer";
import authUserReducer from './reducer/authUser-reducer'
// let count = 0;

// Это и есть middleware
const logger = (store) => (next) => (action) => {
  // count++;

  // console.log("action", action);
  // count++;
  // Функция next применяет действие к хранилищу
  // и возвращает новое состояние хранилища
  let result = next(action);
  // Выводим в консоль новое состояние
  
  
  // console.log("next state", store.getState());
  
  localStorage.setItem("allStore", JSON.stringify(store.getState()));
  return result;
};

export const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    cart: cartReducer,
    like: likeReducer,
    colorProduct: colorReducer,
    configProduct: configReducer,
  },

  // Подключаем middleware ко всем хранилищу
  // Он будет работать для ВСЕХ действий сразу!
  middleware: [logger],
});
 