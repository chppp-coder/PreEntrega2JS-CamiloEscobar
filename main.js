let edades = [];

function calcularPromedio(edades) {
    if (edades.length === 0) {
        return 0; 
    }
    let sumaEdades = edades.reduce((total, edad) => total + edad, 0);
    return sumaEdades / edades.length;
}

function registrarEdad() {
    let nombre = prompt("¿Cuál es tu nombre?");
    let edad = prompt("¿Cuál es tu edad?");
    edad = parseInt(edad); 

    if (edad && !isNaN(edad)) { 
        alert("¡Muchas gracias! Queremos conocer a quienes están interesados en CS:GO :)");
        edades.push(edad); 
    } else {
        alert("Por favor, ingresa una edad válida.");
    }

    let promedio = calcularPromedio(edades);
    console.log("Edades registradas:", edades);
    console.log("Edad promedio:", promedio);
}

registrarEdad();