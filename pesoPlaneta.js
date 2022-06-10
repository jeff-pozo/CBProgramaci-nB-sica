let pesoTierra = document.getElementById("peso");
let planeta = document.getElementById("planet");
let calcular = document.getElementById("answer-button");
let respuesta = document.getElementById("answer-paragraph")

calcular.addEventListener("click", resultado);



function resultado (){
    let valuePesoTierra = pesoTierra.value;
    let valuePlaneta = planeta.value;
    let gravedad;
    if (valuePlaneta == "Marte"){
     gravedad = 3.7
    }else if (valuePlaneta == "Saturno"){
    gravedad = 10.4
    }else if (valuePlaneta == "Jupiter"){
    gravedad = 24.7
    }else {
    gravedad = 3.7
    }
    let pesoCalculado = valuePesoTierra * gravedad / 9.8

    respuesta.innerText = "Tu peso en " + valuePlaneta + " es de " + Math.round(pesoCalculado) +" Kg"
    console.log(gravedad)

}