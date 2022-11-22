import { createEntityAdapter, createSlice } from "@reduxjs/toolkit"
import Task from "../../../config/interfaces/tasks"


const adapter = createEntityAdapter<Task>({
    selectId: (taskID) => taskID.uid,
});


export const { selectAll, selectById } = adapter.getSelectors((state: any) => state.tasksUser)


const taskSlice = createSlice({
    name: 'tasksUser', 
    initialState: adapter.getInitialState(),

    reducers: {
        addTask: adapter.addOne,
        updateTask: adapter.updateOne,
        removeTask: adapter.removeOne,
    },
})


export const { addTask, updateTask, removeTask } = taskSlice.actions;

export default taskSlice.reducer;