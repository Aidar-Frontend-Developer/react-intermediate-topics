import './App.css';
import Counter from './state-management/counter/Counter';
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
		// <TaskList />
		<TasksProvider>
			<Counter />
			<NavBar />
			<HomePage />
		</TasksProvider>
	);
}

export default App;
