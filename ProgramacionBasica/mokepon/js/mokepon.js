function iniciarJuego(){
    let botonMascotaJugador = document.getElementById("boton-mascota")
    botonMascotaJugador.addEventListener("click", seleccionMascotaJS)
}

function seleccionMascotaJS(){
    let inputHipodoge = document.getElementById("hipodoge")
    let inputCapipepo = document.getElementById("capipepo")
    let inputRatgueya = document.getElementById("ratigueya")
    let spanMascota = document.getElementById("mascota-jugador")

    if(inputHipodoge.checked){
        spanMascota.innerHTML = "Hipodoge"  
    } else if(inputCapipepo.checked){
        spanMascota.innerHTML = "Capipepo"  
    } else if(inputRatgueya.checked){
        spanMascota.innerHTML = "Ratigueya"  
    } else{
        alert("Error, selecciona a tu Mokepon")
    }
}

window.addEventListener("load", iniciarJuego)