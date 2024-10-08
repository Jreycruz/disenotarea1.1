const listaTareas = [];

function agregarActividad(descripcion) {
    const nuevaActividad = {
        descripcion: descripcion,
        completada: false
    };
    listaTareas.push(nuevaActividad);
}

function marcarActividadComoCompletada(descripcion) {
    const actividad = listaTareas.find(a => a.descripcion === descripcion);
    if (actividad) {
        actividad.completada = true;
    }
}

function listarActividadesPendientes() {
    const pendientes = listaTareas.filter(a => !a.completada);
    console.log("Actividades pendientes:");
    pendientes.forEach(a => console.log(`- ${a.descripcion}`));
}

function listarActividadesCompletadas() {
    const completadas = listaTareas.filter(a => a.completada);
    console.log("Actividades completadas:");
    completadas.forEach(a => console.log(`- ${a.descripcion}`));
}
