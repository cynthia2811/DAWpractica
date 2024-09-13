
function cargarDatos(){
    /*document.getElementById('idPersona').value = persona.id
    document.getElementById('nombre').value = persona.nombre
    document.getElementById('apellido1').value = persona.apellido1
    document.getElementById('apellido2').value = persona.apellido2
    document.getElementById('nacionalidad').value = persona.nacionalidad*/
    menu = document.getElementById('menu').innerHTML
}

function cargarCabecera(dest){  
    document.getElementById(dest).innerHTML = '   <h1>BancoPuertollano</h1>    <ul>        <li><a href="index.html">Inicio</a></li>        <li><a href="infoCuenta.html">Informaci&#243;n Cuenta</a></li>             <li><a href="tarjetas.html">Tarjetas</a></li>    </ul>' 
   }
 
const botonGuardar = document.getElementById('guardarTarjeta');
const CVV = document.getElementById("cvv")   


const tabla = document.getElementById("tablaTarjetas")  
tabla.style.width = "600px";
tabla.style.border = "2px";

botonGuardar.addEventListener('click', function(event) {
    guardarTarjeta()
})

class Tarjeta {//la clase tarjeta para almacenarlas
    constructor(numero, cvv, activa,) {
        this.iban = 'ES21 1465 0100 72 2030876293';
        this.numero = numero;
        this.cvv = cvv;
        this.activa = activa;
    }
}   

const fija1 = new Tarjeta('1234567122456','123', 'Si');
const fija2 = new Tarjeta('1234567122456','123', 'No');

var arrayTarjetas = [fija1, fija2];

function inicioTarjeta() { //para cargar las tarjetas iniciales 
    arrayTarjetas.forEach(function (nuevaTarjeta) {
        
        let fila = tabla.insertRow(-1);
        let iban = fila.insertCell(0)
        let cuenta = fila.insertCell(1);
        let cvv = fila.insertCell(2);
        let activa = fila.insertCell(3);

        iban.innerHTML = nuevaTarjeta.iban
        cuenta.innerHTML = nuevaTarjeta.numero
        cvv.innerHTML = nuevaTarjeta.cvv
        activa.innerHTML = nuevaTarjeta.activa
    });
}    

function guardarTarjeta() {
    let numero = /^\d{3}$/;
    var numeroTarjeta = (document.getElementById('nombre')).value;
    var cvvRegistro = (document.getElementById('cvv')).value;
    var activaVal = (document.getElementById('activa')).value;

    if (numero.test(cvvRegistro)){ //El campo CVV debe contener solo 3 dígitos.
        var tarjeta = new Tarjeta(numeroTarjeta, cvvRegistro, activaVal); // creamos una nueva
        arrayTarjetas.push(tarjeta); //añadimos la tarjeta
            
        //creamos una nueva fila a la tabla y le añadimos los espacios
        var fila = tabla.insertRow();
        var iban = fila.insertCell();
        var cuenta = fila.insertCell();
        var cvv = fila.insertCell();
        var activa = fila.insertCell();

        //metemos en los espacios los valores introducidos
        iban.innerHTML = tarjeta.iban
        cuenta.innerHTML = numeroTarjeta
        cvv.innerHTML = cvvRegistro
        activa.innerHTML = activaVal
    }else{//sino errror
        msg.textContent = 'error';
    }   
}

   /* ENUNCIADO EJERCICIO 3
   3.1) Cada cuenta puede tener tarjetas de crédito asociadas, las tarjetas están compuestas del número de tarjeta y si están activas o no. 
   Esta tabla es dinámica, cuando el usuario guarde una tarjeta el contenido de la tabla debe registrar la nueva tarjeta.

   3.2) Inicialmente se deben tener cargadas las tarjetas que aparecen por defecto, el campo número tarjeta en el apartado de agregar debe seguir el mismo patrón que el mostrado anteriormente. 
   El campo CVV debe contener solo 3 dígitos.
   */


