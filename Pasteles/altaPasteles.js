/*AÑADIR PASTELES*/

let botonAddPastel = document.querySelector("#botonAddPastel");
botonAddPastel.addEventListener("click", añadirPastel);

  function añadirPastel() 
  {
    let id = document.querySelector("#idPastel").value;
    let nombre = document.querySelector("#nombrePastel").value;
    let precio = document.querySelector("#precioPastel").value;
    let descripcion = document.querySelector("#descripcionPastel").value;

    if(validarId(id))
    {
      let pastelPrueba = new Pastel(id, nombre, precio, descripcion);
      if(miPasteleria.addPastel(pastelPrueba))
      {
        alert("Pastel añadido correctamente");

      }else
      {
        alert("El id esta repetido");

      }
    }
    else{
      alert("El id es incorrecto");
    }
  }


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