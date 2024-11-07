const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('mysql://root:admin@mysql-container:3306/mydatabase', {
  dialect: 'mysql',
  protocol: 'mysql',
  logging: false,  // Desabilite o log se não precisar
});

module.exports = sequelize;
