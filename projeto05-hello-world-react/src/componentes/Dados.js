import React from 'react';

export default function Dados(props){
    return(
        <section>
            <p>GitHub: <a href='https://github.com/angelicablirio'>{props.github}</a></p>
            <p>Linkedin: <a href='https://www.linkedin.com/in/angelica-barbieri-lírio/'>{props.linkedin}</a></p>
        </section>
    )
}