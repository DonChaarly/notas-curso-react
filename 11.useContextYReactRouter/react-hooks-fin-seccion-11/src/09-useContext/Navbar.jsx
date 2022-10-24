import { Link, NavLink } from 'react-router-dom';


export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3">
        <div className="container-fluid">
            {/* 6. En vez de utilizar etiquetas <a> se utilizan los componentes <Link>, 
               Esto debido a que la etiqueta < a > provoca que se haga un refresh de la pagina y < Link > no
               En to se especifica la ruta a la que hara referencia */}
            <Link className="navbar-brand" to="/">useContext</Link>

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    
                    {/* 7.Los NavLinks son iguales a los Links sin embargo, el NavLink nos -> context/UserContext.jsx
                     puede indicar si es que esta seleccionada la ruta que indica mediante el classname
                     el classname mediante la propiedad isActive nos indica si el enlace esta acitvo o no
                     Con esto podemos especificar un estilo u otro al NavLink */}
                    <NavLink 
                        className={ ({ isActive }) => `nav-link ${ isActive ? 'active' : '' }`}
                        to="/">
                        Home
                    </NavLink>


                    <NavLink 
                        className={ ({ isActive }) => `nav-link ${ isActive ? 'active' : '' }`}
                        to="/about">
                        About
                    </NavLink>

                    <NavLink 
                        className={ ({ isActive }) => `nav-link ${ isActive ? 'active' : '' }`}
                        to="/Login">
                        Login
                    </NavLink>
                </ul>
            </div>
        </div>
    </nav>
  )
}
