import { connect } from "../database";

export const getEstablecimientoss = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.query("SELECT * FROM establecimientos");
  res.json(rows);
};

export const getEstablecimientosCount = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.query(
    "SELECT COUNT(*) FROM establecimientos"
  );
  res.json(rows[0]["COUNT(*)"]);
};

export const getEstablecimientos = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.query(
    "SELECT * FROM establecimientos WHERE idEstablecimiento = ?",
    [req.params.id]
  );
  res.json(rows[0]);
};

export const saveEstablecimientos = async (req, res) => {
  const connection = await connect();
  const [results] = await connection.query(
    "INSERT INTO establecimientos(nombre, tipoEstablecimiento, telefono, correo, pro, imagenRepresentativa) VALUES(?,?,?,?,?,?)",
    [
      req.body.nombre,
      req.body.tipoEstablecimiento,
      req.body.telefono,
      req.body.correo,
      req.body.pro,
      req.body.imagenRepresentativa,
    ]
  );
  res.json({
    id: results.insertId,
    ...req.body,
  });
};

export const deleteEstablecimientos = async (req, res) => {
  const connection = await connect();
  await connection.query(
    "DELETE FROM establecimientos WHERE idEstablecimiento = ?",
    [req.params.id]
  );
  res.sendStatus(204);
};

export const updateEstablecimientos = async (req, res) => {
  const connection = await connect();
  await connection.query(
    "UPDATE establecimientos SET ? WHERE idEstablecimiento = ?",
    [req.body, req.params.id]
  );
  res.sendStatus(204);
};
