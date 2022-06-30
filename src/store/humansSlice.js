import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const humansSlice = createSlice({
  name: 'humans',
  initialState,
  reducers: {
    addHuman: (state, action) => {
      state.push(action.payload);
    }
  }
});

export const {
  actions: { addHuman },
  reducer: humansReducer
} = humansSlice;
