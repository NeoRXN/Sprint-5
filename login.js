let registros = []
exports.registros = registros;

exports.agregarRegistro = () => {
    const { value: contrasena } = document.getElementById('contrasena')
    const { value: correo } = document.getElementById('correo')
    const { value: num_documento } = document.getElementById('numero-documento')
    const { value: documentType } = document.getElementById('tipo-documento')
    registros.push(({
        contrasena,
        correo,
        num_documento,
        documentType
    }))
}

const valor = document.getElementById('captcha');
function validarCAPTCHA(valor){
    if (valor != 15) {
        return false
    }else{
        return true
    }
}


function login() {
    const contraLog = document.getElementById('contrasena')
    const correoLog = document.getElementById('correo')
      if (contraLog == contrasena & correoLog == correo) {
        if (validarCAPTCHA()){
         return true
        } else {
            return false
        }
}else {
    return false
}
}

module.exports.validarCAPTCHA = validarCAPTCHA;
module.exports.login = login;