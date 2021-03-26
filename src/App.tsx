import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';
import {useState} from "react";
import {Todo} from './todo.models';
const App: React.FC = () => { // can also be FunctionalComponent/ClassicComponent
  // our state with generics using interface Todo array
  const [todos, setTodos] = useState<Todo[]>([]);
  
  const addTodo = (text: string) => {
    setTodos(prevTodos=>[...prevTodos, {id: Math.random().toString(), text:text}]);
  }
  const toDoDeleteHandler = (todoId: string) => {
    setTodos(prevTodos=>{
      return prevTodos.filter(todo=> todo.id===todoId)
    })
  };
  return (
    <div className="App">
      <NewTodo addTodo = {addTodo}/>
      <TodoList items={todos} removeTodo={toDoDeleteHandler}/>
    </div>
  );
}

export default App;
