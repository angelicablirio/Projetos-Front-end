import React from 'react';
import Foto from './img/foto-perfil-angelica.png';

export default function Body(){

    const titulo = ()=>{ 
        return ('Primeira aplicação em React!');
       }
      const nome = 'Nome: Angelica Barbieri Lírio';

    return (
        <main>
            <h2>{titulo()}</h2>
            <h3>Hello world! &#x1F44B;</h3>
            <img src={Foto}/>
            <p>{nome}</p>
        </main>
    )
}