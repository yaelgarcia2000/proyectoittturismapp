import { connect } from "../database";

export const getCalificacionesEstablecimientoUsuarios = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.query(
    "SELECT * FROM calificaciones_establecimiento_usuario"
  );
  res.json(rows);
};

export const getCalificacionesEstablecimientoUsuarioCount = async (
  req,
  res
) => {
  const connection = await connect();
  const [rows] = await connection.query(
    "SELECT COUNT(*) FROM calificaciones_establecimiento_usuario"
  );
  res.json(rows[0]["COUNT(*)"]);
};

export const getCalificacionesEstablecimientoUsuario = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.query(
    "SELECT * FROM calificaciones_establecimiento_usuario WHERE _idEstablecimiento = ?",
    [req.params.id]
  );
  res.json(rows[0]);
};

export const saveCalificacionesEstablecimientoUsuario = async (req, res) => {
  const connection = await connect();
  const [results] = await connection.query(
    "INSERT INTO calificaciones_establecimiento_usuario(_idEstablecimiento, _idUsuario, calificacion) VALUES(?,?,?)",
    [req.body._idEstablecimiento, req.body._idUsuario, req.body.calificacion]
  );
  res.json({
    _idEstablecimiento: results.insertId,
    ...req.body,
  });
};

export const deleteCalificacionesEstablecimientoUsuario = async (req, res) => {
  const connection = await connect();
  await connection.query(
    "DELETE FROM calificaciones_establecimiento_usuario WHERE _idEstablecimiento = ?",
    [req.params.id]
  );
  res.sendStatus(204);
};

export const updateCalificacionesEstablecimientoUsuario = async (req, res) => {
  const connection = await connect();
  await connection.query(
    "UPDATE calificaciones_establecimiento_usuario SET ? WHERE _idEstablecimiento = ?",
    [req.body, req.params.id]
  );
  res.sendStatus(204);
};
