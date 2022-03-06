function MostrarAlerta(msj) {
    Swal.fire(msj)
}

function validaEntero(idIntpup, idSpan) {
    var valor = document.getElementById(idIntpup).value;
    document.getElementById(idIntpup).value = valor.trim();
    var span = document.getElementById(idSpan);
    var regex = new RegExp('^[0-9]+$');

    if (!regex.test(valor)) {
        span.innerHTML = 'Se requiere valor entero';
        span.style.display = 'block';
        return false;
    }
    else {
        span.innerHTML = '';
        span.style.display = 'none';
        return true;
    }

}