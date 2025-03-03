import { configureStore } from '@reduxjs/toolkit';
import { tasksSlice } from './tasksSlice';
import { humansReducer } from './humansSlice';

export const store = configureStore({
  reducer: {
    tasks: tasksSlice.reducer,
    humans: humansReducer
  }
});
