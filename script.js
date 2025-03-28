// Array de datos bale y miri y ceci son pro
const nombres = [
    { id: 340195, nombre: "Bale" },
    { id: 260982, nombre: "Robert" },
];
//dab
// Referencia al cuerpo de la tabla
const tablaNombres = document.getElementById("tabla-nombres");

// Generar dinámicamente las filas
nombres.forEach(persona => {
    const fila = document.createElement("tr");
    fila.innerHTML = `
        <td>${persona.id}</td>
        <td>${persona.nombre}</td>
    `;
    tablaNombres.appendChild(fila);
});
