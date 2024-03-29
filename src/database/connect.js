const { error } = require("console");
const { connect } = require("http2");
const mongoose = require("mongoose");

const connectToDatabase = async () => {
  await mongoose.connect(
    `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.mtih0xq.mongodb.net/database?retryWrites=true&w=majority`,
    (error) => {
      if (error) {
        return console.log(
          "Ocorreu um erro ao se conectar ao banco de dados. ",
          error
        );
      }

      return console.log("Conexão ao banco de dados realizada com sucesso.");
    }
  );
};

module.exports = connectToDatabase;
