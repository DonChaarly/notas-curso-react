
# Comunicacion Entre componetnes

Los componetes pueden ***recibir una propiedad props*** que tendra todas las variables que se les mande al componente

    export const AddCategory = ({ onNewCategory })

Por parte del padre se puede **mandar toda clase de valores como informacion** hacia el hijo

    <AddCategory propiedad={"valor de la proipedad"}/>

## Formas de mandar funciones del padre al hijo

Se puede mandar una funcion del useState como setPropiedad

    <AddCategory setCategories={ setCategories }/>

Y dentro del componete hijo recibir y utilizar esta funcion, lo cual modificara el state en el componente padre\
Se recomienda utilizar el set de la siguiente forma para tener el valor actual del estado y poder utilizarlo si se requiere

    export const AddCategory = ({ setCategories }) => {

    const onSubmit = ( event ) => {

        setCategories( categories => [inputValue, ...categories])

    }
    ...

Una mejor forma de mandar funciones es evitar mandar funciones del estado y mandar funciones propias que se comportaran un poco como eventos para el componente hijo\
De esta forma en value se recibe lo que el hijo mande cuando utilice la funcion\
y en la descripcion de la funcion mandada se hace lo que se quiera con el valor recibido

    <AddCategory onNewCategory={ (value) => onAddCategory(value) }/>

    //-----------------------------------------------------------------------

    const onAddCategory = ( newCategory ) => {
        setCategories([ newCategory, ...categories ]);
    }

## Mandar un objeto como informacion a un componente hijo

Si se quiere mandar las propiedades de un objeto una por una, una forma sencilla de hacer esto es con la siguiente sintaxys

    <GifItem 
        key={ image.id } 
        { ...image }
    />

Esto es lo mismo que si se hiciera esto

    <GifItem 
        key={ image.id } 
        title="iamge.title"
        url="image.url"
        id="image.id"
    />



