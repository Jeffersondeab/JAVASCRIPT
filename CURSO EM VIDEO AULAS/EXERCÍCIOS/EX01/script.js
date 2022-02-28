 function carregar(){
     var msg = window.document.getElementById('msg')
     var img = window.document.getElementById('imagem')
     var data = new Date()

         /* Se tirar o data.gethours() da para 
        trocar a hora manualmente
        exemplo: var hora = 2
     */
     var hora = data.getHours()
     msg.innerHTML = `Agora são ${hora} horas`
     if (hora >= 0 && hora < 12){
         //BOM DIA
         img.src = `Imgs/manha.jpg.jpg`
         document.body.style.background = '#BE7C4D'
     }else if (hora >= 12 && hora <= 18){
         //BOA TARDE
         img.src = `Imgs/tarde.jpg.jpg`
         document.body.style.background = '#92140C'

     }else {
         // BOA NOITE
         img.src = `Imgs/noite.jpg.jpg`
         document.body.style.background = '#353238'
     }
 }

 

/*  Para o relógio aparecer 'bonitinho' fiz assim:
var hora = data.getHours()
var minuto = data.getMinutes()
msg.innerHTML = `Agora são ${hora}:${minuto} horas.` */

 