import React, { useContext } from 'react'
import "../App.css"
import LanguageContext from '../context'

const Navbar = () => {
    /* CONSEJO: Descomente este bloque de código cuando "App.jsx" tenga un proveedor*/

    const { language, handleChangeLA } = useContext(LanguageContext)
    const {text} = language
    
    
    return (
        <div className="navbar">
            {/* CONSEJO: Deje esta información dinámica, utilice los valores capturados a través del contexto (véase 'text' en la línea 8) */}
            <p> {text.home} </p> 
            {console.log(text)}
            <p> {text.current} </p>
            <button onClick={handleChangeLA}>Alterar idioma</button>
        </div>
    )
}

export default Navbar