function carregar(){
    var msg1 = document.getElementById('msg1');
    var msg2 = document.getElementById('msg2');
    var img = document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();



    msg1.innerHTML = `Agora são ${hora} horas!`;

    if(hora >= 0 && hora < 12){
        msg2.innerHTML = 'Bom dia!'
        img.src = 'img/manha.jpg'
        document.body.style.background = '#e2cd9f'

    }else if(hora >=12 && hora <= 18){
        msg2.innerHTML = 'Boa tarde!'
        img.src = 'img/tarde.jpg'
        document.body.style.background = '#b9846f'

    }else{
        msg2.innerHTML = 'Boa noite!'
        img.src = 'img/noite.jpg'
        document.body.style.background = '#515154'
    }

}




