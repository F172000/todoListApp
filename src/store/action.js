import { createAsyncThunk } from "@reduxjs/toolkit";
import { addTask, setLoading } from "./taskSlice";
export const saveTaskToServer = createAsyncThunk(
  "tasks/saveTaskToServer",
  async (task, { dispatch }) => {
    try {
      console.log(task, "task>>>>>>>>");
      dispatch(setLoading(true));
      await new Promise((resolve) => setTimeout(resolve, 2000));
      dispatch(addTask(task));
      dispatch(setLoading(false));
    } catch (error) {
      console.log(error.message);
    }
  }
);
