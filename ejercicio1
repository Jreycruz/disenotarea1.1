function obtenerListaUsuarios() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(respuesta => {
            if (!respuesta.ok) {
                throw new Error('Error en la red: ' + respuesta.status);
            }
            return respuesta.json();
        })
        .then(listaUsuarios => {
            listaUsuarios.forEach(usuario => {
                console.log(`Nombre: ${usuario.name}, Correo: ${usuario.email}`);
            });
        })
        .catch(error => {
            console.error('Ha ocurrido un error:', error);
        });
}

obtenerListaUsuarios();
