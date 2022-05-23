CREATE DATABASE IF NOT EXISTS tasksdb;
USE tasksdb;

CREATE TABLE IF NOT EXISTS tasks(
id INT NOT NULL AUTO_INCREMENT,
title VARCHAR(100) NOT NULL,
description TEXT,
PRIMARY KEY(id)
);

INSERT INTO tasks (title, description) VALUES 
('task 1', 'Some description 1'),
('task 2', 'Some description 2');



INSERT INTO `administrador_ciudad` (`idUsuario`, `nombreUsuario`, `nombre`, `correo` `imagenUsuario`, `cargoCiudad`, `claveAcceso`) VALUES ('1', 'pec', 'Plutarco Elias Calles', 'ayuntamientoHuautla@gmail.com', 'foto1', 'Regidor', '12345');



INSERT INTO `administrador_establecimiento` (`idUsuario`, `claveAcceso`, `nombreUsuario`, `nombre`, `correo`, `imagenUsuario`, `cargoEmpresa`) VALUES ('1', '12345', 'jegg', 'Juan Carlos Perez Leon', 'pinter@gmail.com', 'fotoAdministrador', 'Gerente');



INSERT INTO `ciudades` (`idCiudad`, `_id_administrador`, `nombreCiudad`, `region`, `municipio`, `correo`, `telefono`, `urlMaps`, `puebloMagico`, `tiposTurismo`, `numero_emergencias`, `calificacion`, `cantidadCalificaciones`, `descripcion`, `imagenRepresentativa`) VALUES ('1', '1', 'Huautla de jimenez', 'CN', 'Huaulta de Jimenez', 'huautla@gmail.com', '2363745896', 'https://goo.gl/maps/WdPfpHCMcgWfR8Vr9', 'GS', '2363745896', '9', '8', 'Pueblo Mágico que se abre paso entre la niebla al llamado del canto del caracol y los vestidos bordados de las mujeres de la Sierra Mazateca. Cuna de la célebre María Sabina, famosa por realizar viajes astrales por medio de hongos alucinógenos de la región de la Cañada. Es un pueblo rodeado de montañas, cascadas, ríos y grutas bajo cielos de azul eterno.', 'imagen1');



INSERT INTO `establecimientos` (`idEstablecimiento`, `nombre`, `tipoEstablecimiento`, `telefono`, `correo`, `pro`, `imagenRepresentativa`) VALUES ('1', 'Pinter super tiendas', 'SP', '2363781256', 'huautla@gmail.com', 'S', 'foto1 ');
INSERT INTO `establecimientos` (`idEstablecimiento`, `nombre`, `tipoEstablecimiento`, `telefono`, `correo`, `pro`, `imagenRepresentativa`) VALUES ('2', 'Mercado Erasto Pineda', 'MR', '2363781251', 'huautla@gmail.com', 'N', 'foto2 ');
INSERT INTO `establecimientos` (`idEstablecimiento`, `nombre`, `tipoEstablecimiento`, `telefono`, `correo`, `pro`, `imagenRepresentativa`) VALUES ('3', 'Ostok Café', 'RS', '2363781252', 'huautla@gmail.com', 'N', 'foto3 ');
INSERT INTO `establecimientos` (`idEstablecimiento`, `nombre`, `tipoEstablecimiento`, `telefono`, `correo`, `pro`, `imagenRepresentativa`) VALUES ('4', 'Pizzas Plan del Carril', 'RS', '2363781255', 'huautla@gmail.com', 'N', 'foto4 ');
INSERT INTO `establecimientos` (`idEstablecimiento`, `nombre`, `tipoEstablecimiento`, `telefono`, `correo`, `pro`, `imagenRepresentativa`) VALUES ('5', 'El panchero', 'RS', '2363781250', 'huautla@gmail.com', 'N', 'foto5 ');
INSERT INTO `establecimientos` (`idEstablecimiento`, `nombre`, `tipoEstablecimiento`, `telefono`, `correo`, `pro`, `imagenRepresentativa`) VALUES ('6', 'Super Uno', 'SP', '2363781259', 'huautla@gmail.com', 'N', 'foto6 ');
INSERT INTO `establecimientos` (`idEstablecimiento`, `nombre`, `tipoEstablecimiento`, `telefono`, `correo`, `pro`, `imagenRepresentativa`) VALUES ('7', 'Hotel Santa Julia', 'HT', '2363781257', 'huautla@gmail.com', 'N', 'foto7 ');
INSERT INTO `establecimientos` (`idEstablecimiento`, `nombre`, `tipoEstablecimiento`, `telefono`, `correo`, `pro`, `imagenRepresentativa`) VALUES ('8', 'Hotel 1 de mayo', 'HT', '2363781258', 'huautla@gmail.com', 'N', 'foto8 ');




