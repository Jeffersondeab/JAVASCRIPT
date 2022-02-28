function verificar(){
        var data = new Date()
        var ano = data.getFullYear()
        var fano = document.getElementById('txtano')
        var res = document.querySelector('div#res')

        if (fano.value.length == 0 || fano.value > ano){
            window.alert('[ERRO] verificar os dados e tente novamente')
        }else{
            var fsex = document.getElementsByName('radsex')
            var idade = ano - Number (fano.value)
            var gênero = ''
            var img = document.createElement('img')
            img.setAttribute('id', 'foto' )

    
            if (fsex [0].checked){
                gênero = 'Homem'
                if (idade >=0 && idade < 13){
                    img.setAttribute(`src`, `imagem/imghomem/criança.png`)
                    res.innerHTML =  `É uma criança`
                    //Criança

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
                    //Criança
                }else if (idade < 21){
                    //Jovem
                }else if (idade < 50){
                    //Adulto
                }else {
                    //Idoso
                }
            }
           
            res.innerHTML = `Detectamos ${gênero} com ${idade}`
            res.appendChild(img)
        }
    }