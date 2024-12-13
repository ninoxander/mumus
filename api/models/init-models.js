var DataTypes = require("sequelize").DataTypes;
var _etiquetas = require("./etiquetas");
var _etiquetas_eventos = require("./etiquetas_eventos");
var _etiquetas_pensamientos = require("./etiquetas_pensamientos");
var _eventos = require("./eventos");
var _pensamientos = require("./pensamientos");
var _pensamientos_eventos = require("./pensamientos_eventos");
var _roles = require("./roles");
var _roles_usuarios = require("./roles_usuarios");
var _sentimientos = require("./sentimientos");
var _tareas = require("./tareas");
var _usuarios = require("./usuarios");

function initModels(sequelize) {
  var etiquetas = _etiquetas(sequelize, DataTypes);
  var etiquetas_eventos = _etiquetas_eventos(sequelize, DataTypes);
  var etiquetas_pensamientos = _etiquetas_pensamientos(sequelize, DataTypes);
  var eventos = _eventos(sequelize, DataTypes);
  var pensamientos = _pensamientos(sequelize, DataTypes);
  var pensamientos_eventos = _pensamientos_eventos(sequelize, DataTypes);
  var roles = _roles(sequelize, DataTypes);
  var roles_usuarios = _roles_usuarios(sequelize, DataTypes);
  var sentimientos = _sentimientos(sequelize, DataTypes);
  var tareas = _tareas(sequelize, DataTypes);
  var usuarios = _usuarios(sequelize, DataTypes);

  etiquetas_eventos.belongsTo(etiquetas, { as: "id_etiqueta_etiqueta", foreignKey: "id_etiqueta"});
  etiquetas.hasMany(etiquetas_eventos, { as: "etiquetas_eventos", foreignKey: "id_etiqueta"});
  etiquetas_pensamientos.belongsTo(etiquetas, { as: "id_etiqueta_etiqueta", foreignKey: "id_etiqueta"});
  etiquetas.hasMany(etiquetas_pensamientos, { as: "etiquetas_pensamientos", foreignKey: "id_etiqueta"});
  etiquetas_eventos.belongsTo(eventos, { as: "id_evento_evento", foreignKey: "id_evento"});
  eventos.hasMany(etiquetas_eventos, { as: "etiquetas_eventos", foreignKey: "id_evento"});
  pensamientos_eventos.belongsTo(eventos, { as: "id_evento_evento", foreignKey: "id_evento"});
  eventos.hasMany(pensamientos_eventos, { as: "pensamientos_eventos", foreignKey: "id_evento"});
  tareas.belongsTo(eventos, { as: "id_evento_evento", foreignKey: "id_evento"});
  eventos.hasMany(tareas, { as: "tareas", foreignKey: "id_evento"});
  etiquetas_pensamientos.belongsTo(pensamientos, { as: "id_pensamiento_pensamiento", foreignKey: "id_pensamiento"});
  pensamientos.hasMany(etiquetas_pensamientos, { as: "etiquetas_pensamientos", foreignKey: "id_pensamiento"});
  pensamientos_eventos.belongsTo(pensamientos, { as: "id_pensamiento_pensamiento", foreignKey: "id_pensamiento"});
  pensamientos.hasMany(pensamientos_eventos, { as: "pensamientos_eventos", foreignKey: "id_pensamiento"});
  roles_usuarios.belongsTo(roles, { as: "id_rol_role", foreignKey: "id_rol"});
  roles.hasMany(roles_usuarios, { as: "roles_usuarios", foreignKey: "id_rol"});
  eventos.belongsTo(usuarios, { as: "id_usuario_usuario", foreignKey: "id_usuario"});
  usuarios.hasMany(eventos, { as: "eventos", foreignKey: "id_usuario"});
  pensamientos.belongsTo(usuarios, { as: "id_usuario_usuario", foreignKey: "id_usuario"});
  usuarios.hasMany(pensamientos, { as: "pensamientos", foreignKey: "id_usuario"});
  roles_usuarios.belongsTo(usuarios, { as: "id_usuario_usuario", foreignKey: "id_usuario"});
  usuarios.hasMany(roles_usuarios, { as: "roles_usuarios", foreignKey: "id_usuario"});
  sentimientos.belongsTo(usuarios, { as: "id_usuario_usuario", foreignKey: "id_usuario"});
  usuarios.hasMany(sentimientos, { as: "sentimientos", foreignKey: "id_usuario"});

  return {
    etiquetas,
    etiquetas_eventos,
    etiquetas_pensamientos,
    eventos,
    pensamientos,
    pensamientos_eventos,
    roles,
    roles_usuarios,
    sentimientos,
    tareas,
    usuarios,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
