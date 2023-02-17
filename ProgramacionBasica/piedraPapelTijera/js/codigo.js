function aleatorio(min, max){
    return Math.floor(Math.random()*(max-min+1)+min)
}
function eleccion(quienElige, num){
    if(num == 1){
        return alert(quienElige + " piedra") 
    } else if(num == 2){
        return alert(quienElige + " papel") 
    } else if(num == 3){
        return alert(quienElige + " tijera") 
    }else{
        return alert(quienElige + " opcion no valida") 
    }
    }
function resultado(resultado1, resultado2){
    if(resultado1 == resultado2){
        alert("EMPATE")
    } else if((resultado1 == 1 && resultado2 == 3)||(resultado1 == 2 && resultado2 == 1)||(resultado1 == 3 && resultado2 == 2)){
        alert("GANASTE LA PARTIDA")
        ganadas++
    }else{
        alert("PERDISTE LA PARTIDA")
        perdidas++
    }
}
//1 es piedra, 2 es papel y 3 es tijera
let jugador = 0
let pc = 0
let ganadas = 0
let perdidas = 0

alert("Gana 3 veces")

while(ganadas < 3 && perdidas < 3){
    pc = aleatorio(1,3)
    jugador = prompt("Elige: 1 para piedra, 2 para papel y 3 para tijera")
    eleccion("Elegiste",jugador)
    eleccion("PC eligio", pc)
    resultado(jugador, pc)
}

alert("Ganaste " + ganadas + " veces y perdiste " + perdidas + " veces")
if(ganadas > perdidas){
    alert("GANASTE EL JUEGO")
}else{
    alert("PERDISTE EL JUEGO")
}