INSERT INTO `establecimiento_pro` (`_idEstablecimiento`, `_idAdministrador`, `calificacion`, `cantidadCalificaciones`, `paginaWeb`, `urlMaps`, `tiposPago`) VALUES ('1', '1', '3', '20', 'www.pintersupertiendas.com', 'https://www.google.com/maps/@18.1306211,-96.8463022,21z', 'EF,TJ');
INSERT INTO `establecimiento_pro` (`_idEstablecimiento`, `_idAdministrador`, `calificacion`, `cantidadCalificaciones`, `paginaWeb`, `urlMaps`, `tiposPago`) VALUES ('2', '1', '5', '12', 'www.pintersupertiendas.com', 'https://www.google.com/maps/@18.1306211,-96.8463022,21z', 'EF,TJ');
INSERT INTO `establecimiento_pro` (`_idEstablecimiento`, `_idAdministrador`, `calificacion`, `cantidadCalificaciones`, `paginaWeb`, `urlMaps`, `tiposPago`) VALUES ('3', '1', '2', '25', 'www.pintersupertiendas.com', 'https://www.google.com/maps/@18.1306211,-96.8463022,21z', 'EF,TJ');
INSERT INTO `establecimiento_pro` (`_idEstablecimiento`, `_idAdministrador`, `calificacion`, `cantidadCalificaciones`, `paginaWeb`, `urlMaps`, `tiposPago`) VALUES ('4', '1', '1', '12', 'www.pintersupertiendas.com', 'https://www.google.com/maps/@18.1306211,-96.8463022,21z', 'EF,TJ');
INSERT INTO `establecimiento_pro` (`_idEstablecimiento`, `_idAdministrador`, `calificacion`, `cantidadCalificaciones`, `paginaWeb`, `urlMaps`, `tiposPago`) VALUES ('5', '1', '2', '19', 'www.pintersupertiendas.com', 'https://www.google.com/maps/@18.1306211,-96.8463022,21z', 'EF,TJ');
INSERT INTO `establecimiento_pro` (`_idEstablecimiento`, `_idAdministrador`, `calificacion`, `cantidadCalificaciones`, `paginaWeb`, `urlMaps`, `tiposPago`) VALUES ('6', '1', '4', '25', 'www.pintersupertiendas.com', 'https://www.google.com/maps/@18.1306211,-96.8463022,21z', 'EF,TJ');
INSERT INTO `establecimiento_pro` (`_idEstablecimiento`, `_idAdministrador`, `calificacion`, `cantidadCalificaciones`, `paginaWeb`, `urlMaps`, `tiposPago`) VALUES ('7', '1', '3', '16', 'www.pintersupertiendas.com', 'https://www.google.com/maps/@18.1306211,-96.8463022,21z', 'EF,TJ');
INSERT INTO `establecimiento_pro` (`_idEstablecimiento`, `_idAdministrador`, `calificacion`, `cantidadCalificaciones`, `paginaWeb`, `urlMaps`, `tiposPago`) VALUES ('8', '1', '5', '19', 'www.pintersupertiendas.com', 'https://www.google.com/maps/@18.1306211,-96.8463022,21z', 'EF,TJ');




INSERT INTO `direccion` (`idDireccion`, `_idEstablecimiento`, `_idCiudad`, `colonia`, `numero`, `cp`, `calle`) VALUES ('1', '1', '1', 'Centro', '#53', '68500', 'Av Juarez');
INSERT INTO `direccion` (`idDireccion`, `_idEstablecimiento`, `_idCiudad`, `colonia`, `numero`, `cp`, `calle`) VALUES ('2', '2', '1', 'Centro', '#54', '68500', 'Av Juarez');
INSERT INTO `direccion` (`idDireccion`, `_idEstablecimiento`, `_idCiudad`, `colonia`, `numero`, `cp`, `calle`) VALUES ('3', '3', '1', 'Centro', '#55', '68500', 'Av Juarez');
INSERT INTO `direccion` (`idDireccion`, `_idEstablecimiento`, `_idCiudad`, `colonia`, `numero`, `cp`, `calle`) VALUES ('4', '4', '1', 'Centro', '#56', '68500', 'Av Juarez');
INSERT INTO `direccion` (`idDireccion`, `_idEstablecimiento`, `_idCiudad`, `colonia`, `numero`, `cp`, `calle`) VALUES ('5', '5', '1', 'Centro', '#57', '68500', 'Av Juarez');
INSERT INTO `direccion` (`idDireccion`, `_idEstablecimiento`, `_idCiudad`, `colonia`, `numero`, `cp`, `calle`) VALUES ('6', '6', '1', 'Centro', '#58', '68500', 'Av Juarez');
INSERT INTO `direccion` (`idDireccion`, `_idEstablecimiento`, `_idCiudad`, `colonia`, `numero`, `cp`, `calle`) VALUES ('7', '7', '1', 'Centro', '#59', '68500', 'Av Juarez');
INSERT INTO `direccion` (`idDireccion`, `_idEstablecimiento`, `_idCiudad`, `colonia`, `numero`, `cp`, `calle`) VALUES ('8', '8', '1', 'Centro', '#60', '68500', 'Av Juarez');




INSERT INTO `horario_atencion` (`idHorarioAtencion`, `_idEstablecimiento`, `lunes`, `martes`, `miercoles`, `jueves`, `viernes`, `sabado`, `domingo`) VALUES ('1', '1', '9:00–20:00', '9:00–20:00', '9:00–20:00', '9:00–20:00', '9:00–20:00', '9:00–18:00', '9:00–14:00');
INSERT INTO `horario_atencion` (`idHorarioAtencion`, `_idEstablecimiento`, `lunes`, `martes`, `miercoles`, `jueves`, `viernes`, `sabado`, `domingo`) VALUES ('2', '2', '9:00–20:00', '9:00–20:00', '9:00–20:00', '9:00–20:00', '9:00–20:00', '9:00–18:00', '9:00–14:00');
INSERT INTO `horario_atencion` (`idHorarioAtencion`, `_idEstablecimiento`, `lunes`, `martes`, `miercoles`, `jueves`, `viernes`, `sabado`, `domingo`) VALUES ('3', '3', '9:00–20:00', '9:00–20:00', '9:00–20:00', '9:00–20:00', '9:00–20:00', '9:00–18:00', '9:00–14:00');
INSERT INTO `horario_atencion` (`idHorarioAtencion`, `_idEstablecimiento`, `lunes`, `martes`, `miercoles`, `jueves`, `viernes`, `sabado`, `domingo`) VALUES ('4', '4', '9:00–20:00', '9:00–20:00', '9:00–20:00', '9:00–20:00', '9:00–20:00', '9:00–18:00', '9:00–14:00');
INSERT INTO `horario_atencion` (`idHorarioAtencion`, `_idEstablecimiento`, `lunes`, `martes`, `miercoles`, `jueves`, `viernes`, `sabado`, `domingo`) VALUES ('5', '5', '9:00–20:00', '9:00–20:00', '9:00–20:00', '9:00–20:00', '9:00–20:00', '9:00–18:00', '9:00–14:00');
INSERT INTO `horario_atencion` (`idHorarioAtencion`, `_idEstablecimiento`, `lunes`, `martes`, `miercoles`, `jueves`, `viernes`, `sabado`, `domingo`) VALUES ('6', '6', '9:00–20:00', '9:00–20:00', '9:00–20:00', '9:00–20:00', '9:00–20:00', '9:00–18:00', '9:00–14:00');
INSERT INTO `horario_atencion` (`idHorarioAtencion`, `_idEstablecimiento`, `lunes`, `martes`, `miercoles`, `jueves`, `viernes`, `sabado`, `domingo`) VALUES ('7', '7', '9:00–20:00', '9:00–20:00', '9:00–20:00', '9:00–20:00', '9:00–20:00', '9:00–18:00', '9:00–14:00');
INSERT INTO `horario_atencion` (`idHorarioAtencion`, `_idEstablecimiento`, `lunes`, `martes`, `miercoles`, `jueves`, `viernes`, `sabado`, `domingo`) VALUES ('8', '8', '9:00–20:00', '9:00–20:00', '9:00–20:00', '9:00–20:00', '9:00–20:00', '9:00–18:00', '9:00–14:00');




