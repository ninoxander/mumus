const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pensamientos_eventos', {
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
    id_evento: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'eventos',
        key: 'id_evento'
      }
    }
  }, {
    sequelize,
    tableName: 'pensamientos_eventos',
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
        name: "id_evento",
        using: "BTREE",
        fields: [
          { name: "id_evento" },
        ]
      },
    ]
  });
};
