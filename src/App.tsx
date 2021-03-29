import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';
import {useSelector, useDispatch} from "react-redux";
import {Todos} from './reduce';
const App: React.FC = () => { // can also be FunctionalComponent/ClassicComponent
  // our state with generics using interface Todo array
  const todos = useSelector<Todos, Todos["todos"]>((store)=>store.todos);
  const dispatch = useDispatch();

  function addMeme(text: string) {
    dispatch({ type: "CREATE_TODO", todo: {id: Math.random().toString(), text:text} });
  }

  function deleteMeme(id:string) {
    dispatch({type: "DELETE_TODO", id });
  }
  
  return (
    <div className="App">
      <NewTodo addTodo = {addMeme}/>
      <TodoList items={todos} removeTodo={deleteMeme}/>
    </div>
  );
}

export default App;
