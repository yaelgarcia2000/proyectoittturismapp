import { connect } from "../database";

export const getFestividades = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.query(
    "SELECT festividad._idCiudad AS idCiudad, festividad.dia AS Dia, festividad.mes AS Mes, festividad.nombre AS Nombre, festividad.descripcion AS Descripcion, festividad.imagen AS Image, ciudades.nombreCiudad AS NombreCiudad FROM festividad JOIN ciudades ON ciudades.idCiudad = festividad._idCiudad"
  );
  res.json(rows);
};

export const getFestividadCount = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.query("SELECT COUNT(*) FROM festividad");
  res.json(rows[0]["COUNT(*)"]);
};

export const getFestividad = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.query(
    "SELECT * FROM festividad WHERE idFecha = ?",
    [req.params.id]
  );
  res.json(rows[0]);
};

export const saveFestividad = async (req, res) => {
  const connection = await connect();
  const [results] = await connection.query(
    "INSERT INTO festividad(_idCiudad, dia, mes, nombre, descripcion, imagen) VALUES(?,?,?,?,?,?)",
    [
      req.body._idCiudad,
      req.body.dia,
      req.body.mes,
      req.body.nombre,
      req.body.descripcion,
      req.body.imagen,
    ]
  );
  res.json({
    id: results.insertId,
    ...req.body,
  });
};

export const deleteFestividad = async (req, res) => {
  const connection = await connect();
  await connection.query("DELETE FROM festividad WHERE idFecha = ?", [
    req.params.id,
  ]);
  res.sendStatus(204);
};

export const updateFestividad = async (req, res) => {
  const connection = await connect();
  await connection.query("UPDATE festividad SET ? WHERE idFecha = ?", [
    req.body,
    req.params.id,
  ]);
  res.sendStatus(204);
};
