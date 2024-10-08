const inventario = [
    { producto: "Laptop", costo: 1200, tipo: "Electrónica" },
    { producto: "Cámara", costo: 800, tipo: "Electrónica" },
    { producto: "Sofá", costo: 400, tipo: "Muebles" },
    { producto: "Auriculares", costo: 150, tipo: "Electrónica" },
    { producto: "Mesa", costo: 250, tipo: "Muebles" }
];

const categoriaElegida = "Electrónica";
const nombresProductos = [];
let totalPrecio = 0;

inventario.forEach(item => {
    if (item.tipo === categoriaElegida) {
        nombresProductos.push(item.producto);
        totalPrecio += item.costo;
    }
});
