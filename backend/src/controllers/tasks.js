import { connect } from "../database";

export const getTasks = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.query(
    "SELECT salidas_transporte.idSalidasTransporte AS ID_TRANSPORTE, establecimientos.nombre AS NOMBRE, ciudades.idCiudad AS ID_CIUDAD, ciudades.nombreCiudad FROM establecimientos JOIN establecimiento_pro ON establecimiento_pro._idEstablecimiento=establecimientos.idEstablecimiento JOIN salidas_transporte ON establecimiento_pro._idEstablecimiento=salidas_transporte._idTransporte JOIN ciudades ON ciudades.idCiudad=salidas_transporte._idCiudadDestino WHERE establecimientos.tipoEstablecimiento='TR'"
  );
  res.json(rows);
};

export const getTaskCount = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.query("SELECT COUNT(*) FROM tasks");
  res.json(rows[0]["COUNT(*)"]);
};

export const getTask = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.query("SELECT * FROM tasks WHERE id = ?", [
    req.params.id,
  ]);
  res.json(rows[0]);
};

export const saveTask = async (req, res) => {
  const connection = await connect();
  const [results] = await connection.query(
    "INSERT INTO tasks(title, description) VALUES(?,?)",
    [req.body.title, req.body.description]
  );
  res.json({
    id: results.insertId,
    ...req.body,
  });
};

export const deleteTasks = async (req, res) => {
  const connection = await connect();
  await connection.query("DELETE FROM tasks WHERE id = ?", [req.params.id]);
  res.sendStatus(204);
};

export const updateTasks = async (req, res) => {
  const connection = await connect();
  await connection.query("UPDATE tasks SET ? WHERE id = ?", [
    req.body,
    req.params.id,
  ]);
  res.sendStatus(204);
};
