import { connect } from "../database";

export const getCalificacionesUsuariosCiudadess = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.query(
    "SELECT * FROM calificaciones_usuarios_ciudades"
  );
  res.json(rows);
};

export const getCalificacionesUsuariosCiudadesCount = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.query(
    "SELECT COUNT(*) FROM calificaciones_usuarios_ciudades"
  );
  res.json(rows[0]["COUNT(*)"]);
};

export const getCalificacionesUsuariosCiudades = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.query(
    "SELECT * FROM calificaciones_usuarios_ciudades WHERE _idUsuario = ?",
    [req.params.id]
  );
  res.json(rows[0]);
};

export const saveCalificacionesUsuariosCiudades = async (req, res) => {
  const connection = await connect();
  const [results] = await connection.query(
    "INSERT INTO calificaciones_usuarios_ciudades(_idUsuario,_idCiudad, calificacion) VALUES(?,?,?)",
    [req.body._idUsuario, req.body._idCiudad, req.body.calificacion]
  );
  res.json({
    _idUsuario: results.insertId,
    ...req.body,
  });
};

export const deleteCalificacionesUsuariosCiudades = async (req, res) => {
  const connection = await connect();
  await connection.query(
    "DELETE FROM calificaciones_usuarios_ciudades WHERE _idUsuario = ?",
    [req.params.id]
  );
  res.sendStatus(204);
};

export const updateCalificacionesUsuariosCiudades = async (req, res) => {
  const connection = await connect();
  await connection.query(
    "UPDATE calificaciones_usuarios_ciudades SET ? WHERE _idUsuario = ?",
    [req.body, req.params.id]
  );
  res.sendStatus(204);
};
