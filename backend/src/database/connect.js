const mongoose = require('mongoose')

const connectDB = async () => {
    await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@winelocals.7hxfs.mongodb.net/database?retryWrites=true&w=majority`, (error) => {
        if(error){
            return console.log('Erro ao conectar ao Banco de Dados: ', 
            error
            );
        }
        return console.log('Conexão ao banco de dados realizada com sucesso!');
    });
};

module.exports = connectDB;