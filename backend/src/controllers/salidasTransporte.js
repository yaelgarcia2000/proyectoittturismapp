import { connect } from "../database";

export const getSalidasTransportes = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.query("SELECT * FROM salidas_transporte");
  res.json(rows);
};

export const getSalidasTransporteCount = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.query(
    "SELECT COUNT(*) FROM salidas_transporte"
  );
  res.json(rows[0]["COUNT(*)"]);
};

export const getSalidasTransporte = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.query(
    "SELECT * FROM salidas_transporte WHERE idSalidasTransporte = ?",
    [req.params.id]
  );
  res.json(rows[0]);
};

export const saveSalidasTransporte = async (req, res) => {
  const connection = await connect();
  const [results] = await connection.query(
    "INSERT INTO salidas_transporte(_idTransporte, _idCiudadDestino, dia, duracionViaje) VALUES(?,?,?,?)",
    [
      req.body._idTransporte,
      req.body._idCiudadDestino,
      req.body.dia,
      req.body.duracionViaje,
    ]
  );
  res.json({
    id: results.insertId,
    ...req.body,
  });
};

export const deleteSalidasTransporte = async (req, res) => {
  const connection = await connect();
  await connection.query(
    "DELETE FROM salidas_transporte WHERE idSalidasTransporte = ?",
    [req.params.id]
  );
  res.sendStatus(204);
};

export const updateSalidasTransporte = async (req, res) => {
  const connection = await connect();
  await connection.query(
    "UPDATE salidas_transporte SET ? WHERE idSalidasTransporte = ?",
    [req.body, req.params.id]
  );
  res.sendStatus(204);
};