INSERT INTO `fotos_establecimiento` (`foto`, `_idEstablecimiento`, `descripcion`) VALUES ('1', '1', 'foto establecimiento 1');
INSERT INTO `fotos_establecimiento` (`foto`, `_idEstablecimiento`, `descripcion`) VALUES ('2', '2', 'foto establecimiento 2');
INSERT INTO `fotos_establecimiento` (`foto`, `_idEstablecimiento`, `descripcion`) VALUES ('3', '3', 'foto establecimiento 3');
INSERT INTO `fotos_establecimiento` (`foto`, `_idEstablecimiento`, `descripcion`) VALUES ('4', '4', 'foto establecimiento 4');
INSERT INTO `fotos_establecimiento` (`foto`, `_idEstablecimiento`, `descripcion`) VALUES ('5', '5', 'foto establecimiento 5');
INSERT INTO `fotos_establecimiento` (`foto`, `_idEstablecimiento`, `descripcion`) VALUES ('6', '6', 'foto establecimiento 6');
INSERT INTO `fotos_establecimiento` (`foto`, `_idEstablecimiento`, `descripcion`) VALUES ('7', '7', 'foto establecimiento 7');
INSERT INTO `fotos_establecimiento` (`foto`, `_idEstablecimiento`, `descripcion`) VALUES ('8', '8', 'foto establecimiento 8');




INSERT INTO `origen_transporte` (`_idCiudad`, `_idTransporte`) VALUES ('1', '1');




INSERT INTO `zonas_turisticas` (`idZonaTuristica`, `_idCiudad`, `nombre`, `tipoZona`, `descripcion`, `foto`) VALUES ('1', '1', 'Casa Museo de Maria Sabina ', 'CL', 'La casa museo de María Sabina es dedicada a la sabia de los hongos', 'Foto de zonas turisticas 1');
INSERT INTO `zonas_turisticas` (`idZonaTuristica`, `_idCiudad`, `nombre`, `tipoZona`, `descripcion`, `foto`) VALUES ('2', '1', 'Catedral de San Juan Evangelista', 'EP', 'Catedral construida en honor al santo patrono de huautli de Jiménez San Juan Evangelista en el año 1867.', 'Foto de zonas turisticas 2');
INSERT INTO `zonas_turisticas` (`idZonaTuristica`, `_idCiudad`, `nombre`, `tipoZona`, `descripcion`, `foto`) VALUES ('3', '1', 'Cerro de la Adoración', 'CL', 'Zona cultural de Huautla de Jiménez. El cerro de la adoración es una zona donde las familias suelen ir a disfrutar de un día en familia', 'Foto de zonas turisticas 3');
INSERT INTO `zonas_turisticas` (`idZonaTuristica`, `_idCiudad`, `nombre`, `tipoZona`, `descripcion`, `foto`) VALUES ('4', '1', 'Grutas de San Sebastian o Sotano de San Agustin', 'AQ', 'Reconocido como uno de los sistemas de cuevas más profundos del mundo, con una profundidad de 1250 metros', 'Foto de zonas turisticas 4');
INSERT INTO `zonas_turisticas` (`idZonaTuristica`, `_idCiudad`, `nombre`, `tipoZona`, `descripcion`, `foto`) VALUES ('5', '1', 'Cascada Puente de Fierro', 'AQ', 'Ubicado a 10 minutos del centro de la población, la cascada de puente de fierro', 'Foto de zonas turisticas 5');
INSERT INTO `zonas_turisticas` (`idZonaTuristica`, `_idCiudad`, `nombre`, `tipoZona`, `descripcion`, `foto`) VALUES ('6', '1', 'Rituales de Sanación', 'EP', 'Huautla es sinónimo de rituales, magia y misticismo, todo esto como herencia cultural de la gran María Sabina', 'Foto de zonas turisticas 6');
INSERT INTO `zonas_turisticas` (`idZonaTuristica`, `_idCiudad`, `nombre`, `tipoZona`, `descripcion`, `foto`) VALUES ('7', '1', 'Torre del Reloj', 'CL', 'La torre del reloj, ubicado frente al palacio municipal se cree que fue construida aproximadamente en 1924', 'Foto de zonas turisticas 7');



INSERT INTO `tipos_turismo` (`idTiposTurismo`, `tipoTurismo`) VALUES ('AV', 'AVENTURA');
INSERT INTO `tipos_turismo` (`idTiposTurismo`, `tipoTurismo`) VALUES ('DP', 'DEPORTIVO');
INSERT INTO `tipos_turismo` (`idTiposTurismo`, `tipoTurismo`) VALUES ('NG', 'NEGOCIOS');
INSERT INTO `tipos_turismo` (`idTiposTurismo`, `tipoTurismo`) VALUES ('CL', 'CULTURAL');
INSERT INTO `tipos_turismo` (`idTiposTurismo`, `tipoTurismo`) VALUES ('GS', 'GASTRONOMICO');
INSERT INTO `tipos_turismo` (`idTiposTurismo`, `tipoTurismo`) VALUES ('AQ', 'ARQUEOLOGICO');
INSERT INTO `tipos_turismo` (`idTiposTurismo`, `tipoTurismo`) VALUES ('SL', 'SALUD');
INSERT INTO `tipos_turismo` (`idTiposTurismo`, `tipoTurismo`) VALUES ('RL', 'RURAL');
INSERT INTO `tipos_turismo` (`idTiposTurismo`, `tipoTurismo`) VALUES ('EC', 'ECOLOGICO');
INSERT INTO `tipos_turismo` (`idTiposTurismo`, `tipoTurismo`) VALUES ('EP', 'ESPIRITUAL');





