# MongoDB: Validando dados

## 💡Objetivos
Criar regras de validação e ajustar regras existentes, tratar de maneira eficiente documentos inválidos: consultando, modificando e até removendo-os de nossas coleções. Adicionalmente, adquirir expertise em desconsiderar a validação de esquema somente no momento de inserir documentos nas coleções.

###### Imagem 1: MongoDB é um banco de dados NoSQL baseado em documentos
<img src="/img/etapas-pipeline.png">


## 🖥️Desafios do Projeto
Neste projeto com MongoDB, foi utilizada a ferramenta NoSQLBooster, uma interface gráfica gratuita e multiplataforma, para executar códigos de forma eficiente. O desafio deste projeto reside na resolução dos seguintes problemas: documentos em uma mesma coleção apresentando tipos de dados distintos em seus campos(no contexto deste projeto não permite); campos obrigatórios não sendo devidamente preenchidos; e informações sendo transmitidas de forma inadequada. Para solucionar essas questões, foi aplicado conceitos avançados de modelagem de dados, aproveitando o esquema flexível do MongoDB. Isso envolveu a criação, validação e modificação de regras para garantir a consistência dos dados, além do tratamento de documentos inválidos por meio de consultas, modificações e, quando necessário, remoção das coleções. Por fim, fazendo uso da técnica de ignorar a validação de esquema apenas durante a inserção de documentos nas coleções, garantindo assim uma integração suave e eficaz dos dados.

###### Imagem 2: Ferramenta NoSQLBooster
<img src="/img/nosqlbooster.png">


## 📄Conhecimentos Desenvolvidos
|Atividades|Realizadas |
|----------|-----------|
| Reconhecer a importância da Modelagem de dados | Conhecer sobre o padrões de Modelagem |
| Entender sobre o esquema flexível do MongoDB | Aprender sobre validação de esquema no MongoDB |
| Estudar sobre os operadores de consulta de avaliação | Conhecer o $jsonSchema |
| Instalar o MongoDB e o NoSQLBooster | Conhecer como criar um banco de dados no NoSQLBoostes |
| Criar as regras de validação da coleção de clientes | Elaborar as regras de validação da coleção de contas |
| Gerar os primeiros documentos após a criação das regras de validação | Consultar as regras de validação existentes |
| Modificar as regras de validação das coleções | Verificar o nível de validação dos dados para cada coleção |
| Identificar como lidar com documentos inválidos | Conhecer como consultar e manipular os documentos utilizando o esquema |
| Discernir como ignorar as regras de validação no momento de inserir documentos |  |


## 🔍Referências
- [Alura](https://www.alura.com.br/)