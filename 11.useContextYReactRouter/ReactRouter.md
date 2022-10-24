
# React Router

Con react router podemos establecer rutas para nuestros componentes manejando una aplicacion singlePage\
React rouer tambien nos permite proteger nuestras rutas estableciendo los roles que tendran acceso a estas
En este caso se trabajara con la version 6

Documentacion oficial:\
https://reactrouter.com/es/main/start/tutorial

## Intalacion de reactRouter

En la terminal se instala las dependencias de react-router

    npm install react-router-dom localforage match-sorter sort-by

## Preparacion de proyecto

En el archivo main se tiene que cubrir las etiquetas con nuestra etiquta Browser

    import { BrowserRouter } from 'react-router-dom';

    <BrowserRouter>
      <MainApp />
    </BrowserRouter>

### Rutas

En el **componente** mas alto de nuestra aplicacion, en el **principal**, se colocan las **etiquetas *Routes* y *route***\
***Router*** sera el componente que **albergara las rutas** de nuestra aplicacion
En las etiquetas ***Route*** se indicaran los **componentes** de nuestra aplicacion **junto con sus rutas**
Si se quiere que algunos componentes o etiquetas se muestren en toda la apliacion,\
estas se pueden dejar fuera de la etiqueta Router

    <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="about" element={ <AboutPage /> } />
        <Route path="login" element={ <LoginPage /> } /> 
    </Routes>

Para los casos en los que la ruta no sea reconocida se pueden mostrar componentes por default, se tienen dos formas:

Si se quiere indicar que con cualquier ruta se muestre un componente especifico se coloca como ruta /* 

    <Route path="/*" element={ <LoginPage /> } /> 

Tambien se puede indicar que con una ruta desconocida se rediriga otra ruta establecida

    <Route path="/*" element={ <Navigate to="/about" /> } />

### Links

En vez de utilizar etiquetas < a > **se utilizan los componentes < Link >**,\
Esto debido a que la etiqueta < a > provoca que se haga un refresh de la pagina y < Link > no
En to se especifica la ruta a la que hara referencia

    <Link to="/login">Login</Link>

### NavLinks

Los NavLinks son iguales a los Links sin embargo,\
el NavLink nos puede indicar si es que esta seleccionada la ruta que indica mediante el classname\
el classname mediante la propiedad isActive nos indica si el enlace esta acitvo o no\
Con esto podemos especificar un estilo u otro al NavLink

    <NavLink 
        className={ ({ isActive }) => `nav-link ${ isActive ? 'active' : '' }`}
        to="/">
        Home
    </NavLink>


