import { connect } from "../database";

export const getEstablecimientoPros = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.query("SELECT * FROM establecimiento_pro");
  res.json(rows);
};

export const getEstablecimientoProCount = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.query(
    "SELECT COUNT(*) FROM establecimiento_pro"
  );
  res.json(rows[0]["COUNT(*)"]);
};

export const getEstablecimientoPro = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.query(
    "SELECT * FROM establecimiento_pro WHERE _idEstablecimiento = ?",
    [req.params.id]
  );
  res.json(rows[0]);
};

export const saveEstablecimientoPro = async (req, res) => {
  const connection = await connect();
  const [results] = await connection.query(
    "INSERT INTO establecimiento_pro(_idAdministrador, calificacion, cantidadCalificaciones, paginaWeb, urlMaps, tiposPago) VALUES(?,?,?,?,?,?)",
    [
      req.body._idAdministrador,
      req.body.calificacion,
      req.body.cantidadCalificaciones,
      req.body.paginaWeb,
      req.body.urlMaps,
      req.body.tiposPago,
    ]
  );
  res.json({
    id: results.insertId,
    ...req.body,
  });
};

export const deleteEstablecimientoPro = async (req, res) => {
  const connection = await connect();
  await connection.query(
    "DELETE FROM establecimiento_pro WHERE _idEstablecimiento = ?",
    [req.params.id]
  );
  res.sendStatus(204);
};

export const updateEstablecimientoPro = async (req, res) => {
  const connection = await connect();
  await connection.query(
    "UPDATE establecimiento_pro SET ? WHERE _idEstablecimiento = ?",
    [req.body, req.params.id]
  );
  res.sendStatus(204);
};
