//3. Esto es un componente , dentro de este se tiene codigo javascript y jsx, se tiene variables funciones y una function Component
import React from 'react'

//3. Se tiene un funciontal Component el cual regresa codigo jsx, tambien se pueden incluir otros componentes
// export default function HelloWorldApp() {
//   return (
//     <h1>HelloWorldApp</h1>
//   )
//}

//3. Forma mas reducida de hacer el function component -> main.jsx
const  HelloWorldApp = () => <h1>Hola Mundo</h1>

export default HelloWorldApp;