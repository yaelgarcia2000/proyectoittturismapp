import { connect } from "../database";

export const getResenhasEstablecimientos = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.query(
    "SELECT * FROM resenhas_establecimiento"
  );
  res.json(rows);
};

export const getResenhasEstablecimientoCount = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.query(
    "SELECT COUNT(*) FROM resenhas_establecimiento"
  );
  res.json(rows[0]["COUNT(*)"]);
};

export const getResenhasEstablecimiento = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.query(
    "SELECT * FROM resenhas_establecimiento WHERE idResenha = ?",
    [req.params.id]
  );
  res.json(rows[0]);
};

export const saveResenhasEstablecimiento = async (req, res) => {
  const connection = await connect();
  const [results] = await connection.query(
    "INSERT INTO resenhas_establecimiento(_idEstablecimiento, _idUsuario, contenido) VALUES(?,?,?)",
    [req.body._idEstablecimiento, req.body._idUsuario, req.body.contenido]
  );
  res.json({
    id: results.insertId,
    ...req.body,
  });
};

export const deleteResenhasEstablecimiento = async (req, res) => {
  const connection = await connect();
  await connection.query(
    "DELETE FROM resenhas_establecimiento WHERE idResenha = ?",
    [req.params.id]
  );
  res.sendStatus(204);
};

export const updateResenhasEstablecimiento = async (req, res) => {
  const connection = await connect();
  await connection.query(
    "UPDATE resenhas_establecimiento SET ? WHERE idResenha = ?",
    [req.body, req.params.id]
  );
  res.sendStatus(204);
};
