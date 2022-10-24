# useReducer - Hook

El ***useReducer*** es **casi igual al useState**, sin embargo el useReducer es **mas utilizado** cuando hay **muchas cosas que pueden modificar el state** de la aplicacion\
Se utiliza mas cuando el state es un objeto el cual es mas complejo

El objetivo del useReducer es tener controlado en un solo lugar todas las acciones que modifican el state

## Reducers
Los Reducers son las funciones que se van a mandar como argumento al useReducer, estas se encargaran de hacer los cambios en el state dependiendo de la accion que se especifique

Los Reducers normalmente se especifican en un arcivo a parte y despues se importan en donde se necesiten

### Caracteristicas del Reducer

1. Es una funcion comun y corriente la cual no puede ser asincrona
2. Debe ser una funcion pura
3. Debe de retornar un nuevo estado
4. Usualmente solo reciber dos argumentos
    - El valor inicial (initialState) y la accion a ejecutar
5. No debe llamar el localStorage o sessionStorage
6. No debe de requerir mas que una accion que puede tener un argumento

### Estructura de un Reducer

Un ***Reducer*** no es mas que una funcion pura la cual **recibe dos argumentos**,\
el **initialState y la accion** a realizar\
**Dentro** del Reducer se especifica el **codigo a realizar dependiendo de la accion**\
El Reducer debe **siempre retornar un estado**

    const todoReducer = ( state = initialState, action = {} ) => {

        if ( action.type === '[TODO] add todo' ){
            return [ ...state, action.payload ];
        }
        return state;
    }

### Indicar una accion al Reducer

Los Reducer reciben como **segundo argumento** una **accion** de lo que se quiere realizar\
React tiene un **estandar para especificar esta accion** y es **mediante un objeto** en donde\
Se tienen **dos atributo**, el primero es el **tipo de accion** que se va a realizar\
y el segundo es el **payload** o la carga que tendra la accion en este caso es un nuevo objeto todo\
Es como decirle, vamos a agregar un nuevo objeto al estado el cual es el siguiente

    const addTodoAction = {
        type: '[TODO] add todo',
        payload: newTodo,
    }

    todos = todoReducer( todos, addTodoAction );

## Utilizar un useReducer
Al ***useReducer*** se le pasan como **argumentos** el **reducer** a utilizar, el **initialState**
y una **funcion init** la cual se puede omitir pero esta es una funcion inicializadora en caso de tener un proceso pesado
Como **retorno** se tendra el **state** y la **funcion dispatch** que sera el reducer que creamos

    const [ todos, dispatch ] = useReducer( todoReducer, [], init );

Despues se puede tener dentro una funcion la cual se encargara de crear la accion 
y mandar a llamar el dispatch especificando la accion a realizar

    const handleNewTodo = ( todo ) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }

        dispatch( action );
    }