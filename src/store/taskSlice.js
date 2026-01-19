import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    list: [],
    loading: false,
  },
  reducers: {
    addTask: (state, action) => {
      console.log(action.payload, "data>>>>>>");
      const newTask = {
        id: Date.now(),
        text: action.payload,
        completed: false,
      };
      state.list.push(newTask);
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});
export const { addTask, setLoading } = tasksSlice.actions;
export default tasksSlice.reducer;
