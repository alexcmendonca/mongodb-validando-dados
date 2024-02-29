// inserindo novos cliente
db.clientes.insert({
     "nome": "Emanuelly Raquel Peixoto",
     "cpf": "587.179.508-05", 
     "data_nascimento": "24/05/1966", 
     "genero": "Feminino", 
     "profissao": "Gerente de loja", 
     "endereco": "Rua São Bento Abade, número 833, Jardim Marilena, Guarulhos, SP, 07140-450", 
     "status_civil": "Viúvo(a)"
})

db.clientes.insertOne({
    "nome": "Filipe Leonardo Corte Real",
    "cpf": "280.448.684-29", 
    "genero": "Masculino",
    "profissao": "Surpevisor de vendas comercial",
    "data_nascimento": null,
    "endereco": "Avenida Aeroclube, número 156, Tambor, Campina Grande, PB, 58414-710",
    "status_civil": "Casado(a)"
})

// inserindo nova conta
db.contas.insertOne({
    "Numero_Conta": "1786128-P",
    "Agência": "2885", 
    "Tipo": "Conta salário",
    "CPF": "587.179.508-05", 
    "Valor": 3.041
})

// executando operação de consulta para retornar todos documentos presentes na coleção "clientes"
db.clientes.find()