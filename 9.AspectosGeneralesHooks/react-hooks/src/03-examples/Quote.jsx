import { useLayoutEffect, useRef, useState } from 'react';


export const Quote = ({ author, quote }) => {

  const pRef = useRef();
  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 })

  /*34. El useLayoutEffect es muy parecido al useEffect, -> 06-memos/ShowIncrement.jsx
        sin embargo este se ejecuta una vez todos los elementos del componente han sido renderizado
        Tiene todo lo del useEffect, el return y especificar que se ejecute solo cuando cambie un estado
  */
  useLayoutEffect(() => {
    
    const { height, width } =  pRef.current.getBoundingClientRect();
    setBoxSize({ height, width });
    
  }, [quote])
  


  return (
    <>
      <blockquote 
        className="blockquote text-end"
        style={{ display: 'flex' }}
      >
          <p ref={ pRef } className="mb-1">{ quote }</p>
          <footer className="blockquote-footer"> { author } </footer>
      </blockquote>

      <code>{ JSON.stringify(boxSize) }</code>
    </>
  )
}
