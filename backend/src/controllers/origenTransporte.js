import { connect } from "../database";

export const getOrigenTransportes = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.query("SELECT * FROM origen_transporte");
  res.json(rows);
};

export const getOrigenTransporteCount = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.query(
    "SELECT COUNT(*) FROM origen_transporte"
  );
  res.json(rows[0]["COUNT(*)"]);
};

export const getOrigenTransporte = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.query(
    "SELECT * FROM origen_transporte WHERE _idCiudad = ?",
    [req.params.id]
  );
  res.json(rows[0]);
};

export const saveOrigenTransporte = async (req, res) => {
  const connection = await connect();
  const [results] = await connection.query(
    "INSERT INTO origen_transporte(_idCiudad,_idTransporte) VALUES(?,?)",
    [req.body._idTransporte, req.body._idTransporte]
  );
  res.json({
    _idCiudad: results.insertId,
    ...req.body,
  });
};

export const deleteOrigenTransporte = async (req, res) => {
  const connection = await connect();
  await connection.query("DELETE FROM origen_transporte WHERE _idCiudad = ?", [
    req.params.id,
  ]);
  res.sendStatus(204);
};

export const updateOrigenTransporte = async (req, res) => {
  const connection = await connect();
  await connection.query("UPDATE origen_transporte SET ? WHERE _idCiudad = ?", [
    req.body,
    req.params.id,
  ]);
  res.sendStatus(204);
};
