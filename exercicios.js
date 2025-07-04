
/*
 Fatorial

 5! = 5 * 4 * 3 * 2 * 1 = 120

*/
function ex61()
{
    var valor = texto.value;
 
    var ini = parseInt(valor);
    var total = 1;

    var conta = valor +"! = ";

    while (ini > 1)
    {
        total = total * ini;
        conta += ini + " * ";

        ini -= 1;
    }

    resposta.innerText = conta + " 1 = " + total;
    
}

// finonacci
function ex60()
{
    var valor = texto.value;

    var n1 = 1;
    var n2 = 1;

    var ini = 3;
    
    var prox = 1;

    resposta.innerText = "1,1,";

    while (ini <= valor)
    {
        prox = n1 + n2;
        n1 = n2;
        n2 = prox;
        ini += 1;

        resposta.innerText += prox + ","
    }
}

function ex59()
{
    
    var quantPar   = 0;
    var quantImpar = 0;

    for (var ini = 1; ini <= 10; ini++)
    {
        var num = prompt("digite um numero");
        var div = num % 2;

        if (div == 0)
        {
            quantPar += 1;
        } else {
            quantImpar += 1;
        }

    }

    resposta.innerText = "Num Pares: "+quantPar + "Num Impar: " + quantImpar;
}