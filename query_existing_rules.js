// retornando informações da coleção "clientes"
db.getCollectionInfos({name:"clientes"})

// retornando informações da coleção "contas"
db.getCollectionInfos({name:"contas"})

// verificando informações e as regras de validação na coleção "contas"
db.runCommand({listCollections: 1, filter:{name:"contas"}})

// listando todas as coleções presentes no banco de dados
db.runCommand({listCollections: 2})