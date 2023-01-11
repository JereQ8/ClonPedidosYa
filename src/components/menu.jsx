import React from 'react'
import '../css/menu.css'
import miFoto from '../assets/imgs/jerelogo.png'
import icons from '../utils/icons'


export default function Menu(){
    return(
        <div className='menu'>
            <div className='perfil'>
                <img src={miFoto} alt="" />
                <b>Jeremias Quinteros</b>
            </div>
            <div className='listMenu'>
                <ul>
                    <li>
                        <a href="#">
                            <img className='icons-menu' src={icons.home} alt="" />
                            <p>Inicio</p>
                        </a></li>
                    <li>
                        <a href="#">
                            <img className='icons-menu' src={icons.adress} alt="" />
                            <p>Mis direcciones</p>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img className='icons-menu' src={icons.carta} alt="" />
                            <p>Mis pedidos</p>
                        </a></li>
                    <li>
                        <a href="#">
                            <img className='icons-menu' src={icons.heart} alt="" />
                            <p>Mis favoritos</p>
                        </a></li>
                    <li>
                        <a href="#">
                            <img className='icons-menu' src={icons.gift} alt="" />
                            <p>Invita a tus amigos</p>
                        </a></li>
                    <li>
                        <a href="#">
                            <img className='icons-menu' src={icons.cupon} alt="" />
                            <p>Mis cupones</p>
                        </a></li>
                    <li>
                        <a href="#">
                            <img className='icons-menu' src={icons.miCuenta} alt="" />
                            <p>Mi cuenta</p>
                        </a></li>
                    <li>
                        <a href="#">
                            <img className='icons-menu' src={icons.auris} alt="" />
                            <p>Ayuda en linea</p>
                        </a></li>
                    <li>
                        <a href="#">
                            <img className='icons-menu' src={icons.information} alt="" />
                            <p>Informacion legal</p>
                        </a></li>
                    <li>
                        <a href="#">
                            <img className='icons-menu' src={icons.store} alt="" />
                            <p>Registrar tu negocio</p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

