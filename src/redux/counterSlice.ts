import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface CouterState {
  count: number;
}

const initialState: CouterState = {
  count: 0
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.count += action.payload;
    },
    reset: (state) => {
      state.count = 0;
    }
  }
});

export const {
  increment,
  decrement,
  incrementByAmount,
  reset
} = counterSlice.actions;
// export const selectCount = (state: RootState) => state.counter.count;
export default counterSlice.reducer;
