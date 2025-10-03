import { createSlice } from "@reduxjs/toolkit";
import { newTaskData } from "../../Data/Application/Tasks/Tasks";
import { TasksType } from "../../Type/Application/Tasks/Tasks";

const initialState: TasksType = {
  activeTab: "1",
  allTasks: newTaskData,
  validation: false,
};
const TasksSlice = createSlice({
  name: "Tasks",
  initialState,
  reducers: {
    setActiveTab: (state, action) => {
      state.activeTab = action.payload;
    },
    setAllTasks: (state, action) => {
      state.allTasks = action.payload;
    },
    setValidation: (state, action) => {
      state.validation = action.payload;
    },
  },
});

export const { setActiveTab, setAllTasks ,setValidation} = TasksSlice.actions;

export default TasksSlice.reducer;
