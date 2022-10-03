

# Arreglos en React

Si se tiene un arreglo, este puede ser iterado dentro del codigo jsx con la funcion **map()** de la siguiente manera:\
La funcion map tiene dos atributo, el primero sera el eleemnto que se este iterando y el segundo sera el indice del elemento.

    { 
        categories.map( ( category, i ) => {
            return <li key={ category + i }> {category} </li>
        })
    }

Todo lo que se encuentre dentro de las llaves {} va a repetirse tantas veces como elementos tenga el arreglo\
Es **necesario colocar el atributo key={}** dentro del fragmento a iterar, y este debe ser **unico**

## Agregar un elemento al arreglo de un estado

Si se quiere agregar un elemento **no se puede utilizar** simpleemnte la funcion **push()**\
Se tiene que **utilizar la funcion set** y reasignarle un valor al arreglo\
Para esto se puede utilizar el **operado spredd (...)**, y agregar el valor que se quiere

    setCategories([ newCategory, ...categories ]);

Una **forma mas recomendada** de hacer esto es la siguiente

    setCategories( oddCategories => [ newCategory, ...oddCategories ]);




