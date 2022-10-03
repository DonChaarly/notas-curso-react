import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
    
    const [ categories, setCategories ] = useState([ 'One Punch' ]);
    
    const onAddCategory = ( newCategory ) => {
        if ( categories.includes(newCategory) ) return;
        /*2. Para agregar un elemneto al arreglo de un estado no se puede utilizar simplemente push() -> AddCategory.jsx
             Se puede utilizar el operado ... (spred) el cual colocara todos los elemntos que ya contenia el arreglo
        )*/
        setCategories([ newCategory, ...categories ]);
    }
    

    return (
        <>

            <h1>GifExpertApp</h1>

            {/* 9. Se pueden mandar funciones como atributos a los componentes -> AddCategory.jsx
                   Al mandar una funcion, esto se va a comportar como un evento
                   Por ello al utilizar la funcion en el componente hijo en value se recibira lo que coloco el hijo */}
            <AddCategory 
                onNewCategory={ (value) => onAddCategory(value) }
            />
            {/* 1. Cuando se tiene un arreglo, este puede ser iterado con la funcion map() 
                   y de esta forma repetir tantas etiquetas como se quiera  con los valores del arreglo
                   Es necesario colocar el atributo key para que react diferencie entre las etiquteas y este debe ser unico
                   Tambien se tiene la propiedad i la cual sera el indice del elemento iterado*/}
            { 
                categories.map( ( category, i ) => (
                    <GifGrid 
                        key={ category } 
                        category={ category } />
                ))
            }




        </>
    )
}
