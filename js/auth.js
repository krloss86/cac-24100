function login() {
    //capturo el user / password
    const username = document.getElementById('usuario').value;
    const password = document.getElementById('usuario').value;

    //fetch al server con los datos por POST
    
    //GUARDA EN LOCAL LA RESPUESTA
    localStorage.setItem('USUARIO', username);
    
    //REDIRECT A LA PAGINA
    window.location.href = './crud.html'
}

function logout() {
    localStorage.removeItem('USUARIO');
    window.location.href = '/';
}

function isLogged() {
    //1 busco en localStorage
    const usuarioEnLocalStorage = localStorage.getItem('USUARIO');
    //verifico si existe el usuario
    if(!usuarioEnLocalStorage) {
        window.location.href = '/';//window es objeto del navegador
    }
}