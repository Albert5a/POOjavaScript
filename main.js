// const carroDoJoao = {
//     modelo: 'Fiesta',
//     fabricante: 'Ford',
//     anoModelo: 2020,
//     anoFabricacao: 2019,
//     acelerar: function() {
//         console.log("vrum");
//     }
// }

// const carroDaMaria = {
//     modelo: 'Ka',
//     fabricante: 'Ford',
//     anoModelo: 2021,
//     anoFabricacao: 2020,
//     acelerar: function() {
//         console.log("vrum");
//     }
// }

function Carro(modelo, fabricante, anoModelo, anoFabricacao) {
    this.modelo = modelo;
    this.fabricante = fabricante;
    this.anoModelo = anoModelo;
    this.anoFabricacao = anoFabricacao;
    this.acelerar = function() {
        console.log("acelerar");
    }
}

const carroDoJoao2 = new Carro("Fiesta", "Ford", 2020, 2019);
const carroDaMaria2 = new Carro("Ka", "Ford", 2021, 2020);

const nome = "Albert";
const idade = 26;
const maior = true;
const conhece = ["html", "css", "js"];

const pessoa = {
    nome: nome,
    idade: idade,
    maior: maior,
    conhece: conhece,
}

console.log(pessoa.nome);
console.log(pessoa['nome']);

function exibeAtributo(nomeAtributo) {
    console.log(pessoa[nomeAtributo]);
}

exibeAtributo('nome');

/*
console.log(typeof nome);
console.log(typeof idade);
console.log(typeof maior);
console.log(typeof conhece);
console.log(typeof carroDaMaria2);

console.log(carroDaMaria2 instanceof Carro);
console.log(conhece instanceof Array);
*/

// console.log(carroDaMaria2 instanceof Object);


// pessoa.sobrenome = undefined;

// if (pessoa.sobrenome) {
//     console.log('A pessoa tem')
// } 

// if ('sobrenome' in pessoa) {
//     console.log('sim')
// }

Object.keys(pessoa);


console.log(Object.keys(pessoa));
// console.log(Object.keys(pessoa).length);
// console.log(Object.values(pessoa));
// delete pessoa['nome'];
// console.log(Object.keys(pessoa));