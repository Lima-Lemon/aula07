/* var nome = "Lucas";
// Em JS você não precisa identificar qual o estilo da constatação

var z; //undefined
var pessoa = null; //vazio

var nomeCompleto = "Lucas Lima de Paula"

var num1 = 10;
var num2 = 5;

var resultado = num1 / num2;

var lista = [10,20,30];

var objeto = { 
        nome:'joão', 
        sobrenome:'silva'
};

console.log(resultado); */

/*var numero = 18;

if ((numero % 2) == 0) {
    console.log("Par");
} else {
    console.log("Ímpar");
}*/

// Voto obrigatório: 18 a 65 anos
// facultativo: 16 a 18 e acima de 65
/*
var idade = 70;

if ((idade >= 18) && (idade<= 65)){
    console.log("Voto Obrigatório!");
} else {
    console.log("Voto Facultativo!")
}
 */
/*
 var numeroPositivo = 1;
 var numeroNegativo = -1;
 var numeroDecimal = 0.5;
 var string = "string";
 var verdadeiro = true;

 console.log(numeroPositivo);
 console.log(numeroNegativo);
 console.log(numeroDecimal);
 console.log(string);
 console.log(verdadeiro);
 
 var nome = "Lucas";
 var sobrenome = "Lima";

 console.log(nome + " " + sobrenome);

 var nome = "Clara";
 console.log(nome, sobrenome, numeroDecimal);

 var texto = "dddddddddddddddddddddddddddddddddddddddddd\ndddddddiwajdiojawiodjaiwojdioajidojwiodjioaw\njdiajwdioawiodja wdjaoidjiaowdjioawjdioadiojadjaiowdjaiwdo"
 
console.log(texto);

var valorNulo = null;
var naoDefinido = undefined;

console.log(valorNulo, naoDefinido);

var frutas = ["mamão", "banana", "pêra", "maçã", "caqui"];
console.log(frutas, frutas[1]);

var digital = "Digital House, a escola de programação que forma novas gerações de coders e profissionais digitais para imaginar, inovar e criar o que sempre sonharam"


*/
/*var mes = 7;
switch(mes){

    case 1: console.log("Janeiro");
            break;
    case 2: console.log("Fevereiro");
            break;
    case 3: console.log("Março");
            break;
    case 4: console.log("Abril");
            break;
    default: console.log("Mês não existe!");
            break;
}*/
/*
var numero = 0;

while (numero < 3) {
    console.log('Olá ' + numero);
    numero++;
}

console.log(numero);
/*
do{
    console.log('Olá ' + numero);
    numero++;
}while(numero < 3);
*/
/*
var numero = 0;

for(var numero = 0; numero < 3; numero++) {
    console.log('Olá ' + numero);
}

console.log(numero);


var lista = [10, 20, 30];

for(var elemento in lista){
    console.log(lista[elemento]);
}
*/

var obj = {
    nome: 'rafael',
    sobrenome: 'Lopes'
};

for(var n in obj){
    console.log(n + ": " + obj[n]);
}