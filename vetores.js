
var cidade = "Curitiba";
var cidade2 = "Pinhais";

// vetores -> array
var cidades = ["Curitiba", "Pinhais", "Colombo"];

// add no final
cidades.push("São Paulo");

// add no inicio
cidades.unshift("Campo Largo");

// remove itens
cidades.splice(2, 1);

// imprime todo o vetor
console.log(cidades);

// imprime apenas 1 item
console.log(cidades[3])


// loops -> laços de repetição

var ini = 1;
var fim = 10;

while (ini <= fim)
{
    console.log(ini);
    ini = ini + 1;
}

// ordem decrescente
var ini = 10;
var fim = 1;

while (ini >= fim)
{
    console.log(ini);
    ini = ini - 1;
}

// imprimir as cidades

var ini = 0;
var fim = cidades.length - 1;

while (ini <= fim)
{
    console.log(cidades[ini]);
    //ini = ini + 1;
    //ini += 1;
    ini++;
}

// usando for
for (var ini = 0; ini <= cidades.length - 1; ini++)
{
    console.log(cidades[ini]);
}
