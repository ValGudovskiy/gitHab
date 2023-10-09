import { createSlice } from "@reduxjs/toolkit";


export const configSlice = createSlice({
  name: "config",
  initialState: { config: null,  },
  reducers: {
    addConfigProduct: (prevState, action) => {
      //   console.log("reducer", action);

      return {
        // Внутри action.payload информация о добавленномтоваре
        config: action.payload.id,
      };
    },
  },
});
export const { addConfigProduct } = configSlice.actions;

export default configSlice.reducer;
