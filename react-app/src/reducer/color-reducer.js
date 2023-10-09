import { createSlice } from "@reduxjs/toolkit";


export const colorSlice = createSlice({
  name: "color",
  initialState: { color: null, colorTr: null, },
  reducers: {
    addColorProduct: (prevState, action) => {
      //   console.log("reducer", action);

      return {
        // Внутри action.payload информация о добавленномтоваре
        color: action.payload.id,
        colorTr: action.payload.idTr,
      };
    },
  },
});
export const { addColorProduct } = colorSlice.actions;

export default colorSlice.reducer;
