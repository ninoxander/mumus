const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('etiquetas_pensamientos', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_pensamiento: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'pensamientos',
        key: 'id_pensamiento'
      }
    },
    id_etiqueta: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'etiquetas',
        key: 'id_etiqueta'
      }
    }
  }, {
    sequelize,
    tableName: 'etiquetas_pensamientos',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "id_pensamiento",
        using: "BTREE",
        fields: [
          { name: "id_pensamiento" },
        ]
      },
      {
        name: "id_etiqueta",
        using: "BTREE",
        fields: [
          { name: "id_etiqueta" },
        ]
      },
    ]
  });
};
