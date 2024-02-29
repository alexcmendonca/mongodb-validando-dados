// alteração as regras de validação na coleção "clientes"
// definindo o nível de validação "validationLevel" que o MongoDB aplicará aos documentos nessas coleções
// alterando validação "validationAction" que não impedirá inserção do documento fora de conformidade, mas um aviso será gerado
db.runCommand({collMod: "clientes",
    validator:{
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
        validationLevel: "moderate",
        validationAction: "warn"
})