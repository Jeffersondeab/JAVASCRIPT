let myleads = []
const inputbtn = window.document.getElementById('input-btn')
const inputEl = window.document.getElementById('input-el')
const ulEl = window.document.getElementById('ul-le')

/* COLOCOU A FUNCTION DENTRO DESSA PARADA ABAIXO.
PEGOU O LET INPUT CRIOU UM ADDEVENTLISTENER CLICK COM 
A FUNCTION() */
inputbtn.addEventListener('click', function() {
    myleads.push(inputEl.value)  
    inputEl.value = ''
    renderLeads() 
}) 


function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myleads.length; i++) {
        listItems += "<li> <a href='' target='_blank'>" + myleads[i] + " </a> </li>"
    } 
    ulEl.innerHTML = listItems
}

