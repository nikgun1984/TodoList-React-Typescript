import './TodoList.css';

interface TodoListProps {
	items: {id: string, text:string}[];
	removeTodo: (id:string)=>void;
}

const TodoList: React.FC<TodoListProps> = ({items, removeTodo}) => {
	return <ul>
		{items.map(todo=><li key={todo.id}>
			<span>{todo.text}</span>
			<button onClick={removeTodo.bind(null,todo.id)}>Delete</button>
		</li>)}
	</ul>
}

export default TodoList;