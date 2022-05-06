import { connect } from "../database";

export const getUsuarioApps = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.query("SELECT * FROM usuario_app");
  res.json(rows);
};

export const getUsuarioAppCount = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.query("SELECT COUNT(*) FROM usuario_app");
  res.json(rows[0]["COUNT(*)"]);
};

export const getUsuarioApp = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.query(
    "SELECT * FROM usuario_app WHERE idUsuario = ?",
    [req.params.id]
  );
  res.json(rows[0]);
};

export const saveUsuarioApp = async (req, res) => {
  const connection = await connect();
  const [results] = await connection.query(
    "INSERT INTO usuario_app(nombreUsuario, nombre, fechaNacimiento, correo, genero, tiposTurismo, imagenUsuario, claveAcceso) VALUES(?,?,?,?,?,?,?,?)",
    [
      req.body.nombreUsuario,
      req.body.nombre,
      req.body.fechaNacimiento,
      req.body.correo,
      req.body.genero,
      req.body.tiposTurismo,
      req.body.imagenUsuario,
      req.body.claveAcceso,
    ]
  );
  res.json({
    id: results.insertId,
    ...req.body,
  });
};

export const deleteUsuarioApp = async (req, res) => {
  const connection = await connect();
  await connection.query("DELETE FROM usuario_app WHERE idUsuario = ?", [
    req.params.id,
  ]);
  res.sendStatus(204);
};

export const updateUsuarioApp = async (req, res) => {
  const connection = await connect();
  await connection.query("UPDATE usuario_app SET ? WHERE idUsuario = ?", [
    req.body,
    req.params.id,
  ]);
  res.sendStatus(204);
};
