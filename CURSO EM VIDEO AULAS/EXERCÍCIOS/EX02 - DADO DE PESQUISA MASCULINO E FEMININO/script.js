function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    /* FANO.VALUE.LENGTH == 0 É PARA VERIFICAR SE A CAIXA
        ESTÁ VAZIA.

        E FANO.VALUE > ANO É CASO O ANO SEJA MAIOR QUE O 
        ATUAL VAI DAR O ERRO ABAIXO   
    */
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] verificar os dados e tente novamente')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number (fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto' )
        /* O [0] significa que é a opção masculino, e a [1] 
        é a feminina, a estringue '' ele não falou nada sobre.*/
     
         /* Eu mudei o var gênero ='' que estava aqui para 
            junto dos outros var e as fotos apareceram */

        /* if (fsex [0].checked) significa que se 
            se ele estiver marcado, vai ser executado tudo
            que está dentro dele ou seja em gênero masculino
            nesse caso 
        */

        if (fsex [0].checked){
            gênero = 'Homem'
            if (idade >=0 && idade < 13  ){
                img.setAttribute(`src`, `imagem/imghomem/criança.png`)
                //Criança

                /* É seguido a seuinte forma para dizer 
                    menor ou igual
                */
            }else if (idade  <= 18){
                img.setAttribute(`src`, 'imagem/imghomem/jovem.png')

                //Jovem
            }else if (idade < 50){
                img.setAttribute(`src`, `imagem/imghomem/adulto.png`)
                //Adulto
            }else {
                img.setAttribute(`src`, `imagem/imghomem/velho.png`)
                //Idoso
            }


        }else if (fsex [1].checked){
            gênero = 'Mulher'
            if (idade >=0 && idade < 10){
                img.setAttribute(`src`, `imagem/imgmulher/criança.png`)
                //Criança
            }else if (idade < 21){
                img.setAttribute(`src`, `imagem/imgmulher/jovem.png`)
                //Jovem
            }else if (idade < 50){
                img.setAttribute(`src`, `imagem/imgmulher/adulto.png`)
                //Adulto
            }else {
                img.setAttribute(`src`, `imagem/imgmulher/velha.png`)
                //Idoso
            }
        }
        /* res.style.texAligh é para centralizar o texto com javascript */
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade}`
        res.appendChild(img)
    }
}