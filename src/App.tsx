import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';
import {useState} from "react";
import {Todo} from './todo.models';
const App: React.FC = () => { // can also be FunctionalComponent/ClassicComponent
  const [todos, setTodos] = useState<Todo[]>([]);
  
  const addTodo = (text: string) => {
    setTodos(prevTodos=>[...prevTodos, {id: Math.random().toString(), text:text}]);
  }
  return (
    <div className="App">
      <NewTodo addTodo = {addTodo} />
      <TodoList items={todos}/>
    </div>
  );
}

export default App;
