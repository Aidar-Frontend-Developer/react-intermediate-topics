import './App.css';
import AuthProvider from './state-management/auth/AuthProvider';
import HomePage from './state-management/HomePage';
import NavBar from './state-management/NavBar';
import { TasksProvider } from './state-management/tasks';
// import { TaskList } from './state-management/tasks';
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