INSERT INTO `tipo_turismo_ciudad` (`_idCiudad`, `_idTiposTurismo`) VALUES ('1', 'AV');
INSERT INTO `tipo_turismo_ciudad` (`_idCiudad`, `_idTiposTurismo`) VALUES ('1', 'DP');
INSERT INTO `tipo_turismo_ciudad` (`_idCiudad`, `_idTiposTurismo`) VALUES ('1', 'NG');
INSERT INTO `tipo_turismo_ciudad` (`_idCiudad`, `_idTiposTurismo`) VALUES ('1', 'CL');
INSERT INTO `tipo_turismo_ciudad` (`_idCiudad`, `_idTiposTurismo`) VALUES ('1', 'GS');
INSERT INTO `tipo_turismo_ciudad` (`_idCiudad`, `_idTiposTurismo`) VALUES ('1', 'AQ');
INSERT INTO `tipo_turismo_ciudad` (`_idCiudad`, `_idTiposTurismo`) VALUES ('1', 'SL');
INSERT INTO `tipo_turismo_ciudad` (`_idCiudad`, `_idTiposTurismo`) VALUES ('1', 'RL');
INSERT INTO `tipo_turismo_ciudad` (`_idCiudad`, `_idTiposTurismo`) VALUES ('1', 'EC');
INSERT INTO `tipo_turismo_ciudad` (`_idCiudad`, `_idTiposTurismo`) VALUES ('1', 'EP');




INSERT INTO `platillos` (`idPlatillos`, `_idCiudad`, `nombre`, `descripcion`, `imagen`) VALUES ('1', '1', 'Tamales de tesmole', 'Platillo típico de la zona, el cual se', 'Foto platillo 1'), ('2', '1', 'Atole Agrio', 'El atole agrio es una bebida ancestral de los mazatecos', 'Foto platillo 2')




INSERT INTO `personajes_importantes` (`idPersonajes`, `_idCiudad`, `nombre`, `anhoNacimiento`, `anhoFallecimiento`, `descripcion`, `foto`) VALUES ('1', '1', 'Huehuentones', '1990', '2020', 'Considerados parte importante de la cultura mazateca, los huehuentones, palabra que significa “la gente que brota del ombligo de la tierra”', 'foto1');
INSERT INTO `personajes_importantes` (`idPersonajes`, `_idCiudad`, `nombre`, `anhoNacimiento`, `anhoFallecimiento`, `descripcion`, `foto`) VALUES ('2', '1', 'Othón García', '1877', '1881', 'Es considerado como el primero Presidente Municipal de Huautla (en proceso de investigación; 1877-1881', 'foto2');
INSERT INTO `personajes_importantes` (`idPersonajes`, `_idCiudad`, `nombre`, `anhoNacimiento`, `anhoFallecimiento`, `descripcion`, `foto`) VALUES ('3', '1', 'Gregorio Herrera', '1990', '2020', 'Nombrado patriarca de Huautla debido a conflictos', 'foto3');
INSERT INTO `personajes_importantes` (`idPersonajes`, `_idCiudad`, `nombre`, `anhoNacimiento`, `anhoFallecimiento`, `descripcion`, `foto`) VALUES ('4', '1', 'Erasto Pineda', '1990', '2020', 'Nace en 1903 y muere el 3 de junio de 1962.', 'foto4');
INSERT INTO `personajes_importantes` (`idPersonajes`, `_idCiudad`, `nombre`, `anhoNacimiento`, `anhoFallecimiento`, `descripcion`, `foto`) VALUES ('5', '1', 'María Sabina', '1990', '2020', 'Sacerdotisa que internacionalizara los hongos alucinantes y a Huautla de Jiménez en 1957.', 'foto5');
INSERT INTO `personajes_importantes` (`idPersonajes`, `_idCiudad`, `nombre`, `anhoNacimiento`, `anhoFallecimiento`, `descripcion`, `foto`) VALUES ('6', '1', 'Raymundo Pérez Carrera', '1990', '2020', 'Trajo el cine por primera vez a esta comunidad después de un peregrinaje de húngaros', 'foto6');
INSERT INTO `personajes_importantes` (`idPersonajes`, `_idCiudad`, `nombre`, `anhoNacimiento`, `anhoFallecimiento`, `descripcion`, `foto`) VALUES ('7', '1', 'Fernando García', '1990', '2020', 'Instala la primera sala cinematográfica con proyectores de 16 mm', 'foto7');
INSERT INTO `personajes_importantes` (`idPersonajes`, `_idCiudad`, `nombre`, `anhoNacimiento`, `anhoFallecimiento`, `descripcion`, `foto`) VALUES ('8', '1', 'Isauro Nava', '1990', '2020', 'En su periodo presidencial (1966-1968)', 'foto8');
INSERT INTO `personajes_importantes` (`idPersonajes`, `_idCiudad`, `nombre`, `anhoNacimiento`, `anhoFallecimiento`, `descripcion`, `foto`) VALUES ('9', '1', 'José Dorantes', '1990', '2020', 'En 1951 compone la letra del corrido de Huautla.', 'foto9');
INSERT INTO `personajes_importantes` (`idPersonajes`, `_idCiudad`, `nombre`, `anhoNacimiento`, `anhoFallecimiento`, `descripcion`, `foto`) VALUES ('10', '1', 'Arnulfo Pineda Cabanzos', '1990', '2020', 'Pionero en el arte plástico de la sierra mazateca.', 'foto10');
INSERT INTO `personajes_importantes` (`idPersonajes`, `_idCiudad`, `nombre`, `anhoNacimiento`, `anhoFallecimiento`, `descripcion`, `foto`) VALUES ('11', '1', 'Froilan García Estrada', '1990', '2020', 'Arreglista y compositor de catorce marcha fúnebres.', 'foto11');
INSERT INTO `personajes_importantes` (`idPersonajes`, `_idCiudad`, `nombre`, `anhoNacimiento`, `anhoFallecimiento`, `descripcion`, `foto`) VALUES ('12', '1', 'José Guadalupe García Parra', '1990', '2020', 'Autor del libro "La Historia de Huautla y la Gesta Oaxaqueña"', 'foto12');
INSERT INTO `personajes_importantes` (`idPersonajes`, `_idCiudad`, `nombre`, `anhoNacimiento`, `anhoFallecimiento`, `descripcion`, `foto`) VALUES ('13', '1', 'Álvaro Estrada Pineda', '1990', '2020', 'Ingeniero de profesión y autor del libro "Vida de María Sabina, la sabia de los hongos".', 'foto13');
INSERT INTO `personajes_importantes` (`idPersonajes`, `_idCiudad`, `nombre`, `anhoNacimiento`, `anhoFallecimiento`, `descripcion`, `foto`) VALUES ('14', '1', 'Juan García Carrera', '1990', '2020', 'Escritor mazateco, autor del libro "La otra vida de María Sabina"', 'foto14');




