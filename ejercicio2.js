function simularConsultaBD() {
    return new Promise((resolver, rechazar) => {
        setTimeout(() => {
            const numeroRandom = Math.floor(Math.random() * 100);
            
            if (numeroRandom % 2 === 0) {
                resolver("Consulta exitosa");
            } else {
                rechazar("Error en la consulta");
            }
        }, 3000);
    });
}

simularConsultaBD()
    .then(mensajeExito => {
        console.log(mensajeExito);
    })
    .catch(mensajeError => {
        console.error(mensajeError);
    });
