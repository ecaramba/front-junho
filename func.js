
// Programa
// E -> P -> S -> IO

// função -> subprograma -> subrotina -> modulos

var n1 = 5;
var n2 = 7;
var n3 = 6;
var n4 = 2;


function soma(n1, n2)
{
    var n3 = 1;
    var res = n1 + n2 + n3 + n4;
    return res;
}

function mult(n1, n2)
{
    var res = n1 * n2;
    return res;
}

console.log( soma(3, 5) );
console.log( soma(1, 4) );

function adicionar()
{
    var cidade = texto.value;

    var novo = "<li>"+ cidade +"</li>";

    if (lista.innerHTML.includes(novo) == false)
    {
        lista.innerHTML += novo;
    }

}