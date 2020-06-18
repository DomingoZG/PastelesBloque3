//ALTA PEDIDO

let botonAddPedido = document.querySelector("#botonAddPedido");
botonAddPedido.addEventListener("click", añadirPedido);

/* AÑADIR PEDIDO */

function añadirPedido() {
  let id = document.querySelector("#idPedido").value;
  let cliente = document.querySelector("#nCliente").value;
  let fecha = document.querySelector("#fechaPedido").value;
  let pastel = document.querySelector("#nombrePastel").value;
  //let lineaPedido = document.querySelector("#lineaPedido);
  if (validarId(id)) {
    let tempPedido = new Pedido(id, cliente, fecha,  pastel);
    if (miPasteleria.addPedido(tempPedido)) {
      alert("Pedido añadido correctamente");
    } else {
      alert("Id repetido, revise listado");
    }
  } else {
    alert("El Id introducido no es correcto");
  }
}