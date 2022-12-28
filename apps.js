alert("Bienvenidos El Palmar")
let nombre = prompt("Ingresa tu Nombre")
let apellido = prompt("Ingresa tu Apellido")
let dni = prompt("Ingresa tu Documento")
let edad = prompt("Ingresa tu Edad")
alert(nombre)
alert(apellido)
alert(dni)
alert(edad)


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
    let productos = prompt("Ingrese el producto que desea comprar : \n (1) ron \n (2) ginebra \n (3) vodka")
   
    let monto =0

    switch (productos) {
        case "1":  monto = 1000;
        break;
        case "2":  monto = 2000;
        break;
        case "3":  monto = 3000;
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