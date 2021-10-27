import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increase: (state) => {
      state.value += 1;
    },
    decrease: (state) => {
      state.value -= 1;
    },
    increaseByInput: (state, action) => {
      state.value += action.payload;
    }
  },
});

export const increaseIfOdd = (amount) => (dispatch, getState) => {
  const currentValue = selectCount(getState());
  if (currentValue % 2 === 1) {
    dispatch(increaseByInput(amount));
  }
};

export const { increase, decrease, increaseByInput } = counterSlice.actions;
export const selectCount = (state) => state.counter.value;

export default counterSlice.reducer;
