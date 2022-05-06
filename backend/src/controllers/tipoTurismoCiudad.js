import { connect } from "../database";

export const getTipoTurismoCiudades = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.query("SELECT * FROM tipo_turismo_ciudad");
  res.json(rows);
};

export const getTipoTurismoCiudadCount = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.query(
    "SELECT COUNT(*) FROM tipo_turismo_ciudad"
  );
  res.json(rows[0]["COUNT(*)"]);
};

export const getTipoTurismoCiudad = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.query(
    "SELECT * FROM tipo_turismo_ciudad WHERE _idCiudad = ?",
    [req.params.id]
  );
  res.json(rows[0]);
};

export const saveTipoTurismoCiudad = async (req, res) => {
  const connection = await connect();
  const [results] = await connection.query(
    "INSERT INTO tipo_turismo_ciudad(_idCiudad, _idTiposTurismo) VALUES(?,?)",
    [req.body._idCiudad, req.body._idTiposTurismo]
  );
  res.json({
    id: results.insertId,
    ...req.body,
  });
};

export const deleteTipoTurismoCiudad = async (req, res) => {
  const connection = await connect();
  await connection.query(
    "DELETE FROM tipo_turismo_ciudad WHERE _idCiudad = ?",
    [req.params.id]
  );
  res.sendStatus(204);
};

export const updateTipoTurismoCiudad = async (req, res) => {
  const connection = await connect();
  await connection.query(
    "UPDATE tipo_turismo_ciudad SET ? WHERE _idCiudad = ?",
    [req.body, req.params.id]
  );
  res.sendStatus(204);
};
