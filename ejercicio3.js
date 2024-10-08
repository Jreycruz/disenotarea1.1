function consultarBD() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const numRandom = Math.floor(Math.random() * 100);
            numRandom % 2 === 0 ? resolve("Consulta exitosa") : reject("Error en la consulta");
        }, 3000);
    });
}

async function ejecutarConsulta() {
    try {
        const resultado = await consultarBD();
        console.log(resultado);
    } catch (error) {
        console.error(error);
    }
}

ejecutarConsulta();
