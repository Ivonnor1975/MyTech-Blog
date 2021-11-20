const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class session extends Model {}

session.init(
  {
    sid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    expires:{
        type: DataTypes.DATE,
        allowNull: false,
        validate:{
            isDate: true
        }
    },
    Data: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
   },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'session'
  }
);

module.exports = session;