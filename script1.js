function Calcular(e){
    e.preventDefault()
    const b1 = parseInt(document.getElementById("b1").value)
    const b2 = parseInt(document.getElementById("b2").value)
    const altura = parseInt(document.getElementById("altura").value)
    const calc = ((b1 + b2) * altura)/2
    console.log("ola mundo");
    

    document.getElementById("resultado").innerHTML = calc
}

const form = document.getElementById("form")

form.addEventListener("submit", Calcular)