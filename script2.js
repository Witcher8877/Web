function Calcular(e){
    e.preventDefault()
    let n1 = parseInt(document.getElementById("n1").value)
    let n2 = parseInt(document.getElementById("n2").value)
    let calc = n1 +n2

    if(calc > 20){
        calc = calc + 8
        document.getElementById("resultado").innerHTML = "resultado mais 8 = " + calc
    }else if(calc <= 20){
        calc = calc - 5
        document.getElementById("resultado").innerHTML = "resultado menos 5 = " + calc
    }

}

const form = document.getElementById("form")

form.addEventListener("submit", Calcular)