INSERT INTO `notas_ciudad` (`idNotaCiudad`, `_idCiudad`, `titulo`, `descripcion`, `imagen`, `fechaPublicacion`) VALUES ('1', '1', 'Olor a cempasúchil y música de los muertos', 'Dos días despues de terminar la celebración de Todo Santo (Dia de muertos), el ayuntamiento de Huautla de Jimenez organiza y llevara a cabo un encuentro entre las diversas agrupaciones de huehuentones de la zona; esto con motivo de que todos puedan disfrutar de la música y espectáculo el cual no todos pueden tener en sus casas durante el poco tiempo que dura esta festividad.', 'foto1', '2022-04-08');



INSERT INTO `festividad` (`idFecha`, `_idCiudad`, `dia`, `mes`, `nombre`, `descripcion`, `imagen`) VALUES ('1', '1', '17', '07', 'Festividad de las 3 caidas', 'Desde el año 1943 se celebra en Huautla de Jiménez la festividad en honor al Señor de las tres caídas', 'foto1');
INSERT INTO `festividad` (`idFecha`, `_idCiudad`, `dia`, `mes`, `nombre`, `descripcion`, `imagen`) VALUES ('2', '1', '15', '05', 'Festival de Maria Sabina', 'Entre la sabiduría ancestral y el mito, María Sabina fue la chamana oaxaqueña', 'foto2');
INSERT INTO `festividad` (`idFecha`, `_idCiudad`, `dia`, `mes`, `nombre`, `descripcion`, `imagen`) VALUES ('3', '1', '17', '07', 'Dia de muertos – Todo Santo – Huehuentones', 'a tradición del dia  de Muertos en Huautla de Jiménez, comienza el   27 de octubre', 'foto3');





INSERT INTO `fotos_ciudad` (`foto`, `_idCiudad`, `descripcion`) VALUES ('1', '1', 'foto1');
INSERT INTO `fotos_ciudad` (`foto`, `_idCiudad`, `descripcion`) VALUES ('2', '1', 'foto2');
INSERT INTO `fotos_ciudad` (`foto`, `_idCiudad`, `descripcion`) VALUES ('3', '1', 'foto3');
INSERT INTO `fotos_ciudad` (`foto`, `_idCiudad`, `descripcion`) VALUES ('4', '1', 'foto4');
INSERT INTO `fotos_ciudad` (`foto`, `_idCiudad`, `descripcion`) VALUES ('5', '1', 'foto5');



INSERT INTO `salidas_transporte` (`idSalidasTransporte`, `_idTransporte`, `_idCiudadDestino`, `dia`, `duracionViaje`) VALUES ('1', '1', '1', '17', '60');



INSERT INTO `hora_salida` (`idHora`, `_idSalidasTransporte`, `hora`) VALUES ('1', '1', '15:17');
INSERT INTO `hora_salida` (`idHora`, `_idSalidasTransporte`, `hora`) VALUES ('2', '1', '15:19');

---------------------------------------------------
@administradorCiudad =  http://localhost:3000/administradorCiudad
@administradorEstablecimiento = http://localhost:3000/administradorEstablecimiento
@calificacionesEstablecimientoUsuario = http://localhost:3000/calificacionesEstablecimientoUsuario
@calificacionesUsuariosCiudades = http://localhost:3000/calificacionesUsuariosCiudades
@ciudades = http://localhost:3000/ciudades
@direccion = http://localhost:3000/direccion
@entradasUsuarioAgenda = http://localhost:3000/entradasUsuarioAgenda
@establecimientoPro = http://localhost:3000/establecimientoPro
@establecimientos = http://localhost:3000/establecimientos
@festividad = http://localhost:3000/festividad
@fotosCiudad = http://localhost:3000/fotosCiudad
@fotosEstablecimiento = http://localhost:3000/fotosEstablecimiento
@horarioAtencion = http://localhost:3000/horarioAtencion
@horaSalida = http://localhost:3000/horaSalida
@notasCiudad = http://localhost:3000/notasCiudad
@origenTransporte = http://localhost:3000/origenTransporte
@personajesImportantes = http://localhost:3000/personajesImportantes
@platillos = http://localhost:3000/platillos
@resenhasCiudad = http://localhost:3000/resenhasCiudad
@resenhasEstablecimiento = http://localhost:3000/resenhasEstablecimiento
@salidasTransporte = http://localhost:3000/salidasTransporte
@tasks = http://localhost:3000/tasks
@tiposTurismo = http://localhost:3000/tiposTurismo
@tipoTurismoCiudad = http://localhost:3000/tipoTurismoCiudad
@usuarioApp = http://localhost:3000/usuarioApp
@usuarios = http://localhost:3000/usuarios
@zonasTuristicas = http://localhost:3000/zonasTuristicas

###   administradorCiudad
GET {{administradorCiudad}}
###
GET {{administradorCiudad}}/count
###
GET {{administradorCiudad}}/7
###
POST {{administradorCiudad}}
Content-Type: application/json

{
  "nombreUsuario": "yuya",
   "nombre": "Yael Garcia Cuesta",
   "correo": "yael@gmail.com",
   "imagenUsuario" :"foto2",
   "cargoCiudad": "Precidentessss",
   "claveAcceso": "1"
}
###
DELETE {{administradorCiudad}}/3
### 
PUT {{administradorCiudad}}/7
content-type: application/json

{
    "nombreUsuario": "lsgm",
    "nombre": "Luis Serapio Garcia Martinez",
    "correo": "luis@gmail.com",
    "imagenUsuario": "foto6",
    "cargoCiudad": "Presidente",
    "claveAcceso": "9"
}

###   administradorEstablecimiento
GET {{administradorEstablecimiento}}
###
GET {{administradorEstablecimiento}}/count
###
GET {{administradorEstablecimiento}}/4
###
POST {{administradorEstablecimiento}}
Content-Type: application/json

