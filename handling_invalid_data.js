// consultando e modificando documentos com dados inválidos armazenados nas coleções após criação das regras de validação
// tratando documentos com campos inválidos dentro da regra atualizada de validação
// execução de código a partir de linha de comando através do mongosh
// utilizando operador $jsonSchema e criando objeto/variável
let clientes = {
    $jsonSchema:{
                bsonType: "object",
                "additionalProperties": false,
                required:["_id", "nome", "cpf", "status_civil", "data_nascimento", "endereco", "genero", "profissao"],
                properties:{
                    _id:{
                        bsonType: "objectId",
                    }
                    nome:{
                        bsonType: "string",
                        maxLength: 150,
                        description: "informe corretamente o nome do cliente"
                    },
                    cpf:{
                        bsonType: "string",
                        minLength: 14,
                        maxLength: 14,
                        description: "informe corretamente o cpf do cliente"
                    },
                    status_civil:{
                        bsonType: "string",
                        enum:["Solteiro(a)", "Casado(a)", "Separado(a)", "Divorciado(a)", "Viúvo(a)"],
                        description: "informe corretamente o status civil do cliente"
                    },
                    data_nascimento:{
                        bsonType: ["string", "null"]
                        description: "informe corretamente a data de nascimento do cliente"
                    },
                    endereco:{
                        bsonType: "string",
                        description: "informe corretamente o endereço do cliente"
                    },
                    genero:{
                        bsonType: "string",
                        description: "informe corretamente o genero do cliente"
                    },
                    profissao:{
                        bsonType: "string",
                        description: "informe corretamente o profissao do cliente"
                    }
                }
            }

}

// execução código via linha de comando utilizando variável
// retornará apenas os documentos que estão de acordo com a regra de validação
db.clientes.find(clientes)

// execução código via linha de comando utilizando variável
// retornará apenas os documentos que não correspondem às regras de validação
db.clientes.find({$nor: [clientes]})

// após analisar os conteúdos retornados, há várias abordagens possíveis para aplicar o tratamento nos dados
// uma abordagem possível é a exclusão dos dados que não atendem as regras de validação
// execução código via linha de comando utilizando variável
db.clientes.deleteOne({$nor: [clientes]})


