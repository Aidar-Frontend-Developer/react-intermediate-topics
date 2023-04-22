import { Dispatch, createContext } from 'react';
import { Task, TaskAction } from '../reducers/tasksReducer';

export interface TasksContextType {
	tasks: Task[];
	dispatch: Dispatch<TaskAction>;
}

const TaskContext = createContext<TasksContextType>({} as TasksContextType);

export default TaskContext;
