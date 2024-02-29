db.createCollection("contas", {
    validator:{
        $jsonSchema:{
            bsonType:"object",
            required:["Numero_Conta", "Tipo", "CPF"],
            properties:{
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
                    description:"Informe corretamente o cpf do cliente na conta"
                }
            }
        }
    }
})