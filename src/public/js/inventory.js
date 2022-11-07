const btnEditar = document. createElement('img');
const btnEliminar = document. createElement('img');
const btnOcultar = document. createElement('img');
btnEditar.src='https://i.ibb.co/fx0mSYH/edit.png';
btnEliminar.src='https://i.ibb.co/YpXHCFN/delete.png';
btnOcultar.src='https://i.ibb.co/6DKwn6B/eye.png';

function generar_celda() {
  // Obtener la referencia del elemento table
  var tabla = document.getElementsByTagName("table")[0];
  // Crea un elemento <tbody>
  var tblBody = document.createElement("tbody");
  // Crea las celdas
  for (let i = 0; i < 1; i++) {
    // Crea las hileras de la tabla
    var hilera = document.createElement("tr");
    for (let j = 0; j < 7; j++) {
      // Crea un elemento <td> y un nodo de texto, haz que el nodo de
      // texto sea el contenido de <td>, ubica el elemento <td> al final
      // de la hilera de la tabla
      var celda = document.createElement("td");

      if (j==6) {
        var textoCelda = document.createElement('div');
        textoCelda.appendChild(btnEditar);
        textoCelda.appendChild(btnEliminar);
        textoCelda.appendChild(btnOcultar);
      }
      else {
        var textoCelda = document.createTextNode("Algo");
      }
      celda.appendChild(textoCelda);
      hilera.appendChild(celda);
    }
    // agrega la hilera al final de la tabla (al final del elemento tblbody)
    tblBody.appendChild(hilera);
  }
  // posiciona el <tbody> debajo del elemento <table>
  tabla.appendChild(tblBody);
  // appends <table> into <body>
  body.appendChild(tabla);
}

function mostrar_anadir() {
  document.getElementById('inventory-addProduct').style.visibility = "visible"; // show
  document.getElementById('form-button--wrapper').style.visibility = "visible"; // show
  document.getElementById('inventory-viewInventory').style.visibility = "hidden"; // hide
  document.getElementById('inventory-uploadInventory').style.visibility = "hidden"; // hide
}
function mostrar_inventario() {
  document.getElementById('inventory-viewInventory').style.visibility = "visible"; // show
  document.getElementById('inventory-addProduct').style.visibility = "hidden"; // hide
  document.getElementById('form-button--wrapper').style.visibility = "hidden"; // show
  document.getElementById('inventory-uploadInventory').style.visibility = "hidden"; // hide
}
function mostrar_subirInventario() {
  document.getElementById('inventory-uploadInventory').style.visibility = "visible"; // hide
  document.getElementById('inventory-addProduct').style.visibility = "hidden"; // show
  document.getElementById('form-button--wrapper').style.visibility = "hidden"; // show
  document.getElementById('inventory-viewInventory').style.visibility = "hidden"; // hide
}
