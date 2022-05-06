import { connect } from "../database";

export const getTiposTurismos = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.query("SELECT * FROM tipos_turismo");
  res.json(rows);
};

export const getTiposTurismoCount = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.query("SELECT COUNT(*) FROM tipos_turismo");
  res.json(rows[0]["COUNT(*)"]);
};

export const getTiposTurismo = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.query(
    "SELECT * FROM tipos_turismo WHERE idTiposTurismo = ?",
    [req.params.id]
  );
  res.json(rows[0]);
};

export const saveTiposTurismo = async (req, res) => {
  const connection = await connect();
  const [results] = await connection.query(
    "INSERT INTO tipos_turismo(idTiposTurismo, tipoTurismo) VALUES(?,?)",
    [req.body.idTiposTurismo, req.body.tipoTurismo]
  );
  res.json({
    id: results.insertId,
    ...req.body,
  });
};

export const deleteTiposTurismo = async (req, res) => {
  const connection = await connect();
  await connection.query("DELETE FROM tipos_turismo WHERE idTiposTurismo = ?", [
    req.params.id,
  ]);
  res.sendStatus(204);
};

export const updateTiposTurismo = async (req, res) => {
  const connection = await connect();
  await connection.query(
    "UPDATE tipos_turismo SET ? WHERE idTiposTurismo = ?",
    [req.body, req.params.id]
  );
  res.sendStatus(204);
};
