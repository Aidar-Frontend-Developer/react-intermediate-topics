import './App.css';
import AuthProvider from './state-management/AuthProvider';
import HomePage from './state-management/HomePage';
import NavBar from './state-management/NavBar';
import TasksProvider from './state-management/TasksProvider';
// import TaskList from './state-management/TaskList';
// import PostList from './react-query/PostList';
// import TodoForm from './react-query/TodoForm';
// import TodoList from './react-query/TodoList';

function App() {
	return (
		// <TodoForm />
		// <TodoList />
		// <PostList />
		// <Counter />
		// <TaskList />
		<AuthProvider>
			<TasksProvider>
				<NavBar />
				<HomePage />
			</TasksProvider>
		</AuthProvider>
	);
}

export default App;
