
/*
//CARGAR LOS ARCHIVOS XML 
function loadXMLDoc(filename) 
{
  let xhttp = null;
  if (window.XMLHttpRequest) 
  {
    xhttp = new XMLHttpRequest();
  } else 
  {
    xhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xhttp.open("GET", filename, false);
  xhttp.send();
  return xhttp.responseXML;
}

//CARGAR XML DE CLIENTES



function addXmlClientes() {
  let datos = loadXMLDoc("xml/cliente.xml");
  datos.querySelectorAll("cliente").forEach(cliente => {
    let dni = cliente.getAttribute("dni");
    let nombre = cliente.querySelector("nombre").textContent;
    let telefono = cliente.querySelector("telefono").textContent;
    let direccion = cliente.querySelector("direccion").textContent;
    miPasteleria.addCliente(new Cliente(dni, nombre, telefono, direccion));
  });
}



//CARGA XML DE EMPLEADOS
function addXmlEmpleados() {
  let datos = loadXMLDoc("xml/empleado.xml");
  datos.querySelectorAll("empleado").forEach(empleado => {
    let dni = empleado.getAttribute("dni");
    let nombre = empleado.querySelector("nombre").textContent;
    let email = empleado.querySelector("email").textContent;
    let telefono = empleado.querySelector("telefono").textContent;
    let cargo = empleado.querySelector("cargo").textContent;
    miPasteleria.addEmpleado(new Empleado(dni, nombre, email, telefono, cargo));
  });
}
      
                           
//CARGA XML PASTELES
function addXmlPastel() {
  let datos = loadXMLDoc("xml/pastel.xml");
  datos.querySelectorAll("pastel").forEach(pastel => {
    let id = pastel.getAttribute("id");
    let nombre = pastel.querySelector("nombre").textContent;
    let precio = pastel.querySelector("precio").textContent;
    let descripcion = pastel.querySelector("descripcion").textContent;
    
    miPasteleria.addPastel(new Pastel(id, nombre, precio, descripcion ));
  });
}


//CARGAR XML ESTABLECIMIENTOS
function addXmlEstablecimiento() {
  let datos = loadXMLDoc("xml/establecimiento.xml");
  datos.querySelectorAll("establecimiento").forEach(establecimiento =>{
   let nif = establecimiento.getAttribute("nif");
   let numEmpleados = establecimiento.querySelector("numEmpleados").textContent;
   let nombre = establecimiento.querySelector("nombre").textContent;

   miPasteleria.addEstablecimiento(new Establecimiento(nif, numEmpleados, nombre));
  });
}

//CARGAR XML PEDIDO

function addXmlPedido() {
  let datos = loadXMLDoc("xml/pedido.xml");
  datos.querySelectorAll("pedido").forEach(pedido => {
    let id = pedido.getAttribute("id");
    let cliente = pedido.querySelector("cliente").textContent;
    let fecha = pedido.querySelector("fecha").textContent;
    let pastel = pedido.querySelector("pastel").textContent;
    miPasteleria.addPedido(new Pedido(id, cliente, fecha, pastel));
  });
}



addXmlEmpleados();
addXmlClientes();
addXmlPastel();
addXmlEstablecimiento();
addXmlPedido();

*/
/* MOSTRAR LOS FORMULARIOS */

function ocultar() 
{
    let divHijos = document
      .querySelector("#contenido")
      .querySelectorAll(".divHijo");
    divHijos.forEach(value =>
         {
      let x = value;
      x.style.display = "none";
    });
  }
  
  function mostrar(x) 
  {
    ocultar();
    document.querySelector(x).style.display = "block";
  }