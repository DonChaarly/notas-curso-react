import { useCounter } from '../hooks/useCounter';

export const CounterWithCustomHook = () => {
    

    /*9.Un Custom hook se manda a llamar como cualquier otro hook, -> Message.jsx 
        se puede desestructurar para utilizar todos sus metodos y atributos que retorna  */
    const { counter, increment, decrement, reset } = useCounter();

    return (
        <>
            <h1>Counter with Hook: { counter }</h1>
            <hr />

            <button onClick={ () => increment(2) } className="btn btn-primary">+1</button>
            <button onClick={ reset } className="btn btn-primary">Reset</button>
            <button onClick={ () => decrement(2) } className="btn btn-primary">-1</button>
        
        </>
    )
}
