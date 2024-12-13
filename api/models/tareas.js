const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tareas', {
    id_tarea: {
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
    titulo: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    completado: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'tareas',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_tarea" },
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
