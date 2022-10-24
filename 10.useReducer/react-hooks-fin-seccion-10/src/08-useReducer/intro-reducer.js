
//Los Reducers normalmente se especifican en un arcivo a parte y despues se importan en donde se necesiten

//1. Siempre se tiene un initialState 
const initialState = [{
    id: 1,
    todo: 'Recolectar la piedra del Alma',
    done: false,
}];


//2. Un Reducer no es mas que una funcion pura la cual recibe dos argumentos, el initialState y la accion a realizar
//3. El Reducer es mas utilizado cuando se tiene un objeto mas elaborado
const todoReducer = ( state = initialState, action = {} ) => {

    //7. Dentro del Reducer se especifica el codigo a realizar dependiendo de la accion 
    if ( action.type === '[TODO] add todo' ){
        //7. A pesar de que el state es un arreglo, no se debe utilizar la funcion push para agregar un nuevo objeto, es mejor utilizar el operador spred
        return [ ...state, action.payload ];
    }

    //4. El useReducer debe siempre retornar un estado
    return state;
}

/*5. Al utilizar el Reducer sin pasar ningun argumento, este nos retornara el estado inicial
     Esta variable es la que se modificara cada que se llame el Reducer
*/
let todos = todoReducer();

const newTodo = {
    id: 2,
    todo: 'Recolectar la priedra del poder',
    done: false
}

/*6. Los Reducer reciben como segundo argumento una accion de lo que se quiere realizar -> hooks/useTodos.js
     React tiene un estandar para especificar esta accion y es mediante un objeto en donde
     Se tienen dos atributo, el primero es el tipo de accion que se va a realizar
     y el segundo es el payload o la carga que tendra la accion en este caso es un nuevo objeto todo
     Es como decirle, vamos a agregar un nuevo objeto al estado el cual es el siguiente
*/
const addTodoAction = {
    type: '[TODO] add todo',
    payload: newTodo,
}


todos = todoReducer( todos, addTodoAction );


console.log({state: todos})





