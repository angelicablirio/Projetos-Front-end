import React from 'react';
import Logo from './img/logo192.png';

export default function Header(){
    return(
        <header>
            <h1>Curso de React JS</h1>
             <img src={Logo} className='logo'/>
        </header>
    )
}



