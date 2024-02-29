// analisando informações e propriedades relevantes sobre a coleção "contas"
db.getCollectionInfos({name:"contas"})

// executando operação de consulta para retornar todos documentos presentes na coleção "contas"
db.contas.find()

// realizando atualização em um único documento 
db.contas.updateOne({"CPF": "426.239.760-23"}, {$set: {"Valor":1411}})