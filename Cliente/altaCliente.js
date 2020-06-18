
//ALTA DE CLIENTES//

let botonAddCliente = document.querySelector("#botonAddCliente");
botonAddCliente.addEventListener("click", addClienteConComprobacion);

/* AÑADIR CLIENTES */

function addClienteConComprobacion() {
  let dni = document.querySelector("#dniCliente").value;
  let nombre = document.querySelector("#nombreCliente").value;
  let telefono = document.querySelector("#tlfCliente").value;
  let direccion = document.querySelector("#dirCliente").value;
  if (validarDni(dni)) {
    let tempCliente = new Cliente(dni, nombre, telefono, direccion);
    if (miPasteleria.addCliente(tempCliente)) {
      alert("Cliente añadido correctamente");
    } else {
      alert("DNI repetido, revise listado");
     
    }
  } else {
    alert("El DNI introducido no es correcto");
    
  }
}
function reseteo() {
  document.getElementById("formuCliente").reset();
  document.getElementById("formuEmpleados").reset();
  document.getElementById("formuPasteles").reset();
  document.getElementById("formuPedido").reset();
  document.getElementById("formuEstablecimiento").reset();
}



/*

//LISTADO CLIENTES

document
.querySelector("#listadoCliente")
.addEventListener("click", listadoClientes);

function listadoClientes() {
mostrar("#divMostrarListaClientes");
let tabla = genTablaClientes(
  ["DNI", "Nombre", "Teléfono", "Direccion"],
  "estaTablaClientes"
);
let oTablaAnterior = document.querySelector("#divMostrarListaClientes table ");
if(oTablaAnterior!=null)
{
  oTablaAnterior.remove();
}
document.querySelector("#divMostrarListaClientes").appendChild(tabla);
miPasteleria.personas.forEach(cliente =>{if(cliente instanceof Cliente)
  document
    .querySelector("#estaTablaClientes")
    .tBodies[0].appendChild(cliente.HTMLrow())
}
);
}

//Para hacer la tabla del listado clientes

function genTablaClientes(array, id) {
let tabla = document.createElement("TABLE");
tabla.id = id;
tabla.classList.add("table");
let thead = tabla.createTHead();
let fila = thead.insertRow(-1);
array.forEach(titulo => {
  th = fila.insertCell(-1);
  th.textContent = titulo;
});
tabla.addEventListener("click", e => {
  let idCliente;
  if (e.target.tagName == "BUTTON") {
    idCliente = e.target.parentNode.parentNode.cells[0].textContent;
    miPasteleria.delCliente(idCliente);
    e.target.parentNode.parentNode.remove();
  }
});
tabla.appendChild(document.createElement("TBODY"));
return tabla;
}
*/

//Fin clientes//////

   function instanciarXHR() {
    var xhttp = null;

    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest();
    } else // code for IE5 and IE6
    {
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    return xhttp;
}
