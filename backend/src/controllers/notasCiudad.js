import { connect } from "../database";

export const getNotasCiudades = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.query("SELECT * FROM notas_ciudad");
  res.json(rows);
};

export const getNotasCiudadCount = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.query("SELECT COUNT(*) FROM notas_ciudad");
  res.json(rows[0]["COUNT(*)"]);
};

export const getNotasCiudad = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.query(
    "SELECT * FROM notas_ciudad WHERE idNotaCiudad = ?",
    [req.params.id]
  );
  res.json(rows[0]);
};

export const saveNotasCiudad = async (req, res) => {
  const connection = await connect();
  const [results] = await connection.query(
    "INSERT INTO notas_ciudad(_idCiudad, titulo, descripcion, imagen, fechaPublicacion) VALUES(?,?,?,?,?)",
    [
      req.body._idCiudad,
      req.body.titulo,
      req.body.descripcion,
      req.body.imagen,
      req.body.fechaPublicacion,
    ]
  );
  res.json({
    id: results.insertId,
    ...req.body,
  });
};

export const deleteNotasCiudad = async (req, res) => {
  const connection = await connect();
  await connection.query("DELETE FROM notas_ciudad WHERE idNotaCiudad = ?", [
    req.params.id,
  ]);
  res.sendStatus(204);
};

export const updateNotasCiudad = async (req, res) => {
  const connection = await connect();
  await connection.query("UPDATE notas_ciudad SET ? WHERE idNotaCiudad = ?", [
    req.body,
    req.params.id,
  ]);
  res.sendStatus(204);
};
