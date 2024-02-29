// modificando regras de validação para a coleção de produtos
db.runCommand({collMod:"Produtos",
    validator:
    {
        $jsonSchema:
        {
            bsonType: "object",
            "additionalProperties": false,
                required:["ID", "Descrição", "Embalagem"],
                properties:{
                    ID:{
                        bsonType:"int"
                    },
                    Descrição:{
                        bsonType:"string",
                        maxLength:50,
                        description:"Informe corretamente a descrição"
                    },
                    Embalagem:{
                        bsonType:"string",
                        enum:["Caixa", "Garrafa", "Fardo"],
                        description:"Informe corretametne a embalagem"
                    },
                    Quantidade:{
                        bsonType:"int"
                    },
                    Preço:{
                        bsonType:"double"
                    }
                }
})