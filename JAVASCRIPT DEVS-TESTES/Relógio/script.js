function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    var s = data.getSeconds()
    msg.innerHTML = `Agora são ${hora}:${minuto}:${s}horas`
    
    if (hora >= 0 && hora < 12){
        //MANHÃ
        img.src = `imagem/manha.jpg.jpg`
        document.body.style.background = '#C9D7F8'
    }else if (hora >= 12 && hora <= 18){
        //TARDE
        img.src = `imagem/tarde.jpg.jpg`
        document.body.style.background `#80CFA9`
    }else{
        //NOITE
        img.src = `imagem/noite.jpg.jpg`
        document.body.style.background = `#353238`
    }
}

/* O SETINTERVAL É PARA FAZER ATUALIZAÇÃO A CADA 500 MILESEGUNDOS
ELE PRECISA ESTAR FORA DA FUCTION */
setInterval(carregar,500)


/*  Para o relógio aparecer 'bonitinho' fiz assim:
var hora = data.getHours()
var minuto = data.getMinutes()
msg.innerHTML = `Agora são ${hora}:${minuto} horas.` */

 