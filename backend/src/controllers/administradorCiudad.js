import { connect } from "../database";

export const getAdministradorCiudades = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.query("SELECT ciudades.idCiudad as ID, ciudades.nombreCiudad as NOMBRE, ciudades.region AS REGION, ciudades.municipio AS MUNICIPIO, ciudades.correo AS CORREO, ciudades.telefono AS TELEFONO, ciudades.urlMaps AS MAPS, ciudades.puebloMagico AS MAGICO, ciudades.tiposTurismo AS TIPOS, ciudades.numero_emergencias AS EMERGENCIAS, ciudades.calificacion AS CALIFICACION, ciudades.descripcion AS DESCRIPCION, ciudades.imagenRepresentativa AS FOTO FROM ciudades;");
  res.json(rows);
};

export const getAdministradorCiudadCount = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.query(
    "SELECT COUNT(*) FROM administrador_ciudad"
  );
  res.json(rows[0]["COUNT(*)"]);
};

export const getAdministradorCiudad = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.query(
    "SELECT * FROM administrador_ciudad WHERE idUsuario = ?",
    [req.params.id]
  );
  res.json(rows[0]);
};

export const saveAdministradorCiudad = async (req, res) => {
  const connection = await connect();
  const [results] = await connection.query(
    "INSERT INTO administrador_ciudad(nombreUsuario, nombre, correo, imagenUsuario, cargoCiudad, claveAcceso) VALUES (?,?,?,?,?,?)",
    [
      req.body.nombreUsuario,
      req.body.nombre,
      req.body.correo,
      req.body.imagenUsuario,
      req.body.cargoCiudad,
      req.body.claveAcceso,
    ]
  );
  res.json({
    id: results.insertId,
    ...req.body,
  });
};

export const deleteAdministradorCiudades = async (req, res) => {
  const connection = await connect();
  await connection.query(
    "DELETE FROM administrador_ciudad WHERE idUsuario = ?",
    [req.params.id]
  );
  res.sendStatus(204);
};

export const updateAdministradorCiudades = async (req, res) => {
  const connection = await connect();
  await connection.query(
    "UPDATE administrador_ciudad SET ? WHERE idUsuario = ?",
    [req.body, req.params.id]
  );
  res.sendStatus(204);
};
