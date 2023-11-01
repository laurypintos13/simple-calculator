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
registrarEvento("00");


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
})