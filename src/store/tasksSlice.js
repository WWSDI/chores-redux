import { createSlice, nanoid } from '@reduxjs/toolkit';

const createTask = (title) => ({
  id: nanoid(),
  title,
  completed: false,
  assignedTo: ''
});

const initialState = [
  createTask('order more food ingredient'),
  createTask('feed the cats')
];

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  addTask: (state, action) => {
    state.push(createTask(action.payload));
  }
});