{
  "claveAcceso": "ahora26",
  "nombreUsuario": "kcdl",
  "nombre": "Karen Castro De Leon",
  "correo": "karen@gmail.com",
  "imagenUsuario": "fotoDeHamburgeso",
  "cargoEmpresa": "Juez"
}
###
DELETE {{administradorEstablecimiento}}/3
### 
PUT {{administradorEstablecimiento}}/4
content-type: application/json

{
    "claveAcceso": "123456",
    "nombreUsuario": "kcdl",
    "nombre": "yael",
    "correo": "karen@gmail.com",
    "imagenUsuario": "fotoDeHamburgeso",
    "cargoEmpresa": "Juezx"
}




###   calificacionesEstablecimientoUsuario
GET {{calificacionesEstablecimientoUsuario}}
###
GET {{calificacionesEstablecimientoUsuario}}/count
###   
GET {{calificacionesEstablecimientoUsuario}}/1
###   
POST {{calificacionesEstablecimientoUsuario}}
Content-Type: application/json

{
    "_idEstablecimiento":3 ,
    "_idUsuario": 1,
    "calificacion": 2
}
###   
DELETE {{calificacionesEstablecimientoUsuario}}/1
###   
PUT {{calificacionesEstablecimientoUsuario}}/1
content-type: application/json

{
   "_idUsuario": 1,
  "calificacion": 5
}





###   calificacionesUsuariosCiudades
GET {{calificacionesUsuariosCiudades}}
###
GET {{calificacionesUsuariosCiudades}}/count
###   
GET {{calificacionesUsuariosCiudades}}/2
###   
POST {{calificacionesUsuariosCiudades}}
Content-Type: application/json

{
  "_idUsuario": 2,
 "_idCiudad": 1,
  "calificacion": 5
}
###   
DELETE {{calificacionesUsuariosCiudades}}/2
###   
PUT {{calificacionesUsuariosCiudades}}/2
content-type: application/json

{
  "_idUsuario": 2,
 "_idCiudad": 1,
  "calificacion": 9
}


###   ciudades
GET {{ciudades}}
###
GET {{ciudades}}/count
###   
GET {{ciudades}}/4
###   
POST {{ciudades}}
Content-Type: application/json

{
    "_id_administrador": 1,
    "nombreCiudad": "Huautla de jimenez",
    "region": "CN",
    "municipio": "H",
    "correo": "huautla@gmail.com",
    "telefono": "2363745896",
    "urlMaps": "https://goo.gl/maps/WdPfpHCMcgWfR8Vr9",
    "puebloMagico": 1,
    "tiposTurismo": "GS",
    "numero_emergencias": "2363745896",
    "calificacion": 9,
    "cantidadCalificaciones": 8,
    "descripcion": "Pueblo",
    "imagenRepresentativa": "imagen1707"
}
###   
DELETE {{ciudades}}/2
###   
PUT {{ciudades}}/6
content-type: application/json

{
    "_id_administrador": 1,
    "nombreCiudad": "Tehuacan",
    "region": "CN",
    "municipio": "Huaulta de Jimenez",
    "correo": "huautla@gmail.com",
    "telefono": "2363745896",
    "urlMaps": "https://goo.gl/maps/WdPfpHCMcgWfR8Vr9",
    "puebloMagico": 1,
    "tiposTurismo": "GS",
    "numero_emergencias": "2363745896",
    "calificacion": 9,
    "cantidadCalificaciones": 8,
    "descripcion": "E",
    "imagenRepresentativa": "imagendeTehuacan"
}


###   direccion
GET {{direccion}}
###
GET {{direccion}}/count
###
GET {{direccion}}/4
###
POST {{direccion}}
Content-Type: application/json

{
 "idDireccion": 4,
  "_idEstablecimiento": 4,
  "_idCiudad": 1,
  "colonia": "Centro",
  "numero": "#58",
  "cp": "22222",
  "calle": "Conocida"
}
###
DELETE {{direccion}}/8
### 
PUT {{direccion}}/4
content-type: application/json

{
    "_idEstablecimiento": 4,
    "_idCiudad": 1,
    "colonia": "Centro",
    "numero": "#59",
    "cp": "11111",
    "calle": "no conocida"
}

###   entradasUsuarioAgenda
GET {{entradasUsuarioAgenda}}
###
GET {{entradasUsuarioAgenda}}/count
###
GET {{entradasUsuarioAgenda}}/12
###
POST {{entradasUsuarioAgenda}}
Content-Type: application/json

{
 "_idUsuario": 1,
  "_idCiudad": 1,
  "_idTransporte": 1,
  "fechaVisita": "2022-01-22T05:00:00.000Z",
  "hora": "01:01:01"
}
###
DELETE {{entradasUsuarioAgenda}}/13
### 
PUT {{entradasUsuarioAgenda}}/14
content-type: application/json

{
  "_idUsuario": 1,
  "_idCiudad": 1,
  "_idTransporte": 1,
  "fechaVisita": "2000-07-17T05:00:00.000Z",
  "hora": "08:09:00"
}


###   establecimientoPro
GET {{establecimientoPro}}
###
GET {{establecimientoPro}}/count
###
GET {{establecimientoPro}}/8
### REVISAR
POST {{establecimientoPro}}
Content-Type: application/json

{
 "_idAdministrador": 1,
  "calificacion": 5,
  "cantidadCalificaciones": 19,
  "paginaWeb": "www.pintersupertiendas.com",
  "urlMaps": "https://www.google.com/maps/@18.1306211,-96.8463022,21z",
  "tiposPago": "EF,yy"
}
### REVISAR
DELETE {{establecimientoPro}}/2
### 
PUT {{establecimientoPro}}/2
content-type: application/json

{
  "_idAdministrador": 1,
  "calificacion": 5,
  "cantidadCalificaciones": 19,
  "paginaWeb": "www.pintersupertiendas.com",
  "urlMaps": "https://www.google.com/maps/@18.1306211,-96.8463022,21z",
  "tiposPago": "KK,YY"
}






###   establecimientos
GET {{establecimientos}}
###
GET {{establecimientos}}/count
###
GET {{establecimientos}}/8
### 
POST {{establecimientos}}
Content-Type: application/json

{
    "nombre": "La pirateria",
    "tipoEstablecimiento": "SP",
    "telefono": "1234567890",
    "correo": "lapirateria@gmail.com",
    "pro": "S",
    "imagenRepresentativa": "fotodelapirateria "
}
### 
DELETE {{establecimientos}}/9
### 
PUT {{establecimientos}}/8
content-type: application/json

