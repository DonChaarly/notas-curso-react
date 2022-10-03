
# Mostrar componetes html segun una condicion

Con un operador ternario se puede establecer mostrar o no un pedazo de codigo o mostrar otro en su defecto

***Se muestra o no el fragmento***

    {
        isLoading ? ( <h2>Cargando...</h2> ) : null
    }

***Se muestra uno u otro fragmento de codigo***

    {
        isLoading ? ( <h2>Cargando...</h2> ) : ( <h2>Listo</h2> )
    }

***Otra forma de mostrar o no un fragmento***

    {
        isLoading && ( <h2>Cargando...</h2> )
    }


