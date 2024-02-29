// alteração as regras de validação na coleção "contas"
// definindo o nível de validação "validationLevel" que o MongoDB aplicará aos documentos nessas coleções
// alterando validação "validationAction" que não impedirá inserção do documento fora de conformidade, mas um aviso será gerado
db.runCommand({collMod:"contas",
    validator:{
        $jsonSchema:{
            bsonType:"object",
            "additionalProperties": false,
            required:["_id", "Numero_Conta", "Tipo", "CPF", "Valor", "Agência"],
            properties:{
                _id:{
                    bsonType: "objectId",
                }
                Numero_Conta:{
                    bsonType:"string",
                    description:"Informe corretamente o número da conta"
                },
                Tipo:{
                    bsonType:"string",
                    enum:["Conta corrente", "Conta poupança", "Conta salário"],
                    description:"Informe corretamente o tipo da conta"
                },
                CPF:{
                    bsonType:"string",
                    minLength: 14,
                    maxLength: 14,
                    description:"Informe corretamente o cpf do cliente na conta"
                },
                Valor:{
                    bsonType:"double",
                    description:"Informe corretamente o valor"
                },
                Agência:{
                    bsonType:"string",
                    description:"Informe corretamente a Agência"
                }
            }
        }
    },
    validationLevel: "moderate",
    validationAction: "warn"
})