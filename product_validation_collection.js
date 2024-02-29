db.createCollection("Produtos", {
    validator:
    {
        $jsonSchema:
        {
            bsonType: "object",
                required:["ID", "Descrição", "Embalagem"],
                properties:{
                    ID:{
                        bsonType:"int"
                    },
                    Descrição:{
                        bsonType:"string",
                        description:"Informe corretamente a descrição"
                    },
                    Embalagem:{
                        bsonType:"string",
                        description:"Informe corretametne a embalagem"
                    },
                    Quantidade:{
                        bsonType:"int"
                    },
                    Preço:{
                        bsonType:"double"
                    }
                }
                
        }
    }
})