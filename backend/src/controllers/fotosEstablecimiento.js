import { connect } from "../database";

export const getFotosEstablecimientos = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.query("SELECT * FROM fotos_establecimiento");
  res.json(rows);
};

export const getFotosEstablecimientoCount = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.query(
    "SELECT COUNT(*) FROM fotos_establecimiento"
  );
  res.json(rows[0]["COUNT(*)"]);
};

export const getFotosEstablecimiento = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.query(
    "SELECT * FROM fotos_establecimiento WHERE foto = ?",
    [req.params.id]
  );
  res.json(rows[0]);
};

export const saveFotosEstablecimiento = async (req, res) => {
  const connection = await connect();
  const [results] = await connection.query(
    "INSERT INTO fotos_establecimiento(foto, _idEstablecimiento, descripcion) VALUES(?,?,?)",
    [req.body.foto, req.body._idEstablecimiento, req.body.descripcion]
  );
  res.json({
    foto: results.insertId,
    ...req.body,
  });
};

export const deleteFotosEstablecimiento = async (req, res) => {
  const connection = await connect();
  await connection.query("DELETE FROM fotos_establecimiento WHERE foto = ?", [
    req.params.id,
  ]);
  res.sendStatus(204);
};

export const updateFotosEstablecimiento = async (req, res) => {
  const connection = await connect();
  await connection.query("UPDATE fotos_establecimiento SET ? WHERE foto = ?", [
    req.body,
    req.params.id,
  ]);
  res.sendStatus(204);
};
