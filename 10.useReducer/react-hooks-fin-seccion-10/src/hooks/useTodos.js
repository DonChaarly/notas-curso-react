import { useEffect, useReducer } from 'react';
import { todoReducer } from '../08-useReducer/todoReducer';

//9. en la funcion init se retornaran los elementos iniciales que queremos que tenga nuestro initialState
const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodos = () => {
  
    /*7. Al useReducer se le pasan como argumentos el reducer a utilizar, el initialState
         y una funcion init la cual se puede omitir pero esta es una funcion inicializadora en caso de tener un proceso pesado
         Como retorno se tendra el state y la funcion dispatch que sera el reducer que creamos
    */
    const [ todos, dispatch ] = useReducer( todoReducer, [], init );

    useEffect(() => {
        //9. Si se quisieran hacer persistentes algunos datos, se puede utilizar el localStorage o sessionStorage
      localStorage.setItem('todos', JSON.stringify( todos ) );
    }, [todos])
    

    /*8. Despues se puede tener dentro una funcion la cual se encargara de crear la accion -> 08-ueReducer/todoReducer.js 
         y mandar a llamar el dispatch especificando la accion a realizar
     */
    const handleNewTodo = ( todo ) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }

        dispatch( action );
    }

    const handleDeleteTodo = ( id ) => {
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id
        });
    }

    const handleToggleTodo = ( id ) => {
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id
        });
    }

    return {
        todos,

        todosCount: todos.length,
        pendingTodosCount: todos.filter(todo=> !todo.done).length,

        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
    }

}
