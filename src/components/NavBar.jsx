import CartWidget from "./CartWidget";


function NavBar () {
    
    return(
        <div className="navbar">
            <button>Inicio</button>
            <ul>
                <li>Vehiculos</li>
                <li>Electronica</li>
                <li>Libros</li>
            </ul>
            <button>Login</button>
            <CartWidget/>
        </div>
    )    
}

export default NavBar;