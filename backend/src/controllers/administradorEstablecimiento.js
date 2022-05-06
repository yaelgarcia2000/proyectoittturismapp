import { connect } from "../database";

export const getAdministradorEstablecimientos = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.query(
    "SELECT * FROM administrador_establecimiento"
  );
  res.json(rows);
};

export const getAdministradorEstablecimientoCount = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.query(
    "SELECT COUNT(*) FROM administrador_establecimiento"
  );
  res.json(rows[0]["COUNT(*)"]);
};

export const getAdministradorEstablecimiento = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.query(
    "SELECT * FROM administrador_establecimiento WHERE idUsuario = ?",
    [req.params.id]
  );
  res.json(rows[0]);
};

export const saveAdministradorEstablecimiento = async (req, res) => {
  const connection = await connect();
  const [results] = await connection.query(
    "INSERT INTO administrador_establecimiento( claveAcceso, nombreUsuario, nombre, correo, imagenUsuario, cargoEmpresa) VALUES(?,?,?,?,?,?)",
    [
      req.body.claveAcceso,
      req.body.nombreUsuario,
      req.body.nombre,
      req.body.correo,
      req.body.imagenUsuario,
      req.body.cargoEmpresa,
    ]
  );
  res.json({
    id: results.insertId,
    ...req.body,
  });
};

export const deleteAdministradorEstablecimientos = async (req, res) => {
  const connection = await connect();
  await connection.query(
    "DELETE FROM administrador_establecimiento WHERE idUsuario = ?",
    [req.params.id]
  );
  res.sendStatus(204);
};

export const updateAdministradorEstablecimientos = async (req, res) => {
  const connection = await connect();
  await connection.query(
    "UPDATE administrador_establecimiento SET ? WHERE idUsuario = ?",
    [req.body, req.params.id]
  );
  res.sendStatus(204);
};
