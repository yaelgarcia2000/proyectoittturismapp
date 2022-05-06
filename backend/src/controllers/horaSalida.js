import { connect } from "../database";

export const getHoraSalidas = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.query("SELECT * FROM hora_salida");
  res.json(rows);
};

export const getHoraSalidaCount = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.query("SELECT COUNT(*) FROM hora_salida");
  res.json(rows[0]["COUNT(*)"]);
};

export const getHoraSalida = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.query(
    "SELECT * FROM hora_salida WHERE idHora = ?",
    [req.params.id]
  );
  res.json(rows[0]);
};

export const saveHoraSalida = async (req, res) => {
  const connection = await connect();
  const [results] = await connection.query(
    "INSERT INTO hora_salida(idHora, _idSalidasTransporte, hora) VALUES(?,?,?)",
    [req.body.idHora, req.body._idSalidasTransporte, req.body.hora]
  );
  res.json({
    idHora: results.insertId,
    ...req.body,
  });
};

export const deleteHoraSalida = async (req, res) => {
  const connection = await connect();
  await connection.query("DELETE FROM hora_salida WHERE idHora = ?", [
    req.params.id,
  ]);
  res.sendStatus(204);
};

export const updateHoraSalida = async (req, res) => {
  const connection = await connect();
  await connection.query("UPDATE hora_salida SET ? WHERE idHora = ?", [
    req.body,
    req.params.id,
  ]);
  res.sendStatus(204);
};
