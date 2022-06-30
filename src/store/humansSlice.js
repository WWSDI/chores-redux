import { createSlice, nanoid } from '@reduxjs/toolkit';
import { tasksSlice } from './tasksSlice';

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
  },
  extraReducers: (builder) => {
    builder.addCase(tasksSlice.actions.assignedToUser, (state, action) => {
      // one task can only be assigned to one human
      for (let human of state) {
        if (human.id === action.payload.humanId) {
          human.taskIds.push(action.payload.taskId);
        } else {
          human.taskIds = human.taskIds.filter(
            (id) => id !== action.payload.taskId
          );
        }
      }
    });
  }
});

export const {
  actions: { addHuman },
  reducer: humansReducer
} = humansSlice;
