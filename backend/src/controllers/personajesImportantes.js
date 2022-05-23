import { connect } from "../database";

export const getPersonajesImportantess = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.query(
    "SELECT personajes_importantes.nombre AS NombrePersonaje, personajes_importantes.anhoNacimiento AS Nacimiento, personajes_importantes.anhoFallecimiento AS Fallecimiento, personajes_importantes.descripcion AS Descripcion, personajes_importantes.foto AS Foto, ciudades.nombreCiudad AS NombreCiudad FROM personajes_importantes JOIN ciudades on personajes_importantes._idCiudad = ciudades.idCiudad"
  );
  res.json(rows);
};

export const getPersonajesImportantesCount = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.query(
    "SELECT COUNT(*) FROM personajes_importantes"
  );
  res.json(rows[0]["COUNT(*)"]);
};

export const getPersonajesImportantes = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.query(
    "SELECT * FROM personajes_importantes WHERE idPersonajes = ?",
    [req.params.id]
  );
  res.json(rows[0]);
};

export const savePersonajesImportantes = async (req, res) => {
  const connection = await connect();
  const [results] = await connection.query(
    "INSERT INTO personajes_importantes(_idCiudad, nombre, anhoNacimiento, anhoFallecimiento, descripcion, foto) VALUES(?,?,?,?,?,?)",
    [
      req.body._idCiudad,
      req.body.nombre,
      req.body.anhoNacimiento,
      req.body.anhoFallecimiento,
      req.body.descripcion,
      req.body.foto,
    ]
  );
  res.json({
    id: results.insertId,
    ...req.body,
  });
};

export const deletePersonajesImportantes = async (req, res) => {
  const connection = await connect();
  await connection.query(
    "DELETE FROM personajes_importantes WHERE idPersonajes = ?",
    [req.params.id]
  );
  res.sendStatus(204);
};

export const updatePersonajesImportantes = async (req, res) => {
  const connection = await connect();
  await connection.query(
    "UPDATE personajes_importantes SET ? WHERE idPersonajes = ?",
    [req.body, req.params.id]
  );
  res.sendStatus(204);
};
