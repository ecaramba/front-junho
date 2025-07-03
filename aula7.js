
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

function ex28()
{
    var valor = texto.value;

    if (valor == "M")
    {
        resposta.innerText = "Bom dia!";
    } else if (valor == "V")
    {
        resposta.innerText = "Boa Tarde!";
    } else if (valor == "N")
    {
        resposta.innerText = "Boa Noite";
    } else {
        resposta.innerText = "Valor inválido";
    }
}


/*
    baseado no valor digitado
    retorno o seguinte resultado:
    - maior de 18 anos, Adulto
    - maior de 60 anos, Idoso
    - menor de 18 anos, Menor
    - menos de 12 anos,  criança
    - menos de 2 anos, Bebe de Colo
    - menos que 0 ou maior de 100, idade invalida 
*/
function idade()
{
    var valor = texto.value;
    var idade = parseInt(valor);


    if (idade < 0 || idade > 100)
    {
        resposta.innerText = "Invalido";
    } else if (idade >= 60)
    {
        resposta.innerText = "Idoso";
    } else if (idade >= 18)
    {
        resposta.innerText = "Adulto";
    } else if (idade <= 2)
    {
        resposta.innerText = "Bebe";
    }
      else if (idade <= 12) 
    {
        resposta.innerText = "Criança";
    } else if (idade < 18)
    {
        resposta.innerText = "Menor";
    } 
     

}