{
  "nombre": "La pirateria",
    "tipoEstablecimiento": "SP",
    "telefono": "1234567890",
    "correo": "lapirateria@gmail.com",
    "pro": "S",
    "imagenRepresentativa": "fotodelapirateria"
}






###   festividad
GET {{festividad}}
###
GET {{festividad}}/count
###
GET {{festividad}}/5
###
POST {{festividad}}
Content-Type: application/json

{
  "_idCiudad": 1,
    "dia": 11,
    "mes": 1,
    "nombre": "Festival de Maria Sabina",
    "descripcion": "Entre la sabiduría ancestral y el mito, María Sabina fue la chamana oaxaqueña",
    "imagen": "foto999"
}
###
DELETE {{festividad}}/1
### 
PUT {{festividad}}/5
content-type: application/json

{
  "_idCiudad": 1,
    "dia": 12,
    "mes": 1,
    "nombre": "Festival de Maria Sabina",
    "descripcion": "Entre la sabiduría ancestral y el mito, María Sabina fue la chamana oaxaqueña",
    "imagen": "foto2"
}






###   fotosCiudad
GET {{fotosCiudad}}
###
GET {{fotosCiudad}}/count
###
GET {{fotosCiudad}}/1
###
POST {{fotosCiudad}}
Content-Type: application/json

{
"foto": "5",
    "_idCiudad": 1,
    "descripcion": "f"
}
###
DELETE {{fotosCiudad}}/5
### 
PUT {{fotosCiudad}}/5
content-type: application/json

{
"foto": "5",
    "_idCiudad": 1,
    "descripcion": "f"
}













###   fotosEstablecimiento
GET {{fotosEstablecimiento}}
###
GET {{fotosEstablecimiento}}/count
###
GET {{fotosEstablecimiento}}/8
###
POST {{fotosEstablecimiento}}
Content-Type: application/json

{
  "foto": "10",
  "_idEstablecimiento": 1,
  "descripcion": "hola"
}
###
DELETE {{fotosEstablecimiento}}/1
### 
PUT {{fotosEstablecimiento}}/8
content-type: application/json

{
"foto": "8",
    "_idEstablecimiento": 8,
    "descripcion": "editado"
}







###   horarioAtencion
GET {{horarioAtencion}}
###
GET {{horarioAtencion}}/count
###
GET {{horarioAtencion}}/1
###
POST {{horarioAtencion}}
Content-Type: application/json

{
  "_idEstablecimiento": 1,
  "lunes": "8:00–20:00",
  "martes": "8:00–20:00",
  "miercoles": "8:00–20:00",
  "jueves": "8:00–20:00",
  "viernes": "8:00–20:00",
  "sabado": "8:00–18:00",
  "domingo": "8:00–14:00"
}
###
DELETE {{horarioAtencion}}/7
### 
PUT {{horarioAtencion}}/1
content-type: application/json

{
  "_idEstablecimiento": 1,
  "lunes": "8:00–20:00",
  "martes": "8:00–20:00",
  "miercoles": "8:00–20:00",
  "jueves": "8:00–20:00",
  "viernes": "8:00–20:00",
  "sabado": "8:00–18:00",
  "domingo": "8:00–14:00"
}












###   horaSalida
GET {{horaSalida}}
###
GET {{horaSalida}}/count
###
GET {{horaSalida}}/3
###
POST {{horaSalida}}
Content-Type: application/json

{
  "idHora": 4,
    "_idSalidasTransporte": 3,
    "hora": "15:11"
}
###
DELETE {{horaSalida}}/2
### 
PUT {{horaSalida}}/4
content-type: application/json

{
  "idHora": 4,
    "_idSalidasTransporte": 3,
    "hora": "15:00"
}





###   notasCiudad
GET {{notasCiudad}}
###
GET {{notasCiudad}}/count
###
GET {{notasCiudad}}/1
###
POST {{notasCiudad}}
Content-Type: application/json

{
  "_idCiudad": 1,
  "titulo": "Holas como estas",
  "descripcion": "Bien Gracias",
  "imagen": "infinitum",
  "fechaPublicacion": "2021-04-08T05:00:00.000Z"
}
###
DELETE {{notasCiudad}}/1
### 
PUT {{notasCiudad}}/15
content-type: application/json

{
  "_idCiudad": 1,
  "titulo": "Holas como estas",
  "descripcion": "Bien Gracias",
  "imagen": "i",
  "fechaPublicacion": "2022-03-08T05:00:00.000Z"
}




###   origenTransporte
GET {{origenTransporte}}
###
GET {{origenTransporte}}/count
###
GET {{origenTransporte}}/3
###   
POST {{origenTransporte}}
Content-Type: application/json

{
   "_idCiudad": 1,
    "_idTransporte": 3
}

###
DELETE {{origenTransporte}}/4
### 
PUT {{origenTransporte}}/1
content-type: application/json

{
 "_idTransporte": 2
}




###   personajesImportantes
GET {{personajesImportantes}}
###
GET {{personajesImportantes}}/count
###
GET {{personajesImportantes}}/14
###
POST {{personajesImportantes}}
Content-Type: application/json

{
    "_idCiudad": 1,
    "nombre": "Yael",
    "anhoNacimiento": 1020,
    "anhoFallecimiento": 3000,
    "descripcion": "Nunca envegecera",
    "foto": "fotos de Yaelssss"
}
###
DELETE {{personajesImportantes}}/15
### 
PUT {{personajesImportantes}}/14
content-type: application/json

{
    "_idCiudad": 1,
    "nombre": "Huehuentones",
    "anhoNacimiento": 1990,
    "anhoFallecimiento": 2020,
    "descripcion": "Hola",
    "foto": "foto1"
}





###   platillos
GET {{platillos}}
###
GET {{platillos}}/count
###
GET {{platillos}}/1
###
POST {{platillos}}
Content-Type: application/json

{
  "_idCiudad": 1,
  "nombre": "Tacos de canasta",
  "descripcion": "La mejor comida",
  "imagen": "Los tacos las cuapas"
}
###
DELETE {{platillos}}/2
### 
PUT {{platillos}}/1
content-type: application/json

{
    "_idCiudad": 1,
    "nombre": "Tamales",
    "descripcion": "Platillo",
    "imagen": "Foto"
}





