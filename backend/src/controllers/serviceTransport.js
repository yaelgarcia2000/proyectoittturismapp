import { connect } from "../database";

export const getServiceTransport = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.query(
    "SELECT establecimientos.nombre AS NombreEstable, establecimientos.telefono AS TelefonoEstable, establecimientos.correo AS CorreoEstable, establecimientos.imagenRepresentativa AS ImagenEstable, establecimiento_pro.calificacion AS CalificacionPro, establecimiento_pro.cantidadCalificaciones AS CantidadCalificionPro, establecimiento_pro.paginaWeb AS PaginaWebPro, establecimiento_pro.urlMaps AS UrlMapaPro, direccion.calle AS CalleDireccion, direccion.numero AS NumeroDireccion, direccion.cp AS CPDireccion, direccion.colonia AS ColoniaDireccion, ciudades.nombreCiudad AS NombreCiudad, horario_atencion.lunes AS Lunes, horario_atencion.martes AS Martes, horario_atencion.miercoles AS Miercoles, horario_atencion.jueves AS Jueves, horario_atencion.viernes AS Viernes, horario_atencion.sabado AS Sabado, horario_atencion.domingo AS Domingo FROM establecimientos JOIN establecimiento_pro ON establecimientos.idEstablecimiento=establecimiento_pro._idEstablecimiento JOIN direccion ON  establecimientos.idEstablecimiento=direccion._idEstablecimiento JOIN ciudades ON ciudades.idCiudad = direccion._idCiudad JOIN horario_atencion ON horario_atencion._idEstablecimiento=establecimientos.idEstablecimiento WHERE establecimientos.tipoEstablecimiento='TR'"
  );
  res.json(rows);
};
