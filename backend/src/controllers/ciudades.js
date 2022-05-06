import { connect } from "../database";

export const getCiudades = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.query(
    "SELECT 	idCiudad, nombreCiudad, region, municipio, correo, telefono, urlMaps, tipo, tiposTurismo, numero_emergencias, calificacion, cantidadCalificaciones, descripcion, imagenRepresentativa FROM `ciudades` "
  );
  res.json(rows);
};

export const getTaskCiudadesCount = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.query("SELECT COUNT(*) FROM ciudades");
  res.json(rows[0]["COUNT(*)"]);
};

export const getCiudad = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.query(
    "SELECT * FROM ciudades WHERE idCiudad = ?",
    [req.params.id]
  );
  res.json(rows[0]);
};

export const saveCiudad = async (req, res) => {
  const connection = await connect();
  const [results] = await connection.query(
    "INSERT INTO ciudades(_id_administrador, nombreCiudad, region, municipio, correo, telefono, urlMaps, puebloMagico, tiposTurismo, numero_emergencias, calificacion, cantidadCalificaciones, descripcion, imagenRepresentativa) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
    [
      req.body._id_administrador,
      req.body.nombreCiudad,
      req.body.region,
      req.body.municipio,
      req.body.correo,
      req.body.telefono,
      req.body.urlMaps,
      req.body.puebloMagico,
      req.body.tiposTurismo,
      req.body.numero_emergencias,
      req.body.calificacion,
      req.body.cantidadCalificaciones,
      req.body.descripcion,
      req.body.imagenRepresentativa,
    ]
  );
  res.json({
    id: results.insertId,
    ...req.body,
  });
};

export const deleteCiudades = async (req, res) => {
  const connection = await connect();
  await connection.query("DELETE FROM ciudades WHERE idCiudad = ?", [
    req.params.id,
  ]);
  res.sendStatus(204);
};

export const updateCiudades = async (req, res) => {
  const connection = await connect();
  await connection.query("UPDATE ciudades SET ? WHERE idCiudad = ?", [
    req.body,
    req.params.id,
  ]);
  res.sendStatus(204);
};
