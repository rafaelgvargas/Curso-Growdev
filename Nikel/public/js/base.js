const nome = "Rafael Vargas";
let nome2 = "";
let pessoaDefault = {
    nome: "Rafael",
    idade: "27",
    trabalho: "Programador"
}

let nomes = ["Rafael Vargas", "Jéssane Rodrigues"];
let pessoas = [
    {   
        nome: "Rafael",
        idade: "27",
        trabalho: "Programador"
    },
    {
        nome: "Jéssane",
        idade: "35",
        trabalho: "Programador Mobile"
    }
];


function AlterarNome() {
    nome2 = "Rafael Gonçalves"
    console.log("valor alterado:");
    console.log(nome2);
}

function recebeEalteraNome(novoNome) {
    nome2 = novoNome;
    console.log("valor alterado recebendo um nome:");
    console.log(nome2);
}

function imprimirPessoa(pessoa) {
    console.log("Nome:");
    console.log(pessoa.nome);

    console.log("Idade:");
    console.log(pessoa.idade);

    console.log("Trabalho:");
    console.log(pessoa.trabalho);

}

function adicionarPessoa(pessoa) {
    pessoas.push(pessoa);
}

function imprimirPessoas() {
    console.log("------------IMPRIMIR PESSOAS-----------")
    pessoas.forEach((item) => {
        console.log("nome");
        console.log(item.nome);

        console.log("Idade:");
        console.log(item.idade);

        console.log("Trabalho:");
        console.log(item.trabalho);
    })
}

adicionarPessoa({
    nome: "Rafael",
    idade: "27",
    trabalho: "Programador",
});

imprimirPessoas();

//imprimirPessoa(pessoaDefault);
//imprimirPessoa({
//   nome: "Rafael Vargas",
//    idade: "35",
//    trabalho: "Programador Mobile"
//});




//recebeEalteraNome("Rafael Gonçalves");
//recebeEalteraNome("Rafael Gonçalves Vargas");


//AlterarNome();