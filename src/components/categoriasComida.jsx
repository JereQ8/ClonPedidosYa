import React from 'react'
import '../css/interfaz.css'
import icons from '../utils/icons'


export default function CategoriasComida(){
    return(
        <div className='cont-grid-rest'>
            <div className='orange'>
                <b>Restaurantes</b>
                <img src={icons.burguer} alt="" />
            </div>
            <div className='red'>
                <b>PedidosYa <br /> Market</b>
                <img  src={icons.bolsa2} alt="" /> 
            </div>
            <div className='lightblue'>
                <b>Mercados</b>
                <img  src={icons.bolsa3} alt="" />
            </div>
            <div className='pink'>
                <b>Helados</b>
                <img  src={icons.helado} alt="" />
            </div>
        </div>
    )
}