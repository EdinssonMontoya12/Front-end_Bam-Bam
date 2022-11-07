const url='inventario.json';
var content=document.querySelector('#content')
function viewbilling() {
  fetch(url)
    .then(res=>res.json())
    .then(data=>{
      tbody(data)
    })
    .catch(err=>console.error(err));
}
function tbody(data) {
  content.innerHTML=''
  for (let i of data) {
    content.innerHTML+=`
    <tr>
      <td>${i.prefijo}</td>
      <td>${i.cliente}</td>
      <td>${i.fecha}</td>
      <td>${i.asentado}</td>
      <td>${i.valor}</th>
    </tr>
    `;
  }
}
