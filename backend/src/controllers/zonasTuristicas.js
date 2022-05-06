import { connect } from "../database";

export const getZonasTuristicass = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.query("SELECT * FROM zonas_turisticas");
  res.json(rows);
};

export const getZonasTuristicasCount = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.query(
    "SELECT COUNT(*) FROM zonas_turisticas"
  );
  res.json(rows[0]["COUNT(*)"]);
};

export const getZonasTuristicas = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.query(
    "SELECT * FROM zonas_turisticas WHERE idZonaTuristica = ?",
    [req.params.id]
  );
  res.json(rows[0]);
};

export const saveZonasTuristicas = async (req, res) => {
  const connection = await connect();
  const [results] = await connection.query(
    "INSERT INTO zonas_turisticas(_idCiudad, nombre, tipoZona, descripcion, foto) VALUES(?,?,?,?,?)",
    [
      req.body._idCiudad,
      req.body.nombre,
      req.body.tipoZona,
      req.body.descripcion,
      req.body.foto,
    ]
  );
  res.json({
    id: results.insertId,
    ...req.body,
  });
};

export const deleteZonasTuristicas = async (req, res) => {
  const connection = await connect();
  await connection.query(
    "DELETE FROM zonas_turisticas WHERE idZonaTuristica = ?",
    [req.params.id]
  );
  res.sendStatus(204);
};

export const updateZonasTuristicas = async (req, res) => {
  const connection = await connect();
  await connection.query(
    "UPDATE zonas_turisticas SET ? WHERE idZonaTuristica = ?",
    [req.body, req.params.id]
  );
  res.sendStatus(204);
};
