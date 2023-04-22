import { useReducer } from 'react';
import './App.css';
import HomePage from './state-management/HomePage';
import NavBar from './state-management/NavBar';
import AuthContext from './state-management/context/authContext';
import TaskContext from './state-management/context/tasksContext';
import authReducer from './state-management/reducers/loginReducer';
import tastReducer from './state-management/reducers/tasksReducer';
// import TaskList from './state-management/TaskList';
// import PostList from './react-query/PostList';
// import TodoForm from './react-query/TodoForm';
// import TodoList from './react-query/TodoList';

function App() {
	const [tasks, tasksDispatch] = useReducer(tastReducer, []);
	const [user, authDispatch] = useReducer(authReducer, '');

	return (
		<>
			{/* <TodoForm /> */}
			{/* <TodoList /> */}
			{/* <PostList /> */}
			{/* <Counter /> */}
			{/* <TaskList /> */}
			<AuthContext.Provider value={{ user, dispatch: authDispatch }}>
				<TaskContext.Provider value={{ tasks, dispatch: tasksDispatch }}>
					<NavBar />
					<HomePage />
				</TaskContext.Provider>
			</AuthContext.Provider>
		</>
	);
}

export default App;
