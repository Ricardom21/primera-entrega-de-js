alert("Bienvenidos a Licoreria El Palmar")
let nombre = prompt("Ingresa tu Nombre")
let apellido = prompt("Ingresa tu Apellido")
let dni = prompt("Ingresa tu Documento")
let edad = prompt("Ingresa tu Edad")
alert("Mi Nombre es " + nombre + " Mi Apellido es " + apellido + " Mi Dni es " + dni + " Mi Edad es " + edad) 



function validarEdad(edad) {
    if (edad >= 18) {
        return true

    }else{
    return false
        }
    
}

let edadValid = validarEdad (edad)

if (!edadValid) {
    alert("Edad no apta para comprar")
    }


let seguirComprando = true
let totalCompra =0


while (seguirComprando) {
    let productos = prompt("Ingrese el producto que desea comprar : \n (1) Ron \n (2) Ginebra \n (3) Vodka \n (4) Cervezas \n (5) Whisky")
   
    let monto =0

    switch (productos) {
        case "1":  monto = 1000;
        break;
        case "2":  monto = 2000;
        break;
        case "3":  monto = 3000;
        break; 
        case "4":  monto = 4000;
        break;  
        case "5":  monto = 5000;
        break;       
        
    
        default:
         alert("Valor incorrecto " + productos);
         
    }
    alert("Escogio " + productos)
    
    let continuarCompra = prompt("Quiere seguir comprando : \n si \n no")
    if (continuarCompra == "si") {
        seguirComprando = true
        } else seguirComprando = false

        totalCompra += monto
        
}

alert("total a pagar " + totalCompra)