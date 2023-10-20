const { DataTypes } = require("sequelize");
//⚠ SE EXPORTA UNA FUNCIÓN A db.js QUE RECIBIRÁ SEQUELIZE COMO ARGUMENTO Y CONECTARÁ
/* Inicio una instancia de sequelize y conecto con la base de datos */


module.exports = (sequelize) => {
  sequelize.define(
    "Product",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      img: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { timestamps: true }
  );
};