###   resenhasCiudad
GET {{resenhasCiudad}}
###
GET {{resenhasCiudad}}/count
###
GET {{resenhasCiudad}}/2
###
POST {{resenhasCiudad}}
Content-Type: application/json

{
  "_idUsuario": 1,
  "_idCiudad": 1,
  "contenido": "contenido de una persona"
}
###
DELETE {{resenhasCiudad}}/4
### 
PUT {{resenhasCiudad}}/2
content-type: application/json

{
     "_idUsuario": 1,
  "_idCiudad": 1,
  "contenido": "xxx"
}





###   resenhasEstablecimiento
GET {{resenhasEstablecimiento}}
###
GET {{resenhasEstablecimiento}}/count
###
GET {{resenhasEstablecimiento}}/2
###
POST {{resenhasEstablecimiento}}
Content-Type: application/json

{
    "_idEstablecimiento": 1,
    "_idUsuario": 1,
    "contenido": "bueno y malo"
}
###
DELETE {{resenhasEstablecimiento}}/2
### 
PUT {{resenhasEstablecimiento}}/3
content-type: application/json

{
    "_idEstablecimiento": 1,
    "_idUsuario": 1,
    "contenido": "hola como estas"
}





###   salidasTransporte
GET {{salidasTransporte}}
###
GET {{salidasTransporte}}/count
###
GET {{salidasTransporte}}/1
###
POST {{salidasTransporte}}
Content-Type: application/json

{
    "_idTransporte": 1,
    "_idCiudadDestino": 1,
    "dia": "2",
    "duracionViaje": 20
}
###
DELETE {{salidasTransporte}}/2
### 
PUT {{salidasTransporte}}/3
content-type: application/json

{
    "_idTransporte": 1,
    "_idCiudadDestino": 1,
    "dia": "99",
    "duracionViaje": 90
}





###   tasks
GET {{tasks}}
###
GET {{tasks}}/count
###
GET {{tasks}}/1
###
POST {{tasks}}
Content-Type: application/json

{
   "title": "perro",
  "description": "Guao"
}
###
DELETE {{tasks}}/1
### 
PUT {{tasks}}/3
content-type: application/json

{
    "title": "gato",
  "description": "Miau"
}






###   tiposTurismo
GET {{tiposTurismo}}
###
GET {{tiposTurismo}}/count
###
GET {{tiposTurismo}}/LS
###
POST {{tiposTurismo}}
Content-Type: application/json

{
   "idTiposTurismo": "YA",
  "tipoTurismo": "YAEL"
}
###
DELETE {{tiposTurismo}}/YA
### 
PUT {{tiposTurismo}}/LS
content-type: application/json

{
   "idTiposTurismo": "LS",
    "tipoTurismo": "yael"
}






###   tipoTurismoCiudad
GET {{tipoTurismoCiudad}}
###
GET {{tipoTurismoCiudad}}/count
###
GET {{tipoTurismoCiudad}}/1
###
POST {{tipoTurismoCiudad}}
Content-Type: application/json

{
   "_idCiudad": 1,
  "_idTiposTurismo": "LS"
}
###
DELETE {{tipoTurismoCiudad}}/
### 
PUT {{tipoTurismoCiudad}}/1
content-type: application/json

{
   "_idCiudad": 1,
  "_idTiposTurismo": "YA"
}






###   usuarioApp
GET {{usuarioApp}}
###
GET {{usuarioApp}}/count
###
GET {{usuarioApp}}/1
###
POST {{usuarioApp}}
Content-Type: application/json

{
  "nombreUsuario": "YAEL",
  "nombre": "Yael Garcia Cuesta",
  "fechaNacimiento": "2000-04-06T05:00:00.000Z",
  "correo": "yael@gmail.com",
  "genero": "H",
  "tiposTurismo": "NT",
  "imagenUsuario": "Imagen de Yael",
  "claveAcceso": "yael"
}
###
DELETE {{usuarioApp}}/
### 
PUT {{usuarioApp}}/1
content-type: application/json

{
  "nombreUsuario": "luis",
    "nombre": "Luis Serapio Martinez Garcia",
    "fechaNacimiento": "2022-04-06T05:00:00.000Z",
    "correo": "luis@gmail.com",
    "genero": "H",
    "tiposTurismo": "NT",
    "imagenUsuario": "Imagen de Luis",
    "claveAcceso": "luis"
}






###   zonasTuristicas
GET {{zonasTuristicas}}
###
GET {{zonasTuristicas}}/count
###
GET {{zonasTuristicas}}/12
###
POST {{zonasTuristicas}}
Content-Type: application/json

{
  "_idCiudad": 1,
    "nombre": "Casa de Yael",
    "tipoZona": "CL",
    "descripcion": "La casa de Yael es bonita",
    "foto": "Foto de la casa de Yael"
}
###
DELETE {{zonasTuristicas}}/
### 
PUT {{zonasTuristicas}}/12
content-type: application/json

{
  "_idCiudad": 1,
    "nombre": "Casa de Lupe",
    "tipoZona": "CL",
    "descripcion": "La casa de Yael es bonita",
    "foto": "Foto de la casa de Yael"
}

SELECT 
establecimientos.nombre AS NombreEstable, 
establecimientos.telefono AS TelefonoEstable, 
establecimientos.correo AS CorreoEstable, 
establecimientos.imagenRepresentativa AS ImagenEstable, 
establecimiento_pro.calificacion AS CalificacionPro, 
establecimiento_pro.cantidadCalificaciones AS CantidadCalificionPro, 
establecimiento_pro.paginaWeb AS PaginaWebPro, 
establecimiento_pro.urlMaps AS UrlMapaPro,
direccion.calle AS CalleDireccion,
direccion.numero AS NumeroDireccion,
direccion.cp AS CPDireccion,
direccion.colonia AS ColoniaDireccion,
ciudades.nombreCiudad AS NombreCiudad
FROM establecimientos 
JOIN establecimiento_pro 
ON establecimientos.idEstablecimiento=establecimiento_pro._idEstablecimiento 
JOIN direccion
ON  establecimientos.idEstablecimiento=direccion._idEstablecimiento
JOIN ciudades
ON ciudades.idCiudad = direccion._idCiudad
WHERE establecimientos.tipoEstablecimiento="TR"