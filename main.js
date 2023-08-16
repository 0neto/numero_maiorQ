const form = document.getElementById('formulario-valido');

form.addEventListener('submit', function(e) {
    let formEValido = false;
    e.preventDefault();

const campoA = parseFloat (document.getElementById('campo-a').value);
const campoB = parseFloat (document.getElementById('campo-b').value);

function comparaNumero(campoA, campoB){
    if (campoB > campoA){
        alert('Formulário valido, pois o valor de B é maior que A');
        return true;
    } else {
        alert('Formulário invalido, pois o valor de A é maior que B');
        return false;
    }
}

formEValido == comparaNumero(campoA, campoB);

});