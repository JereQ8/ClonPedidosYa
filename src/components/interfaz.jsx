import React from 'react'
import menuHamburguer from '../assets/icons/hamburger-menu-1.png'
import '../css/interfaz.css'
import functions from '../utils/menuFunctions'
import icons from '../utils/icons'
import CategoriasComida from './categoriasComida'




export default function Interfaz(){

    return(
        
        <div onClick={functions.cerrarMenu} className='interfaz'>
            <header className='header-ya'>
            <img className='menuHamburguer' onClick={functions.abrirMenu} src={menuHamburguer} alt="" />
            <b>Roberto Casaux 2863</b>
            <img className='megaphone' src={icons.megaphone} alt="" />
            </header>
            <section className='section-input'>
                <div className='cont-input-findStores'>
                    <input type="text" placeholder='Buscar locales' className='findStores'/>
                    <button id="btn-search"><img className='search' src={icons.search} alt="" /></button>
                </div>
            </section>
            <CategoriasComida/>
        </div>
    )
}