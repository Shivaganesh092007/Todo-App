import { useDispatch } from 'react-redux'
import './App.css'
import { useState } from 'react';
import { addTodo } from './components/TodoSlice';
import TodosList from './components/TodosList';

function App() {
	const [inpValue, setInpValue] = useState('');
	const dispatch = useDispatch();

	const handleInput = () => {
		if (inpValue.trim() == '') return;
		dispatch(addTodo(inpValue.trim()))
		setInpValue('')
	}

	const handleEnter = (e) => {
		if (e.key == "Enter") handleInput();
	}

	return (
		<div className="min-h-screen bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-100 flex items-center justify-center p-4">
			<div className="w-full max-w-md bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 border border-slate-200 dark:border-slate-700">
				<header className="text-center mb-6">
					<h1 className="text-3xl font-extrabold text-indigo-800 dark:text-indigo-400">Todo - Tasks</h1>
					<p className="text-sm text-slate-500 dark:text-slate-400">React Todo App</p>
				</header>

				<div className="flex gap-2 mb-6">
					<input
						type="text"
						placeholder="Add a new task..."
						value={inpValue}
						onChange={(e) => setInpValue(e.target.value)}
						onKeyDown={handleEnter}
						className="flex-1 px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
					/>
					<button
						onClick={handleInput}
						className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg shadow-sm transition active:scale-95 cursor-pointer"
					>
						Add
					</button>
				</div>

				<TodosList />
			</div>
		</div>
	)
}

export default App
