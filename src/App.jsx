import { useEffect, useState } from 'react';
import axios from 'axios';

import AddTasks from './AddTasks';
import TasksContainer from './TasksContainer';

export default function App() {
	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		axios.get('http://localhost:3000/todos').then((res) => {
			setTasks(res.data);
		});
	}, []);

	return (
		<>
		<h1 id='top' className="text-4xl font-bold text-center text-gray-800 my-8">MY TODO LIST</h1>

			<AddTasks setTasks={setTasks} />
			<TasksContainer tasks={tasks} />
		</>
	);
}
