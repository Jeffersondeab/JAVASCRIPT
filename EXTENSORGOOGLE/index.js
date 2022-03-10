let myleads = []
let oldleads = []
const inputbtn = window.document.getElementById('input-btn')
const inputEl = window.document.getElementById('input-el')
const ulEl = window.document.getElementById('ul-le')

const deleteu = window.document.getElementById('delete')
 
/* SISTEMA PARA SALVAR DADOS
QUANDO ATUALIZAR A PÁGINA  */
 
let myLeadsFromLocalStorage = JSON.parse(localStorage.getItem('myLeads'))

if (myLeadsFromLocalStorage){
    myleads = myLeadsFromLocalStorage
    renderLeads()
}



deleteu.addEventListener('click', function(){
    localStorage.clear()
    myleads = []  
    renderLeads()
})



/* COLOCOU A FUNCTION DENTRO DESSA PARADA ABAIXO.
PEGOU O LET INPUT CRIOU UM ADDEVENTLISTENER CLICK COM 
A FUNCTION() */


inputbtn.addEventListener('click', function() {
    myleads.push(inputEl.value)  
    inputEl.value = ''
    localStorage.setItem('myLeads',JSON.stringify(myleads))
    renderLeads() 
}) 

 


function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myleads.length; i++) {
        listItems += `
        <li>
            <a href='${myleads}' target='_blank'>${myleads} </a>
        </li>`
    } 
    ulEl.innerHTML = listItems
}



/* listItems += "<li> <a href='' target='_blank'>" + myleads[i] + " </a> </li>" */