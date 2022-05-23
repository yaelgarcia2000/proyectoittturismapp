import { connect } from "../database";

export const getPlatilloss = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.query(
    "SELECT platillos.nombre AS NombrePlatillo, platillos.descripcion AS DescrionPlatillo, platillos.imagen AS ImagenPlatillo, ciudades.nombreCiudad AS NombreCiudades from platillos JOIN ciudades ON platillos._idCiudad = ciudades.idCiudad"
  );
  res.json(rows);
};

export const getPlatillosCount = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.query("SELECT COUNT(*) FROM platillos");
  res.json(rows[0]["COUNT(*)"]);
};

export const getPlatillos = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.query(
    "SELECT * FROM platillos WHERE idPlatillos = ?",
    [req.params.id]
  );
  res.json(rows[0]);
};

export const savePlatillos = async (req, res) => {
  const connection = await connect();
  const [results] = await connection.query(
    "INSERT INTO platillos(_idCiudad, nombre, descripcion, imagen) VALUES(?,?,?,?)",
    [req.body._idCiudad, req.body.nombre, req.body.descripcion, req.body.imagen]
  );
  res.json({
    id: results.insertId,
    ...req.body,
  });
};

export const deletePlatillos = async (req, res) => {
  const connection = await connect();
  await connection.query("DELETE FROM platillos WHERE idPlatillos = ?", [
    req.params.id,
  ]);
  res.sendStatus(204);
};

export const updatePlatillos = async (req, res) => {
  const connection = await connect();
  await connection.query("UPDATE platillos SET ? WHERE idPlatillos = ?", [
    req.body,
    req.params.id,
  ]);
  res.sendStatus(204);
};
