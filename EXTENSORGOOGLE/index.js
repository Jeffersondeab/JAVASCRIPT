let myleads = ['www.awesome.com', 'www.epiclead.com', 'www.greatle.com']
const inputbtn = window.document.getElementById('input-btn')
const inputEl = window.document.getElementById('input-el')

const ul = window.document.getElementById('ul-el')

/* COLOCOU A FUNCTION DENTRO DESSA PARADA ABAIXO.
PEGOU O LET INPUT CRIOU UM ADDEVENTLISTENER CLICK COM 
A FUNCTION() */
inputbtn.addEventListener('click', function(){
   myleads.push(inputEl.value)
   console.log(myleads) 
})

for(let i = 0; i < myleads.length; i++){
     
    ul.innerHTML += "<li>" + myleads[i] + "</li>"
}