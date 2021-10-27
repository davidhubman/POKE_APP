const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("pokemon", {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    height: {
      type: DataTypes.INTEGER,
      default: 0,
    },
    weight: {
      type: DataTypes.STRING,
    },
    health: {
      type: DataTypes.INTEGER,
      default: 0,
    },
    attack: {
      type: DataTypes.INTEGER,
      default: 0,
    },
    defense: {
      type: DataTypes.INTEGER,
      default: 0,
    },
    speed: {
      type: DataTypes.INTEGER,
      default: 0,
    },
  });
};

// id, name, height, weight, health, attack, defense, speed
