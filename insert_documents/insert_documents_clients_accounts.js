// inserindo novo documento na coleção "clientes", representando info de um cliente específico
db.clientes.insertOne({
    "nome": "Allana Esther Lara Monteiro",
    "cpf": "207.588.703-96",
    "data_nascimento": "15/03/1962",
    "genero": "Feminino",
    "profissao": "Servente de obras",
    "endereco": "Rua Deputado João Moura Santos, número 155, Matadouro, Teresina, PI, 64004-340",
    "status_civil": "Divorciado(a)"
})

db.clientes.insertOne({
 "nome": "Cauê Luan da Paz",
 "cpf": "426.239.760-23",
 "data_nascimento": "16/02/1967",
 "genero": "Masculino", 
 "profissao": "Vendedor em comércio atacadista", 
 "endereco": "Rua Vinte e Quatro, número 121, Três Vendas, Pelotas, RS, 96071-380", 
 "status_civil": "Casado(a)"
})

// cadastrando conta do cliente
db.contas.insertOne({
    "Numero_Conta": "04938-1",
    "Agência": "5575",
    "Tipo": "Conta salário",
    "CPF": "207.588.703-96",
    "Valor": 308
})

db.contas.insertOne({
    "Numero_Conta": "0265177-7",
    "Agência": "0944",
    "Tipo": "Conta salário",
    "CPF": "426.239.760-23",
    "Valor": "1411"
})

// operação de consulta no MongoDB para buscar documentos na coleção "clientes"
db.clientes.find()

// operação de consulta no MongoDB para buscar documentos na coleção "clientes"
db.contas.find()

// inserção na coleção clientes com diversos documentos de uma única vez
db.clientes.insertMany([{
    "nome": "Juliana Eloá Brito", 
    "cpf": "208.862.381-70",
    "data_nascimento": "26/06/1991", 
    "genero": "Feminino", 
    "profissao": "Trabalhador de serviços de limpeza", 
    "endereco": "Rua Euza D'Aparecida Roriz dos Anjos, número 617, Setor Leste, Luziânia, GO, 72803-590", 
    "status_civil": "Solteiro(a)"
    },{
    "nome": "Luan Caio da Silva", 
    "cpf": "520.233.763-94", 
    "data_nascimento": "14/10/1949", 
    "genero": "Masculino", 
    "profissao": "Atendente de farmácia", 
    "endereco": "Rua João Alberto, número 224, Santa Clara, São Luís, MA, 65058-623", 
    "status_civil": "Viúvo(a)"
}])

// inserção na coleção contas com diversos documentos de uma única vez
db.contas.insertMany([{
    "Numero_Conta": "0189393-9", 
    "Agência": "0289", 
    "Tipo": "Conta salário",
    "CPF": "208.862.381-70", 
    "Valor": 5242
    }, {
    "Numero_Conta": "67314-4", 
    "Agência": "7147", 
    "Tipo": "Conta poupança", 
    "CPF": "520.233.763-94"
}])