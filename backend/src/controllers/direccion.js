import { connect } from "../database";

export const getDirecciones = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.query("SELECT * FROM direccion");
  res.json(rows);
};

export const getDireccionCount = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.query("SELECT COUNT(*) FROM direccion");
  res.json(rows[0]["COUNT(*)"]);
};

export const getDireccion = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.query(
    "SELECT * FROM direccion WHERE idDireccion = ?",
    [req.params.id]
  );
  res.json(rows[0]);
};

export const saveDireccion = async (req, res) => {
  const connection = await connect();
  const [results] = await connection.query(
    "INSERT INTO direccion(_idEstablecimiento,_idCiudad,colonia,numero,cp,calle) VALUES(?,?,?,?,?,?)",
    [
      req.body._idEstablecimiento,
      req.body._idCiudad,
      req.body.colonia,
      req.body.numero,
      req.body.cp,
      req.body.calle,
    ]
  );
  res.json({
    id: results.insertId,
    ...req.body,
  });
};

export const deleteDireccion = async (req, res) => {
  const connection = await connect();
  await connection.query("DELETE FROM direccion WHERE idDireccion = ?", [
    req.params.id,
  ]);
  res.sendStatus(204);
};

export const updateDireccion = async (req, res) => {
  const connection = await connect();
  await connection.query("UPDATE direccion SET ? WHERE idDireccion = ?", [
    req.body,
    req.params.id,
  ]);
  res.sendStatus(204);
};
