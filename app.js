//barra de navegacion para navegar por pantallas
const modificar = document.getElementById('botonModificar');
const index = document.getElementById('index');
const cuenta = document.getElementById('cuenta');
const tarjeta = document.getElementById('tarjeta');

var persona = { //objeto de inicio de persona
    nombre: 'Francisco',
    apellido1: 'Alía',
    apellido2: 'Hernández',
    nacionalidad: 'española'
}

// EVENTOS 

// para cuando pulse en cada uno
modificar.addEventListener('click', function(event) {
    modificarDatos();
})

index.addEventListener('focus', function(event) {
    cargarDatos()
})

cuenta.addEventListener('focus', function(event) {
    cargarDatos()
})

tarjeta.addEventListener('focus', function(event) {
    cargarDatos()
})

//FUNCIONES
function cargarDatos(){
    document.getElementById('nombre').value = persona.nombre 
    document.getElementById('ape1').value = persona.apellido1
    document.getElementById('ape2').value = persona.apellido2
    document.getElementById('nacionalidad').value = persona.nacionalidad
    menu = document.getElementById('menu').innerHTML
}

function cargarCabecera(dest){  
    document.getElementById(dest).innerHTML = '   <h1>BancoPuertollano</h1>    <ul>        <li><a href="index.html">Inicio</a></li>        <li><a href="infoCuenta.html">Informaci&#243;n Cuenta</a></li>             <li><a href="tarjetas.html">Tarjetas</a></li>    </ul>' 
}

var msg = document.getElementById('msg'); 

function modificarDatos() {
    let nom = /^[A-Za-zñ]{2,30}$/;//El nombre debe contener entre 3 y 20 caracteres 
    let ape1 = /^[A-Za-zñ]{2,30}$/;//El primer apellido debe contener entre 3 y 20 caracteres 
    let ape2 = /^[A-Za-zñ]{2,30}$/; //El segundo apellido debe contener entre 3 y 20 caracteres 
    let nac = /^[A-Za-zñ]{3,15}$/;//Nacionalidad debe contener entre 3 y 15 caracteres 

        var nuevoN = document.getElementById('nombre').value;
        var nuevoA1 = document.getElementById('ape1').value;
        var nuevoA2 = document.getElementById('ape2').value;
        var nuevoN= document.getElementById('nacionalidad').value;

    if (!nom.test((nuevoN).value)|| !ape1.test((nuevoA1).value) || !ape2.test((nuevoA2).value) || !nac.test((nuevoN).value)){
        msg.textContent = 'error'; //mostrar un mensaje de color rojo con la información del error
        msg.style.color = "red"; 
    }else{    //volcar la información de al objeto persona 
         
        // metemops los valores a persona
        persona.nombre = document.getElementById('nombre').value;
        persona.apellido1 = document.getElementById('ape1').value;
        persona.apellido2 = document.getElementById('ape2').value;
        persona.nacionalidad = document.getElementById('nacionalidad').value;

        //mostrar un mensaje en la parte inferior “Guardado los datos correctamente” en color verde
        msg.textContent = 'Guardado los datos correctamente'; 
        msg.style.color = "green"; 
    } 
}

/*
///JSON --> no funciona

function guardarDatosEnLocalStorage(cuenta, persona) { // guardar datos en localStorage 
    localStorage.setItem("cuenta", JSON.stringify(cuenta));
    localStorage.setItem("persona", JSON.stringify(persona));
}
// sacar datos
function cargarDatosDesdeLocalStorage() {
    const cuenta = localStorage.getItem("cuenta");
    const persona = localStorage.getItem("persona");
    if (cuenta) {
        return JSON.parse(cuenta); // lo pasamos js
    }
    if (persona) {
        return JSON.parse(persona); // lo pasamos js
    }   
}
// LAS TARJETAS QUE TENMOS
const fija1 = new Tarjeta('ES21 1465 0100 72 2030876293', '1234 12345 123456', 'Si');
const fija2 = new Tarjeta('ES21 1465 0100 72 2030876293', '1234 12345 123456', 'No');

// Cargar los datos al iniciar la página
var cuenta1 = cargarDatosDesdeLocalStorage()&&{
    persona,
    registroCuenta,
    tarjetas: [fija1, fija2]
};
// Guardar los datos cuando se realicen cambios
function realizarCambiosEnCuenta(nuevaCuenta) {
    cuenta1 = nuevaCuenta;
    guardarDatosEnLocalStorage(nuevaCuenta);
}

var nuevaCuenta = {
    persona,
    registroCuenta,
    tarjetas: [fija1, fija2]
};

realizarCambiosEnCuenta(nuevaCuenta);


//INFO EXTERNA NECESARIA 

    //LA PERSONA YA ESTÁ AQUÍ 

var registroCuenta = { // LA CUENTA
    IBAN: "ES21 1465 0100 72 2030976293",
    saldo: 500
}

class Tarjeta {//la clase tarjeta para almacenarlas
    constructor(numero, cvv, activa) {
        this.numero = numero;
        this.cvv = cvv;
        this.activa = activa;
    }
}   
*/

/* EJERCICIO 1 
1.1) El botón Modificar Datos en caso de éxito debe volcar 
la información de al objeto persona y 
mostrar un mensaje en la parte inferior “Guardado los datos correctamente” en color verde

1.2) Si a la hora de guardar no se cumplen alguna de las siguientes validaciones se debe 
mostrar un mensaje de color rojo con la información del error. 
- El nombre debe contener entre 3 y 20 caracteres 
- El primer apellido debe contener entre 3 y 20 caracteres 
- El segundo apellido debe contener entre 3 y 20 caracteres 
- Nacionalidad debe contener entre 3 y 15 caracteres 
*/

