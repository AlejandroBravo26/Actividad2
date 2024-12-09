
const urlParams = new URLSearchParams(window.location.search);
const datosJSON = urlParams.get('datos');


const datosUsuario = JSON.parse(datosJSON);


const tablaBody = document.getElementById('datosUsuario');
const nuevaFila = document.createElement('tr');
nuevaFila.innerHTML = `
    <td>${datosUsuario.id}</td>
    <td>${datosUsuario.cedula}</td>
    <td>${datosUsuario.nombre}</td>
    <td>${datosUsuario.fechaNacimiento}</td>
    <td>${datosUsuario.ciudad}</td>
`;
tablaBody.appendChild(nuevaFila);