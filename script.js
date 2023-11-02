const valueDisplay = document.getElementById('valueDisplay')
let curOpHistory = []
let opHistory = []

function registrarEvento(tecla) {
    document.getElementById(tecla).addEventListener("click", (e)=>{
        e.preventDefault()

        valueDisplay.value += tecla
        curOpHistory.push(tecla)
    })
}

registrarEvento("1");
registrarEvento("2");
registrarEvento("3");
registrarEvento("+");
registrarEvento("4");
registrarEvento("5");
registrarEvento("6");
registrarEvento("-");
registrarEvento("7");
registrarEvento("8");
registrarEvento("9");
registrarEvento("*");
registrarEvento(".");
registrarEvento("/");
registrarEvento("0");

document.getElementById('ac').addEventListener("click",()=>{
    valueDisplay.value = ""
    curOpHistory =[]
})

document.getElementById('de').addEventListener("click",()=>{
    valueDisplay.value = valueDisplay.value.toString().slice(0,-1)
    if (valueDisplay.value == "") {
        curOpHistory =[]
    }
})

document.getElementById('btnEqual').addEventListener("click", (e)=>{
    e.preventDefault()

    valueDisplay.value = eval(valueDisplay.value)

    let curOpHistoryConcat = ''
    for (elem of curOpHistory) {
       curOpHistoryConcat += elem
    }

    opHistory.push(`${curOpHistoryConcat} = ${valueDisplay.value}`) 
    console.log(opHistory)
    curOpHistory =[]
    saveLS()
})

let modal = document.getElementById('modal')

function saveLS(){
    localStorage.setItem('history',JSON.stringify(opHistory))
    showLS()
}

function showLS(){
    btnHistory =document.getElementById('btnHistory')
    btnHistory.addEventListener("click",(e)=>{
        e.preventDefault();
        container.innerHTML = ``
        container.innerHTML =` <button id="btnHistoryX">🗙</button>
                                <button id="btnHistoryD">🗑️</button>`
        btnHistory.innerHTML = ``

        opHistory = JSON.parse(localStorage.getItem('history'))
        valueDisplay.value =""
        if (opHistory === null){
            opHistory = []
        } else {
            opHistory.map(h =>{
                container.innerHTML += `<p>${h}</p>`
            })    
        }
        
        btnHistoryX = document.getElementById('btnHistoryX')
        btnHistoryD = document.getElementById('btnHistoryD')

        btnHistoryX.addEventListener("click",(e)=>{
            e.preventDefault();
            container.innerHTML =``
            btnHistory.innerHTML = `<button id="btnHistory">🕒</button>`
        })
        btnHistoryD.addEventListener("click",(e)=>{
            e.preventDefault();
            removeLS()
            container.innerHTML =``
            btnHistory.innerHTML = `<button id="btnHistory">🕒</button>`

            
        })
        
    })
    
}

function removeLS(){
    localStorage.removeItem('history')
}

function ocultar(){
    btnHistoryD = document.getElementById('btnHistoryD').style.display = "none"
}
document.querySelector('DOMContentLoaded', showLS())
