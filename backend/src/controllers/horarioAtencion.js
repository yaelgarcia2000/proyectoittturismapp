import { connect } from "../database";

export const getHorarioAtenciones = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.query("SELECT * FROM horario_atencion");
  res.json(rows);
};

export const getHorarioAtencionCount = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.query(
    "SELECT COUNT(*) FROM horario_atencion"
  );
  res.json(rows[0]["COUNT(*)"]);
};

export const getHorarioAtencion = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.query(
    "SELECT * FROM horario_atencion WHERE idHorarioAtencion = ?",
    [req.params.id]
  );
  res.json(rows[0]);
};

export const saveHorarioAtencion = async (req, res) => {
  const connection = await connect();
  const [results] = await connection.query(
    "INSERT INTO horario_atencion(_idEstablecimiento, lunes, martes, miercoles, jueves, viernes, sabado, domingo) VALUES(?,?,?,?,?,?,?,?)",
    [
      req.body._idEstablecimiento,
      req.body.lunes,
      req.body.martes,
      req.body.miercoles,
      req.body.jueves,
      req.body.viernes,
      req.body.sabado,
      req.body.domingo,
    ]
  );
  res.json({
    id: results.insertId,
    ...req.body,
  });
};

export const deleteHorarioAtencion = async (req, res) => {
  const connection = await connect();
  await connection.query(
    "DELETE FROM horario_atencion WHERE idHorarioAtencion = ?",
    [req.params.id]
  );
  res.sendStatus(204);
};

export const updateHorarioAtencion = async (req, res) => {
  const connection = await connect();
  await connection.query(
    "UPDATE horario_atencion SET ? WHERE idHorarioAtencion = ?",
    [req.body, req.params.id]
  );
  res.sendStatus(204);
};
