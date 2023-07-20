import { useState } from 'react';
import { nanoid } from 'nanoid';

function App() {
	const [todoList, setTodoList] = useState([
		{ id: nanoid(8), content: 'item-1' },
	]);
	console.log(todoList);
	return (
		<>
			<div className="h-screen bg-slate-900">
				<div className="max-w-4xl mx-auto pt-20 px-16">
					<h1 className="text-3xl text-slate-100 mb-4">To-do List</h1>
					<form className="mb-10">
						<label htmlFor="todo-item" className="text-slate-50">
							Add something
						</label>
						<input type="text" className="mt-1 block w-full rounded" />
						<button className="mt-4 py-2 px-2 bg-slate-50 rounded min-w-[115px]">
							Add
						</button>
					</form>
					<ul></ul>
				</div>
			</div>
		</>
	);
}
export default App;
