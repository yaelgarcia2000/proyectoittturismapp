import { connect } from "../database";

export const getFotosCiudades = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.query("SELECT * FROM fotos_ciudad");
  res.json(rows);
};

export const getFotosCiudadCount = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.query("SELECT COUNT(*) FROM fotos_ciudad");
  res.json(rows[0]["COUNT(*)"]);
};

export const getFotosCiudad = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.query(
    "SELECT * FROM fotos_ciudad WHERE _idCiudad = ?",
    [req.params.id]
  );
  res.json(rows[0]);
};

export const saveFotosCiudad = async (req, res) => {
  const connection = await connect();
  const [results] = await connection.query(
    "INSERT INTO fotos_ciudad(foto, _idCiudad, descripcion) VALUES(?,?,?)",
    [req.body.foto, req.body._idCiudad, req.body.descripcion]
  );
  res.json({
    foto: results.insertId,
    ...req.body,
  });
};

export const deleteFotosCiudad = async (req, res) => {
  const connection = await connect();
  await connection.query("DELETE FROM fotos_ciudad WHERE foto = ?", [
    req.params.id,
  ]);
  res.sendStatus(204);
};

export const updateFotosCiudad = async (req, res) => {
  const connection = await connect();
  await connection.query("UPDATE fotos_ciudad SET ? WHERE foto = ?", [
    req.body,
    req.params.id,
  ]);
  res.sendStatus(204);
};
