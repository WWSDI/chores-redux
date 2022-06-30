import { createAction, createSlice, nanoid } from '@reduxjs/toolkit';

// factory fn for human object
const createHuman = (name) => ({
  id: nanoid(),
  name,
  taskIds: []
});

const initialState = [
  createHuman('Shawn Su'),
  createHuman('Steve Kinny'),
  createHuman('David Church')
];

const humansSlice = createSlice({
  name: 'humans',
  initialState,
  reducers: {
    addHuman: (state, action) => {
      state.push(createHuman(action.payload));
    }
  }
});

export const {
  actions: { addHuman },
  reducer: humansReducer
} = humansSlice;
