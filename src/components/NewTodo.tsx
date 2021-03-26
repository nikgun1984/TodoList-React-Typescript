import React, {useRef} from "react";

interface NewTodoProps {
	addTodo: (todoText: string)=>void;
}

const  NewTodo: React.FC<NewTodoProps> = ({addTodo}) => {
    const  inputVal = useRef<HTMLInputElement>(null); // on the first render, it will be nothing
	const todoSubmitHandler = (evt: React.FormEvent) => {
		evt.preventDefault();
		const enteredText = inputVal.current!.value;
		addTodo(enteredText);
	}
	return <form onSubmit={todoSubmitHandler}>
		<div>
			<label htmlFor="todo-text">Todo Text</label>
			<input ref={inputVal} type="text" id="todo-text" />
		</div>
		<button type="submit">Add Todo</button>
	</form>
}

export default NewTodo;