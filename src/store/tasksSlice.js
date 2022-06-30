import { createAction, createSlice, nanoid } from '@reduxjs/toolkit';

// factory fn for task object
const createTask = (title) => ({
  id: nanoid(),
  title,
  completed: false,
  assignedTo: ''
});

const initialState = [
  createTask('order more food ingredients'),
  createTask('feed echo and poppy')
];

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.push(createTask(action.payload));
    },
    toggleCompleted: (state, action) => {
      const task = state.find((task) => task.id === action.payload.id);
      task.completed = action.payload.completed;
    },
    assignedToUser: (state, action) => {
      const task = state.find((task) => task.id === action.payload.taskId);
      task.assignedTo = action.payload.humanId;
    }
  }
});

export const toggleCompleted = createAction(
  'tasks/toggleCompleted',
  (id, completed) => ({
    payload: { id, completed }
  })
);

export const assignedToUser = createAction(
  'tasks/assignedToUser',
  (taskId, humanId) => ({
    payload: { taskId, humanId }
  })
);
