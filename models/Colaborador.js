const Administrador = require("./Administrador");
const Procedimento = require("./Procedimento");
const Tatuador = require("./Tatuador");
const Usuario = require("./Usuario");
const db = require("./db")

const Colaborador = db.sequelize.define('Colaborador', {
  id_colaborador: {
    type: db.Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: {
    type: db.Sequelize.STRING,
  },
  cpf: {
    type: db.Sequelize.STRING,
  },
  telefone: {
    type: db.Sequelize.STRING,
  },
  email: {
    type: db.Sequelize.STRING,
  },
  redeSocial: {
    type: db.Sequelize.STRING,
  }
});

Colaborador.hasOne(Usuario, { foreignKey: 'fk_colaborador' });
Colaborador.hasOne(Procedimento, { foreignKey: 'fk_colaborador' });
Colaborador.hasOne(Tatuador, { foreignKey: 'fk_colaborador' });
Colaborador.hasOne(Administrador, { foreignKey: 'fk_colaborador' });



//Colaborador.sync({ force: true })
  
module.exports = Colaborador