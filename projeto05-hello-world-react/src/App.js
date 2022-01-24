import React from 'react';
import Header from './componentes/Header';
import Main from './componentes/Main';
import Dados from './componentes/Dados';
import './App.css'

 export default function App(){
  const gh = 'angelicablirio';
  const ld = 'https://www.linkedin.com/in/angelica-barbieri-lírio/';
  return(
    <>
      <Header/>
      <Main/>
      <Dados 
      github={gh} 
      linkedin={ld}/>
    </>
  )
}



