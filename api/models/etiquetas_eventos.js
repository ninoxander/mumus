const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('etiquetas_eventos', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_evento: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'eventos',
        key: 'id_evento'
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
    tableName: 'etiquetas_eventos',
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
        name: "id_evento",
        using: "BTREE",
        fields: [
          { name: "id_evento" },
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
