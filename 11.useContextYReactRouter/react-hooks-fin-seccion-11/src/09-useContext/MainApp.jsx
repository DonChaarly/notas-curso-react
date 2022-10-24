import { Navigate, Route, Routes, Link } from 'react-router-dom';

import { UserProvider } from './context/UserProvider';
import { HomePage } from './HomePage';
import { AboutPage } from './AboutPage';
import { LoginPage } from './LoginPage';
import { Navbar } from './Navbar';


export const MainApp = () => {
  return (
    /* 12. En nuestro componente principal colocaremos las etiquetas de nuestro provider y -> LoginPage.jsx 
           ahora todos los componentes dentro podran utilizar la informacion del provider
    */
    <UserProvider>
        {/* <h1>MainApp</h1> */}
        {/* <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/login">Login</Link> */}
        <Navbar />
        <hr />

        {/* 2. En el comopnente superior de la aplicaicon se tendran las etiquetas Routes y Route
               *Router* sera el componente que albergara las rutas de nuestra aplicacion
               En las etiquetas *Route* se indicaran los componentes de nuestra aplicacion junto con sus rutas
               Si se quiere que algunos componentes o etiquetas se muestren en toda la apliacion,\
               estas se pueden dejar fuera de la etiqueta Router */}
        <Routes>
          {/* 3. En Route se indican el url con path y con element el componente asignado */}
          <Route path="/" element={ <HomePage /> } />
          <Route path="about" element={ <AboutPage /> } />
          <Route path="login" element={ <LoginPage /> } />

          {/* 4 Si se quiere indicar que con cualquier ruta se muestre un componente especifico se coloca como ruta /*  */}
          {/* <Route path="/*" element={ <LoginPage /> } /> */}
          {/* 5. Tambien se puede indicar que con una ruta desconocida se rediriga otra ruta establecida -> Navbar.jsx*/}
          <Route path="/*" element={ <Navigate to="/about" /> } />

        </Routes>
    </UserProvider>
  )
}
