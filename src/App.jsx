import { useState } from "react";

import "./App.css";

function App() {
	const [todoItem, setTodoItem] = useState("");
	const [todoList, setTodoList] = useState([]);
	const [id, setId] = useState(0);

	function addTodoItem(props, item) {
		let objTodo = {
			id: id,
			conteudo: todoItem
		};
		if (objTodo.conteudo !== "") {
			setTodoList([...todoList, objTodo]);
		} 

		setTodoItem("");
		console.log(todoList);
		// setTodoList([...todoList, objTodo])
		setId(id + 1);
	}
	const handleDeleteTodo = (id) => {
		setTodoList(todoList.filter((item) => item.id !== id));
		console.log(todoList);
	};

	const handleUpdateTodo = (id) => {
		
		const currentTodoIndex = todoList.findIndex((todo) => todo.id === id);
		const updatedTodo = {
			...todoList[currentTodoIndex],
			conteudo: todoItem
		};
		const newTodos = [...todoList];
		newTodos[currentTodoIndex] = updatedTodo;
		setTodoList(newTodos);
	};

	return (
		<div className="App">
			<input
				type="text"
				value={todoItem}
				onChange={(e) => setTodoItem(e.target.value)}
			/>
			<button onClick={addTodoItem}>Enviar</button>

			{todoList.map((todo) => (
				
				<div key={todo.id}>
					<p style={{ color: "red" }}>{todo.conteudo}</p>
					<button onClick={() => handleDeleteTodo(todo.id)}>
						delete
					</button>
					<button onClick={() => handleUpdateTodo(todo.id)}>
						Editar Todo
					</button>
				</div>
			))}
		</div>
	);
}

export default App;
