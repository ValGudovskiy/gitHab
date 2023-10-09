import { createSlice } from "@reduxjs/toolkit";
const noteLocalStorage = JSON.parse(localStorage.getItem("allStore"));


function userStatus(arr1, Obj, arr2) {
  let indexUser = "";
  let userStatus = false;
  let ress = {};
  const adminStatus = arr2.some((el, index) => {
    indexUser = index;
    return el.login === Obj.login && el.password === Obj.password;
  });

  if (adminStatus) {
    userStatus = adminStatus;
  } else {
    userStatus = arr1.some((el, index) => {
      indexUser = index;
      return el.login === Obj.login && el.password === Obj.password;
    });
  }
  ress = !adminStatus ? arr1[indexUser] : adminStatus ? arr2[indexUser] : {};

  return { ...ress, userStatus, adminStatus };
}
let arrDataUsers = [
  {
    login: "user",
    name: "user",
    phone: "+7-000-000-00-01",
    emaile: "user",
    address: "user",
    avatar: "",
    password: "user",
  },
];
let arrDataAdmin = [
  {
    login: "admin",
    name: "admin",
    phone: "+7-000-000-00-00",
    emaile: "admin",
    address: "admin",
    avatar: "",
    password: "admin",
  },
];


export const userSlice = createSlice({
  name: "authUser",
  // Начальное состояние хранилища, товаров нет
  initialState: !noteLocalStorage?.authUser ? {} : noteLocalStorage.authUser,
  // Все доступные методы
  reducers: {
    // Добавить товар, первый параметр это текущеесостояние// А второй параметр имеет данные для действия
    addUser: (prevState, action) => {
      return {
        login: action.payload.login ?? null,
        name: action.payload.name ?? null,
        phone: action.payload.phone ?? null,
        userStatus: false,
        adminStatus: false,
        password: action.payload.password ?? null,
        ...userStatus(arrDataUsers, action.payload, arrDataAdmin),
      };
    },
    //удалить товар
    removeUser: (prevState, action) => {
      return {
        login: action.payload.login ?? null,
        name: action.payload.name ?? null,
        phone: action.payload.phone ?? null,
        userStatus: false,
        adminStatus: false,
        password: action.payload.password ?? null,
        ...action.payload,
      };
    },
  },
});
// возврат addProduct
export const { addUser, removeUser } = userSlice.actions;
// И сам редуктор тоже
export default userSlice.reducer;
