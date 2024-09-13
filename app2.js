//JSON
var personaJSON = localStorage.getItem("persona"); // sacar la persona de la pagina inicio
var persona = JSON.parse(personaJSON);

localStorage.setItem("cuenta", JSON.stringify(cuenta)); //guardar cuenta entre pag

//FUNCIONES
function cargarDatos(){
    /*
    document.getElementById('nombre').value = persona.nombre
    document.getElementById('apellido1').value = persona.apellido1
    document.getElementById('apellido2').value = persona.apellido2
    document.getElementById('nacionalidad').value = persona.nacionalidad*/
    menu = document.getElementById('menu').innerHTML
}

function cargarCabecera(dest){  
    document.getElementById(dest).innerHTML = '   <h1>BancoPuertollano</h1>    <ul>        <li><a href="index.html">Inicio</a></li>        <li><a href="infoCuenta.html">Informaci&#243;n Cuenta</a></li>             <li><a href="tarjetas.html">Tarjetas</a></li>    </ul>' 
   }

//2.1) Por defecto vendrá cargado un iban y un saldo de 500 euros, los campos iban y saldo estarán deshabilitados, por lo que no podrán ser editables por el usuario.

var retirar = document.getElementById("retirar"); //el dinero que se va a retirar
var ingresar = document.getElementById("ingresar"); //el dinero que se va a ingresar
var botonIng = document.getElementById("botonIngresar"); //el dinero que se va a retirar
var botonRe = document.getElementById("botonRetirar");
var msg = document.getElementById("msg"); //msg verificando 

var cuenta = {
    IBAN: "ES21 1465 0100 7220308776293",
    saldo: 500
}

//EVENTOS

// FOCO
retirar.addEventListener("focus", function () {//foco quitar ingresar
    if (ingresar.value !== "") {
      ingresar.value = "";
    }
  });
  
ingresar.addEventListener("focus", function () { //foco quitar retirar
    if (retirar.value !== "") {
      retirar.value = "";
    }
  });

botonIng.addEventListener('click', function(event) { ///para cuando se haga click en ingresar
    ingresarSaldo(); //realiza la funcion con sus verificaciones
    document.getElementById('saldo').innerHTML = cuenta.saldo; //caambiamos el 500
})
botonRe.addEventListener('click', function(event) {  ///para cuando se haga click en retirar
    retirarSaldo();
    document.getElementById('saldo').innerHTML = cuenta.saldo;
})


/* Cuando se realice se pulse el botón Retirar se restará el saldo introducido, se comprobará que es un número lo que se ha introducido y que la cantidad a retirar no es mayor al saldo.
Si se pasa la validación se mostrará un mensaje en verde de que se ha retirado el saldo correctamente. */

function retirarSaldo(){
    let positivo = /^[1-9]\d*$/; //para comprobar que sea positivo
    var cantidad = parseFloat(retirar.value) //cantidad que se retira
   
    if (isNaN(cantidad) || cantidad <= 0) {
        msg.innerText = "";
        }
    if (cantidad>cuenta.saldo){
        msg.innerText = "";
    }else if (positivo.test(cantidad)){
        cuenta.saldo -= cantidad//se restará el saldo introducido
        msg.textContent = `Dinero retirado correctamente: ${cantidad} €`; 
        msg.style.color = "green";
    }
}

//2.2) Cuando se ingrese dinero al igual que en retirar se comprobará que es un número y se mostrará un mensaje en verde de que el dinero ha sido ingresado correctamente.

function ingresarSaldo() {
    var cantidad = parseFloat(ingresar.value) //cantidad que se retira

    if (isNaN(cantidad) || cantidad <= 0) {
        msg.innerText = "error";
        msg.style.color = "red";
    }else{
        cuenta.saldo += cantidad
        msg.textContent = `Dinero ingresado correctamente: ${cantidad} €`;
        msg.style.color = "green";
    }
}    
/*
const cuenta = JSON.parse(localStorage.getItem('cuenta'));
localStorage.setItem("cuenta",JSON.stringify(cuenta))*/




