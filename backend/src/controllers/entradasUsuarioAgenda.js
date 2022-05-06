import { connect } from "../database";

export const getEntradasUsuarioAgendas = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.query(
    "SELECT entradas_usuario_agenda.idEntrada AS ID, entradas_usuario_agenda.fechaVisita AS FECHA, entradas_usuario_agenda.hora AS HORA, ciudades.nombreCiudad AS CIUDAD FROM entradas_usuario_agenda JOIN ciudades ON entradas_usuario_agenda._idCiudad=ciudades.idCiudad"
  );
  res.json(rows);
};

export const getAgendaDatos = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.query(
    "SELECT salidas_transporte.idSalidasTransporte AS ID_TRANSPORTE, establecimientos.nombre AS NOMBRE, ciudades.idCiudad AS ID_CIUDAD, ciudades.nombreCiudad FROM establecimientos JOIN establecimiento_pro ON establecimiento_pro._idEstablecimiento=establecimientos.idEstablecimiento JOIN salidas_transporte ON establecimiento_pro._idEstablecimiento=salidas_transporte._idTransporte JOIN ciudades ON ciudades.idCiudad=salidas_transporte._idCiudadDestino WHERE establecimientos.tipoEstablecimiento='TR'"
  );
  res.json(rows);
};

export const getEntradasUsuarioAgendaCount = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.query(
    "SELECT COUNT(*) FROM entradas_usuario_agenda"
  );
  res.json(rows[0]["COUNT(*)"]);
};

export const getEntradasUsuarioAgenda = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.query(
    "SELECT * FROM entradas_usuario_agenda WHERE idEntrada = ?",
    [req.params.id]
  );
  res.json(rows[0]);
};

export const saveEntradasUsuarioAgenda = async (req, res) => {
  const connection = await connect();
  const [results] = await connection.query(
    "INSERT INTO entradas_usuario_agenda(_idUsuario, _idCiudad, _idTransporte, fechaVisita, hora) VALUES(?,?,?,?,?)",
    [
      req.body._idUsuario,
      req.body._idCiudad,
      req.body._idTransporte,
      req.body.fechaVisita,
      req.body.hora,
    ]
  );
  res.json({
    id: results.insertId,
    ...req.body,
  });
};

export const deleteEntradasUsuarioAgenda = async (req, res) => {
  const connection = await connect();
  await connection.query(
    "DELETE FROM entradas_usuario_agenda WHERE idEntrada = ?",
    [req.params.id]
  );
  res.sendStatus(204);
};

export const updateEntradasUsuarioAgenda = async (req, res) => {
  const connection = await connect();
  await connection.query(
    "UPDATE entradas_usuario_agenda SET ? WHERE idEntrada = ?",
    [req.body, req.params.id]
  );
  res.sendStatus(204);
};
