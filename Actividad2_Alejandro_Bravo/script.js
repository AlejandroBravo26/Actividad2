
function compararNumeros() {
    const numero1 = parseInt(document.getElementById('numero1').value);
    const numero2 = parseInt(document.getElementById('numero2').value);
    const resultado = document.getElementById('resultadoComparacion');

    if (numero1 > numero2) {
        resultado.textContent = `El número mayor es: ${numero1}`;
    } else if (numero2 > numero1) {
        resultado.textContent = `El número mayor es: ${numero2}`;
    } else {
        resultado.textContent = "Ambos números son iguales";
    }
}


function obtenerMes() {
    const mesNumero = parseInt(document.getElementById('mes').value);
    const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    const nombreMes = meses[mesNumero - 1]; 

 
    const resultadoMes = document.getElementById('resultadoMes');

    
    resultadoMes.textContent = nombreMes;
}




let nombres = [];

function agregarNombre() {
    const nombre = document.getElementById('nombre').value;
    nombres.push(nombre);

    const lista = document.getElementById('listaNombres');
    lista.innerHTML = ''; 

    nombres.forEach(nombre => {
        const li = document.createElement('li');
        li.textContent = nombre;
        lista.appendChild(li);
    });
}


const formulario = document.getElementById('registroForm');

formulario.addEventListener('submit', (event) => {
    event.preventDefault();


    const id = document.getElementById('id').value;
    const cedula = document.getElementById('cedula').value;
    const nombre = document.getElementById('nombre').value;
    const fechaNacimiento = document.getElementById('fechaNacimiento').value;
    const ciudad = document.getElementById('ciudad').value;

    
    if (id.trim() === '' || cedula.trim() === '' || nombre.trim() === '' || fechaNacimiento.trim() === '' || ciudad.trim() === '') {
        alert('Por favor, completa todos los campos.');
        return;
    }

    
    const datosUsuario = {
        id,
        cedula,
        nombre,
        fechaNacimiento,
        ciudad
    };

  
    const datosJSON = JSON.stringify(datosUsuario);

 
    window.location.href = `datos.html?datos=${datosJSON}`;
});