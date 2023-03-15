function Pessoa(nome) {
    this.nome = nome;
    this.dizOi = function() {
        console.log(this.nome + " diz olá");
    }
}

function Funcionario(nome, cargo, salario) {
    this.cargo = cargo;
    this.salario = salario;

    this.dizCargo = function() {
        console.log(this.cargo);
    }

    Pessoa.call(this, nome); //this se refere ao funcionário
}

const funcionario1 = new Funcionario("Maria", "dev", 5000);
const pessoa = new Pessoa("Albert");

funcionario1.dizOi();
funcionario1.dizCargo();