
function oi()
{
    var valor = texto.value;
    console.log(valor.toUpperCase());
}

function letra()
{
    // pega o valor do input
    var valor = texto.value;
    var letra = valor.charAt(0);
    var resto = valor.slice(1)
    var res = letra.toUpperCase() + resto.toLowerCase();

    console.log(resposta);

    // escrevendo dentro do dov
    resposta.innerText = res;
}