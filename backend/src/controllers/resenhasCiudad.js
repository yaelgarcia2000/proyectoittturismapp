import { connect } from "../database";

export const getResenhasCiudades = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.query(
    "SELECT resenhas_ciudad._idCiudad AS idCiudad, resenhas_ciudad.contenido AS Contenido, usuario_app.nombre AS Nombre, usuario_app.correo AS Correo, usuario_app.imagenUsuario AS Imagen, ciudades.nombreCiudad AS NombreCiudad FROM usuario_app JOIN resenhas_ciudad ON resenhas_ciudad._idUsuario = usuario_app.idUsuario JOIN ciudades ON resenhas_ciudad._idCiudad = ciudades.idCiudad;"
  );
  res.json(rows);
};

export const getResenhasCiudadCount = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.query("SELECT COUNT(*) FROM resenhas_ciudad");
  res.json(rows[0]["COUNT(*)"]);
};

export const getResenhasCiudad = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.query(
    "SELECT * FROM resenhas_ciudad WHERE idResenhasCiudad = ?",
    [req.params.id]
  );
  res.json(rows[0]);
};

export const saveResenhasCiudad = async (req, res) => {
  const connection = await connect();
  const [results] = await connection.query(
    "INSERT INTO resenhas_ciudad (_idUsuario, _idCiudad, contenido) VALUES(?,?,?)",
    [req.body._idUsuario, req.body._idCiudad, req.body.contenido]
  );
  res.json({
    id: results.insertId,
    ...req.body,
  });
};

export const deleteResenhasCiudad = async (req, res) => {
  const connection = await connect();
  await connection.query(
    "DELETE FROM resenhas_ciudad WHERE idResenhasCiudad = ?",
    [req.params.id]
  );
  res.sendStatus(204);
};

export const updateResenhasCiudad = async (req, res) => {
  const connection = await connect();
  await connection.query(
    "UPDATE resenhas_ciudad SET ? WHERE idResenhasCiudad = ?",
    [req.body, req.params.id]
  );
  res.sendStatus(204);
};
