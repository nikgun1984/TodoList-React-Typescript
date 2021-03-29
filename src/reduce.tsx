import {Todo} from './todo.models';
import {Reducer, AnyAction} from  'redux';

export interface Todos {
	todos: Todo[]
}
const INITIAL_STATE= {todos:[]}

export const reduceFunc: Reducer<Todos,AnyAction> = (state=INITIAL_STATE, action) => {
	switch(action.type){
		case "CREATE_TODO":
			return {
				...state,
				todos: [...state.todos, {...action.todo}]
			};
		case "DELETE_TODO":
			return {
				...state,
				todos: state.todos.filter((todo)=>todo.id !== action.id)
			}
		default:
			return state;
	}
}