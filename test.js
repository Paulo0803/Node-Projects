const Sequelize = require('sequelize')
const sequelize = new Sequelize('teste', 'root', 'Paulo0108*', {
    host: 'localhost',
    dialect: 'mysql'
})

sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso!")
}).catch(function(erro){
    console.log("Erro de conexão!"+erro)
})

//postagem de blog
const Postagem = sequelize.define('postagens',{
    titulo:{
        type: Sequelize.STRING
    },
    conteudo:{
        type: Sequelize.TEXT
    },

})

Postagem.create({
    titulo: "Aoooobaaaaa",
    conteudo: "slddkasj lkdsalkdjsalk"
})

//Usuario

const Usuario = sequelize.define('usuarios',{
    nome: {
        type: Sequelize.STRING
    },

    sobrenome: {
        type: Sequelize.STRING
    },

    idade: {
        type: Sequelize.INTEGER
    },

    email: {
        type: Sequelize.STRING
    }
})

Usuario.create({
    nome: "Paulo Victor",
    sobrenome: "Brito",
    idade: "18",
    email:"paulo.brito.1313@gmail.com"

})

//Usuario.sync({force: true})