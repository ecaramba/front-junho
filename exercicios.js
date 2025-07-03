
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