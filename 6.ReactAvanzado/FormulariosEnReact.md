
# Formularios en React

## Inputs
Los inputs se ***comportan un poco diferente*** en react\ 
al relacionar el valor del input con una variale de estado del componente\
Esto causara que el ***usuario no pueda modificar el valor del inpu*t**\
Por ello se debe aplicar el evento ***onChange={}*** y colocar una funcion que ***maneje el cambio del valor del input***

    <input 
        type="text"
        placeholder="Buscar gifs"
        value={ inputValue }
        onChange={ onInputChange }
    />
    /*-----------------------------------------------------------------------------------*/
    const onInputChange = ( event ) => {
        //En vez de colocar event, se puede desestrucutrar lo que se recibe de la siguiente forma: {target}
        setInputValue( event.target.value );
    }


## OnSubmit del Formulario
Como en javascript se puede acostrumbra colocar un ***evento onSubmit*** en la etiqueta del formulario\
para indicar la ***funcion que se ejecutara*** cuando se haga submit del formulario

    <form onSubmit={ onSubmit }>
        <input />
    </form>

Dentro de la funcion se acostumbra colocar la ***funcion event.preventDefault()***\
para ***evitar que la pagina se refresque*** cuando se haga submit\ 
y dentro se coloca lo que el submit requiera

    const onSubmit = ( event ) => {
        event.preventDefault();

        setInputValue('');
    }



