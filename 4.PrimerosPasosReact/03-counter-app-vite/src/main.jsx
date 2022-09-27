//1. Siempre se tendra un archivo main.jsx el cual sera nuestro arcihvo principal el cual renderizara todo en el archivo index.html

//2. Se debe tener al menos estas importaciones en el archivo main.jsx --> HelloWorldApp.jsx
import React from 'react';
import  ReactDOM from 'react-dom/client';
import { CounterApp } from './CounterApp';
import FirstApp from './FirstApp';
import HelloWorldApp from './HelloWorldApp';

//8. Aplicar estilos css de forma global -> FirstApp.jsx
import './styles.css'


//4. Con el ReactDOM se obtienen elementos del DOM para despues renderizar nuestros componentes en estos
ReactDOM.createRoot( document.getElementById('root')).render(
    //5. La etiqueta React.StrincMode se utiliza para que react verifique nuestro codigo y nos avise de malas practicas o errores
    ///6. Dentro se tendra nuestro componente App -> FirstApp.jsx
    //10. Para pasar informacion al componente hijo, este se coloca dentro de la etiqueta -> FirstApp.jsx
    <React.StrictMode>
        <HelloWorldApp />
        <FirstApp title="Hola soy Goku" subTitle={123}/>
        <CounterApp  value ={10} />
    </React.StrictMode>

)