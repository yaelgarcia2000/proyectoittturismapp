-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 27-05-2022 a las 01:12:54
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `turismapp`
--

DELIMITER $$
--
-- Procedimientos
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `alterarCiudad` (IN `usuario` VARCHAR(20), IN `correo` VARCHAR(100), IN `telefono` VARCHAR(10), IN `magico` TINYINT, IN `tipos` VARCHAR(20), IN `emergencias` INT(10), IN `descripcion` VARCHAR(500))  NO SQL
BEGIN
DECLARE idAdmin INT;
SELECT administrador_ciudad.idUsuario into idAdmin from administrador_ciudad WHERE administrador_ciudad.nombreUsuario=usuario;
if idAdmin > 0 THEN
	UPDATE ciudades SET
    ciudades.correo=correo,
    ciudades.telefono=telefono,
    ciudades.tiposTurismo=tipos,
    ciudades.puebloMagico=magico,
    ciudades.numero_emergencias=emergencias,
    ciudades.descripcion=descripcion
    WHERE ciudades._id_administrador=idAdmin;
    SELECT ciudades.idCiudad as ID FROM ciudades WHERE ciudades._id_administrador=idAdmin;
END IF;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `ciudadesFavoritas` ()  NO SQL
SELECT ciudades.idCiudad as id , ciudades.nombreCiudad as nombre, ciudades.calificacion as calificacion, ciudades.imagenRepresentativa as foto from ciudades ORDER BY ciudades.calificacion LIMIT 3$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `consultarCiudades` (IN `nombre` VARCHAR(100))  NO SQL
SELECT ciudades.idCiudad as ID, ciudades.nombreCiudad as NOMBRE, ciudades.calificacion as CALIFICACION, ciudades.imagenRepresentativa as FOTO from ciudades WHERE ciudades.nombreCiudad REGEXP nombre$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `crearAdminCiudad` (IN `usuario` VARCHAR(20), IN `nombre` VARCHAR(50), IN `correo` VARCHAR(100), IN `cargo` VARCHAR(45), IN `clave` VARCHAR(45))  NO SQL
BEGIN
DECLARE userExist  INT;
SET userExist = (SELECT count(*) from administrador_ciudad WHERE administrador_ciudad.nombreUsuario=usuario);
IF userExist =0 THEN
	INSERT INTO administrador_ciudad(administrador_ciudad.nombreUsuario, administrador_ciudad.nombre, administrador_ciudad.correo, administrador_ciudad.cargoCiudad, administrador_ciudad.claveAcceso) VALUES (usuario, nombre, correo, cargo, clave);
    SELECT administrador_ciudad.idUsuario as ID, administrador_ciudad.nombreUsuario as USUARIO FROM administrador_ciudad WHERE administrador_ciudad.nombreUsuario=usuario;
END IF;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `crearAdminEstablecimiento` (IN `usuario` VARCHAR(20), IN `nombre` VARCHAR(50), IN `correo` VARCHAR(100), IN `cargo` VARCHAR(45), IN `clave` VARCHAR(45))  NO SQL
BEGIN
DECLARE userExist  INT;
SET userExist = (SELECT count(*) from administrador_establecimiento WHERE administrador_establecimiento.nombreUsuario=usuario);
IF userExist = 0 THEN
	INSERT INTO administrador_establecimiento(administrador_establecimiento.nombreUsuario, administrador_establecimiento.nombre, administrador_establecimiento.correo, administrador_establecimiento.cargoEmpresa, administrador_establecimiento.claveAcceso) VALUES (usuario, nombre, correo, cargo, clave);
    SELECT administrador_establecimiento.idUsuario as ID, administrador_establecimiento.nombreUsuario as USUARIO FROM administrador_establecimiento WHERE administrador_establecimiento.nombreUsuario=usuario;
END IF;

END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `crearCiudad` (IN `administrador` VARCHAR(20), IN `ciudad` VARCHAR(100), IN `region` VARCHAR(2), IN `municipio` VARCHAR(100), IN `correo` VARCHAR(100), IN `telefono` VARCHAR(10), IN `magico` VARCHAR(1), IN `tipos` VARCHAR(20), IN `emergencias` VARCHAR(10), IN `descripcion` VARCHAR(500))  NO SQL
BEGIN
DECLARE adminId INT;
SELECT administrador_ciudad.idUsuario INTO adminId from administrador_ciudad WHERE administrador_ciudad.nombreUsuario=administrador;
IF adminId>0 THEN
	INSERT INTO ciudades(ciudades._id_administrador, ciudades.nombreCiudad, ciudades.region, ciudades.municipio, ciudades.correo, ciudades.telefono, ciudades.puebloMagico, ciudades.tiposTurismo, ciudades.numero_emergencias, ciudades.descripcion) values (adminId, ciudad, region, municipio, correo, telefono, magico, tipos, emergencias, descripcion);
    SELECT ciudades.idCiudad as ID, ciudades.nombreCiudad as NOMBRE from ciudades WHERE ciudades._id_administrador=adminId;
END IF;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `crearEstablecimiento` (IN `administrador` VARCHAR(20), IN `nombre` VARCHAR(40), IN `correo` VARCHAR(100), IN `telefono` VARCHAR(10), IN `tipo` VARCHAR(2), IN `ciudad` INT, IN `colonia` VARCHAR(50), IN `numero` VARCHAR(5), IN `cp` VARCHAR(5), IN `calle` VARCHAR(45), IN `pagina` VARCHAR(100), IN `maps` VARCHAR(100))  NO SQL
BEGIN
DECLARE adminId INT;
DECLARE establecimientoId INT;
SELECT administrador_establecimiento.idUsuario INTO adminId FROM administrador_establecimiento WHERE administrador_establecimiento.nombreUsuario=administrador;
IF adminId>0 THEN
	INSERT INTO establecimientos (establecimientos.nombre, establecimientos.correo, establecimientos.telefono, establecimientos.tipoEstablecimiento, establecimientos.pro) VALUES (nombre, correo, telefono, tipo,1);
    SELECT LAST_INSERT_ID() INTO establecimientoId;
    INSERT INTO direccion(direccion._idEstablecimiento, direccion._idCiudad, direccion.colonia, direccion.numero, direccion.cp, direccion.calle) VALUES(establecimientoId, ciudad, colonia, numero, cp, calle);
    INSERT INTO establecimiento_pro(establecimiento_pro._idEstablecimiento, establecimiento_pro._idAdministrador, establecimiento_pro.paginaWeb, establecimiento_pro.urlMaps) VALUES(establecimientoId, adminId, pagina, maps);
    SELECT establecimiento_pro._idEstablecimiento AS ID, establecimiento_pro._idAdministrador AS ADMIN, establecimientos.nombre AS NOMBRE FROM establecimiento_pro JOIN establecimientos ON establecimiento_pro._idEstablecimiento=establecimientos.idEstablecimiento WHERE establecimientos.idEstablecimiento=establecimientoId;
END IF;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `crearUsuario` (IN `usuario` VARCHAR(20), IN `nombre` VARCHAR(50), IN `fecha` DATE, IN `correo` VARCHAR(100), IN `genero` VARCHAR(1), IN `tipos` VARCHAR(20), IN `clave` VARCHAR(45))  BEGIN
DECLARE user_exist INT;
SET user_exist = (SELECT COUNT(*) from usuario_app WHERE usuario_app.nombreUsuario=usuario);
IF user_exist=0 THEN
	INSERT INTO usuario_app(usuario_app.nombreUsuario, usuario_app.nombre, usuario_app.fechaNacimiento, usuario_app.correo, usuario_app.genero, usuario_app.tiposTurismo, usuario_app.claveAcceso) VALUES (usuario, nombre, fecha, correo, genero, tipos, clave);
    SELECT usuario_app.idUsuario as id, usuario_app.nombreUsuario from usuario_app WHERE usuario_app.nombreUsuario=usuario;
END IF;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `establecimientosFavoritos` ()  NO SQL
SELECT `establecimientos`.`idEstablecimiento` as 'id', `establecimiento_pro`.`calificacion` as 'calificacion', `establecimientos`.`nombre` as 'nombre', `establecimientos`.`imagenRepresentativa` as 'foto' FROM `establecimientos` JOIN establecimiento_pro on establecimiento_pro._idEstablecimiento = establecimientos.idEstablecimiento ORDER BY `establecimiento_pro`.`calificacion` DESC LIMIT 3$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `getHomeData` ()  NO SQL
BEGIN
SELECT ciudades.idCiudad as ID, ciudades.nombreCiudad as nombre, ciudades.calificacion as calificacion, ciudades.imagenRepresentativa as foto from ciudades ORDER BY ciudades.calificacion DESC LIMIT 3;
SELECT establecimientos.idEstablecimiento as ID, establecimientos.nombre as nombre,IF(establecimientos.pro=1, establecimiento_pro.calificacion,0) as CALIFICACION, establecimientos.imagenRepresentativa as foto from establecimientos LEFT JOIN establecimiento_pro on establecimiento_pro._idEstablecimiento=establecimientos.idEstablecimiento ORDER BY establecimiento_pro.calificacion DESC LIMIT 3;
SELECT notas_ciudad.idNotaCiudad as ID, notas_ciudad.titulo as titulo, notas_ciudad.imagen as foto from notas_ciudad ORDER BY notas_ciudad.fechaPublicacion DESC LIMIT 3;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `modificarEstablecimiento` (IN `id` INT, IN `nombre` VARCHAR(40), IN `tipo` VARCHAR(2), IN `telefono` VARCHAR(10), IN `correo` VARCHAR(100), IN `pagina` VARCHAR(100), IN `maps` INT(100))  NO SQL
BEGIN
UPDATE establecimientos set establecimientos.nombre=nombre, establecimientos.tipoEstablecimiento=tipo, establecimientos.telefono=telefono, establecimientos.correo=correo WHERE establecimientos.idEstablecimiento=id;
update establecimiento_pro SET establecimiento_pro.paginaWeb=pagina,establecimiento_pro.urlMaps=maps WHERE establecimiento_pro._idEstablecimiento=id;
SELECT establecimiento_pro._idEstablecimiento AS ID, establecimiento_pro._idAdministrador AS ADMIN, establecimientos.nombre AS NOMBRE FROM establecimiento_pro JOIN establecimientos ON establecimiento_pro._idEstablecimiento=establecimientos.idEstablecimiento WHERE establecimientos.idEstablecimiento=establecimientoId;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `notasRecientes` ()  NO SQL
SELECT notas_ciudad.idNotaCiudad as id, notas_ciudad.titulo as titulo from notas_ciudad ORDER BY notas_ciudad.fechaPublicacion DESC limit 3$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `reclamarEstablecimiento` (IN `username` VARCHAR(20), IN `idEstablecimiento` INT)  NO SQL
BEGIN
DECLARE adminId INT;
SELECT administrador_establecimiento.idUsuario INTO adminId from administrador_establecimiento WHERE administrador_establecimiento.nombreUsuario=username;
UPDATE establecimientos SET establecimientos.pro=1 WHERE establecimientos.idEstablecimiento=idEstablecimiento;
INSERT INTO establecimiento_pro(establecimiento_pro._idEstablecimiento, establecimiento_pro._idAdministrador) VALUES(idEstablecimiento,adminId);
SELECT establecimiento_pro._idEstablecimiento AS ID, establecimiento_pro._idAdministrador AS ADMIN, establecimientos.nombre AS NOMBRE FROM establecimiento_pro JOIN establecimientos ON establecimiento_pro._idEstablecimiento=establecimientos.idEstablecimiento WHERE establecimientos.idEstablecimiento=idEstablecimiento;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `subirFotoCiudad` (IN `administrador` VARCHAR(20), IN `pass` VARCHAR(45), IN `url` VARCHAR(33), IN `descripcion` VARCHAR(45))  NO SQL
BEGIN
DECLARE cityId INT;
SELECT ciudades.idCiudad INTO cityId from ciudades JOIN administrador_ciudad on administrador_ciudad.idUsuario=ciudades._id_administrador WHERE administrador_ciudad.nombreUsuario=administrador AND administrador_ciudad.claveAcceso=pass;
IF cityId THEN
	INSERT into fotos_ciudad(fotos_ciudad._idCiudad, fotos_ciudad.foto, fotos_ciudad.descripcion) VALUES(cityId, url, descripcion);
    SELECT fotos_ciudad._idCiudad as CIUDAD, fotos_ciudad.foto AS FOTO from fotos_ciudad WHERE fotos_ciudad.foto=url;
END IF;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `subirRepresentativa` (IN `usuario` VARCHAR(20), IN `imagen` VARCHAR(33))  NO SQL
BEGIN
DECLARE cityId INT;
SELECT ciudades.idCiudad INTO cityId from ciudades JOIN administrador_ciudad on administrador_ciudad.idUsuario=ciudades._id_administrador WHERE administrador_ciudad.nombreUsuario=usuario;
IF cityId THEN
	UPDATE ciudades SET ciudades.imagenRepresentativa=imagen WHERE ciudades.idCiudad=cityId;
    SELECT ciudades._id_administrador as ADMIN, ciudades.imagenRepresentativa as FOTO from ciudades WHERE ciudades.idCiudad=cityId;
END IF;
END$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `administrador_ciudad`
--

CREATE TABLE `administrador_ciudad` (
  `idUsuario` int(11) NOT NULL,
  `nombreUsuario` varchar(20) COLLATE utf8_spanish_ci NOT NULL,
  `nombre` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `correo` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `imagenUsuario` varchar(45) COLLATE utf8_spanish_ci DEFAULT NULL,
  `cargoCiudad` varchar(45) COLLATE utf8_spanish_ci NOT NULL,
  `claveAcceso` varchar(45) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `administrador_ciudad`
--

INSERT INTO `administrador_ciudad` (`idUsuario`, `nombreUsuario`, `nombre`, `correo`, `imagenUsuario`, `cargoCiudad`, `claveAcceso`) VALUES
(1, 'Huautla', 'Luis Serapio Martinez Garcia', 'ayuntamientoHuautla@gmail.com', NULL, 'Regidor', '25a836ce3f63b22731d6fb187a5d9f5f'),
(2, 'lsgm', 'Yael Garcia Cuesta', 'yael@gmail.com', 'foto2', 'Precidente', '123456'),
(3, 'ygcd', 'Yael Garcia Cuesta', 'yael@gmail.com', 'foto2', 'Precidente', '123456'),
(4, 'ygcd', 'Yael Garcia Cuesta', 'yael@gmail.com', 'foto2', 'Precidentessss', '123456'),
(5, 'ygcd', 'Yael Garcia Cuesta', 'yael@gmail.com', 'foto2', 'Precidentessss', '123456'),
(6, 'lsgm', 'Luis Serapio Garcia Martinez', 'luis@gmail.com', 'foto6', 'Presidente', '1'),
(7, 'lsgm', 'Luis Serapio Garcia Martinez', 'luis@gmail.com', 'foto6', 'Presidente', '9'),
(8, 'yuya', 'Yael Garcia Cuesta', 'yael@gmail.com', 'foto2', 'Precidentessss', '1'),
(9, 'AyuntamientoHuautla', 'Luis Serapio', 'luiserapio@gmail.com', NULL, 'Presidente', '25a836ce3f63b22731d6fb187a5d9f5f'),
(10, 'Huajuapan', 'Plutarco Elias Calles', 'huaujuapan@gmial.com', NULL, 'Residente', 'dadd5e87758c85b5181fd00f096bb494'),
(11, 'Huatulco', 'Huat mart gat', 'huatulco@gmail.com', '1V86e0u3Nm5v5_luryeecSsCsqN1QakmL', 'residente', '4501e5c40b61563e29a6af5f6ed3244d'),
(12, 'Tuxtepec', 'Tuxtepec Martinez', 'tuxtepec@gmail.com', NULL, 'Residente', 'ab13f0a8cc12dd8b6708b37a7e1f5b12');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `administrador_establecimiento`
--

CREATE TABLE `administrador_establecimiento` (
  `idUsuario` int(11) NOT NULL,
  `claveAcceso` varchar(45) COLLATE utf8_spanish_ci NOT NULL,
  `nombreUsuario` varchar(20) COLLATE utf8_spanish_ci NOT NULL,
  `nombre` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `correo` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `imagenUsuario` varchar(45) COLLATE utf8_spanish_ci DEFAULT NULL,
  `cargoEmpresa` varchar(45) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `administrador_establecimiento`
--

INSERT INTO `administrador_establecimiento` (`idUsuario`, `claveAcceso`, `nombreUsuario`, `nombre`, `correo`, `imagenUsuario`, `cargoEmpresa`) VALUES
(1, '12345', 'jegg', 'Juan Carlos Perez Leon', 'pinter@gmail.com', 'fotoAdministrador', 'Gerente'),
(2, '123456', 'kcdl', 'Karen Castro De Leon', 'karen@gmail.com', 'fotoDeHamburgeso', 'Juezx'),
(3, '123', 'kcdl', 'Karen Castro De Leon', 'karen@gmail.com', 'fotoDeHamburgeso', 'Juez'),
(4, '123456', 'kcdl', 'yael', 'karen@gmail.com', 'fotoDeHamburgeso', 'Juezx'),
(6, '00f211171adadb88a33e5b6eded68235', 'SuperUno', 'Uno Martinez Garcia', 'Uno@gmail.com', NULL, 'Residente');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `calificaciones_establecimiento_usuario`
--

CREATE TABLE `calificaciones_establecimiento_usuario` (
  `_idEstablecimiento` int(11) NOT NULL,
  `_idUsuario` int(11) NOT NULL,
  `calificacion` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `calificaciones_establecimiento_usuario`
--

INSERT INTO `calificaciones_establecimiento_usuario` (`_idEstablecimiento`, `_idUsuario`, `calificacion`) VALUES
(1, 2, 2),
(2, 1, 2),
(3, 1, 2),
(5, 2, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `calificaciones_usuarios_ciudades`
--

CREATE TABLE `calificaciones_usuarios_ciudades` (
  `_idUsuario` int(11) NOT NULL,
  `_idCiudad` int(11) NOT NULL,
  `calificacion` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `calificaciones_usuarios_ciudades`
--

INSERT INTO `calificaciones_usuarios_ciudades` (`_idUsuario`, `_idCiudad`, `calificacion`) VALUES
(1, 1, 6);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ciudades`
--

CREATE TABLE `ciudades` (
  `idCiudad` int(11) NOT NULL,
  `_id_administrador` int(11) NOT NULL,
  `nombreCiudad` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `region` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `municipio` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `correo` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `telefono` varchar(10) COLLATE utf8_spanish_ci DEFAULT NULL,
  `urlMaps` varchar(500) COLLATE utf8_spanish_ci DEFAULT NULL,
  `tipo` varchar(30) COLLATE utf8_spanish_ci NOT NULL DEFAULT '0',
  `tiposTurismo` varchar(10) COLLATE utf8_spanish_ci NOT NULL DEFAULT 'N',
  `numero_emergencias` varchar(10) COLLATE utf8_spanish_ci DEFAULT NULL,
  `calificacion` tinyint(1) NOT NULL DEFAULT 0,
  `cantidadCalificaciones` int(11) NOT NULL DEFAULT 0,
  `descripcion` varchar(500) COLLATE utf8_spanish_ci NOT NULL,
  `imagenRepresentativa` varchar(45) COLLATE utf8_spanish_ci DEFAULT NULL,
  `puebloMagico` varchar(1) COLLATE utf8_spanish_ci NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `ciudades`
--

INSERT INTO `ciudades` (`idCiudad`, `_id_administrador`, `nombreCiudad`, `region`, `municipio`, `correo`, `telefono`, `urlMaps`, `tipo`, `tiposTurismo`, `numero_emergencias`, `calificacion`, `cantidadCalificaciones`, `descripcion`, `imagenRepresentativa`, `puebloMagico`) VALUES
(1, 1, 'Huautla de Jiménez', 'Cañada', ' Huautla de Jiménez', 'huautla@gmail.com', '2363745896', 'https://www.google.es/maps/place/Huautla+de+Jim%C3%A9nez,+Oax./@18.1297399,-96.8550499,14z/data=!3m1!4b1!4m5!3m4!1s0x85c4235223eb281d:0x186a782628e43ba6!8m2!3d18.1310861!4d-96.8431402', 'Pueblo mágico', 'Aventura', '2147483647', 10, 8, 'Huautla de Jiménez es una población del estado mexicano de Oaxaca. Que es parte del municipio de Huautla de Jiménez y el Distrito de Teotitlán, dentro de la Región Cañada. Forma parte, desde el año 2015, del programa Pueblos Mágicos.', '1U2p5nchq2etTqjR2lQurlRwou9qucceM', '0'),
(3, 10, 'Huajuapan de León', 'Mixteca', 'Ciudad de Huajuapan de León', 'huajuapan@gmail.com', '2363745896', 'https://www.google.com/maps/place/Huajuapan+de+Le%C3%B3n,+Oax./@17.8046916,-97.8177176,13z/data=!3m1!4b1!4m5!3m4!1s0x85c6020679a780a3:0xb826a39b58aceb9a!8m2!3d17.8112504!4d-97.7803482', 'Pueblo mágico', 'AV', '2147483647', 9, 8, 'La  Ciudad de Huajuapan de León es una ciudad del estado mexicano de Oaxaca, dentro del municipio homónimo del cual es cabecera. Forma parte de la Región Mixteca Oaxaqueña. Se encuentra aproximadamente a 192.65 km de la Ciudad de Oaxaca de Juárez. Es la cuna del jarabe mixteco, un bailable del folclore oaxaqueño, que representa a su región en la Guelaguetza cada año y de la Canción mixteca.', '1nRBvinwZafMtJy8gpQwdX54VPvlmTqBd', '0'),
(4, 11, 'Santa María Huatulco', 'Costa', 'Santa María Huatulco', 'huatulco@gmail.com', '2363745896', 'https://www.google.es/maps/place/Santa+Mar%C3%ADa+Huatulco,+Oax./@15.8291916,-96.3361337,14z/data=!3m1!4b1!4m5!3m4!1s0x85bf2e7fcb2053e9:0xc8a6a9684e0f5845!8m2!3d15.8340071!4d-96.3199488', 'Pueblo mágico', 'Aventura', '2147483647', 9, 8, 'Santa María Huatulco (en náhuatl: Kwahtolko ‘Lugar donde se adora el madero’) es una población del estado mexicano de Oaxaca, localizada en la Costa Oaxaqueña. Fue fundado el 8 de enero de 1539, aunque hay indicios y testimonios de que quizá fuera antes (hacia 1522), por Pedro de Alvarado y cuenta con una población de 7 409 habitantes.', '1aPKfwPs2IRKnGb1VO6MFa9xuqtsPuOg4', '0'),
(5, 12, 'San Juan Bautista Tuxtepec', 'Papaloapan', 'San Juan Bautista Tuxtepec', 'tuxtepec@gmail.com', '2363745896', 'https://www.google.com/maps/place/San+Juan+Bautista+Tuxtepec,+Oax./@18.0694904,-96.1762187,13z/data=!3m1!4b1!4m5!3m4!1s0x85c3e697e38a7355:0xe5cebe583938fd15!8m2!3d18.0809028!4d-96.1420947', 'Pueblo mágico', 'Aventura', '2147483647', 9, 8, 'San Juan Bautista Tuxtepec es una ciudad y cabecera del municipio homónimo. Se ubica como la segunda entre las ciudades más pobladas del estado de Oaxaca, en México. ', '1nYCLCJGTWukjJBSUhNgXvOhRkuzRaL8w', '0'),
(6, 5, 'Oaxaca de Juárez', 'Valles Centrales', 'Oaxaca de Juárez', 'oaxacajuarez@gmail.com', '2363745896', 'https://www.google.com/maps/place/Oaxaca+de+Ju%C3%A1rez,+Oax./@17.0812861,-96.8057725,12z/data=!3m1!4b1!4m5!3m4!1s0x85c72249df26d9b1:0xac88a77657dffc3b!8m2!3d17.0731842!4d-96.7265889', 'Pueblo mágico', 'Aventura', '2147483647', 10, 8, 'Oaxaca (en náhuatl: Waxyakak ‘En la punta del huaje’), oficialmente llamada Oaxaca de Juárez, es una ciudad mexicana, capital del estado de Oaxaca, así como cabecera del municipio homónimo. Ubicada en los Valles Centrales, a 550 km por carretera de la Ciudad de México, es la localidad más extensa y poblada del estado y su centro cultural.', '14EUaqPGfXp2q_ESyPqEb4YR-iJMne1fc', '0');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `direccion`
--

CREATE TABLE `direccion` (
  `idDireccion` int(11) NOT NULL,
  `_idEstablecimiento` int(11) NOT NULL,
  `_idCiudad` int(11) NOT NULL,
  `colonia` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `numero` varchar(5) COLLATE utf8_spanish_ci DEFAULT 'S/N',
  `cp` varchar(5) COLLATE utf8_spanish_ci NOT NULL,
  `calle` varchar(45) COLLATE utf8_spanish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `direccion`
--

INSERT INTO `direccion` (`idDireccion`, `_idEstablecimiento`, `_idCiudad`, `colonia`, `numero`, `cp`, `calle`) VALUES
(1, 1, 1, 'Centro', '#53', '68500', 'Av Juarez'),
(2, 2, 1, 'Centro', '#54', '68501', 'Av Juarez'),
(3, 3, 1, 'Centro', '#55', '68502', 'Av Juarez'),
(4, 4, 1, 'Centro', '#59', '68503', 'no conocida'),
(6, 5, 1, 'Centro', '#58', '68504', 'Av Juarez'),
(7, 6, 1, 'Centro', '#59', '68505', 'Av Juarez'),
(8, 7, 1, 'Centro', '#60', '68506', 'Av Juarez'),
(9, 8, 1, 'Centro', '#58', '68507', 'Conocida'),
(10, 10, 1, 'Centro', '#59', '68508', 'LuisS'),
(11, 11, 1, 'Centro', '#45', '12122', 'Av Juarez'),
(12, 12, 1, 'Centro', '#61', '68510', 'Av Juarez'),
(13, 13, 1, 'Centro', '#62', '68511', 'Av Juarez'),
(14, 14, 1, 'Centro', '#63', '68512', 'Av Juarez'),
(15, 15, 1, 'Centro', '#64', '68513', 'Av Juarez'),
(16, 16, 1, 'Centro', '#65', '68514', 'Av Juarez'),
(17, 17, 1, 'Centro', '#66', '68515', 'Av Juarez'),
(18, 18, 1, 'Centro', '#67', '68516', 'Av Juarez'),
(19, 19, 1, 'Centro', '#68', '68517', 'Av Juarez'),
(20, 20, 1, 'Centro', '#69', '68518', 'Av Juarez'),
(21, 21, 1, 'Centro', '#70', '68519', 'Av Juarez'),
(22, 22, 1, 'Centro', '#71', '68520', 'Av Juarez'),
(23, 23, 1, 'Centro', '#72', '68521', 'Av Juarez'),
(24, 24, 1, 'Centro', '#73', '68522', 'Av Juarez');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `entradas_usuario_agenda`
--

CREATE TABLE `entradas_usuario_agenda` (
  `idEntrada` int(11) NOT NULL,
  `_idUsuario` int(11) NOT NULL,
  `_idCiudad` int(11) NOT NULL,
  `_idTransporte` int(11) NOT NULL,
  `fechaVisita` varchar(10) DEFAULT NULL,
  `hora` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `entradas_usuario_agenda`
--

INSERT INTO `entradas_usuario_agenda` (`idEntrada`, `_idUsuario`, `_idCiudad`, `_idTransporte`, `fechaVisita`, `hora`) VALUES
(45, 1, 3, 1, '12-04-2022', '12:03:12'),
(47, 1, 5, 7, '09-05-2022', '12:12:19'),
(48, 1, 1, 3, '07-23-2022', '13:00:00'),
(49, 1, 3, 1, '05-09-2022', '07:12:23'),
(50, 1, 1, 4, '12-12-2022', '16:09:09'),
(51, 1, 1, 3, '12-12022', '12:12:13');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `establecimientos`
--

CREATE TABLE `establecimientos` (
  `idEstablecimiento` int(11) NOT NULL,
  `nombre` varchar(40) COLLATE utf8_spanish_ci NOT NULL,
  `tipoEstablecimiento` varchar(2) COLLATE utf8_spanish_ci NOT NULL,
  `telefono` varchar(10) COLLATE utf8_spanish_ci NOT NULL,
  `correo` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `pro` char(1) COLLATE utf8_spanish_ci NOT NULL DEFAULT '0',
  `imagenRepresentativa` varchar(45) COLLATE utf8_spanish_ci DEFAULT NULL,
  `descripcion` varchar(300) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `establecimientos`
--

INSERT INTO `establecimientos` (`idEstablecimiento`, `nombre`, `tipoEstablecimiento`, `telefono`, `correo`, `pro`, `imagenRepresentativa`, `descripcion`) VALUES
(1, 'ADO', 'NO', '2363781256', 'huautla@gmail.com', 'S', '1aPKfwPs2IRKnGb1VO6MFa9xuqtsPuOg4', ''),
(2, 'AU', 'TR', '2363781251', 'au.huautla@gmail.com', 'N', '1KFs1dcB2T3h-xmAHYTeEI-DU7EQlAW8F', ''),
(3, 'ESTRELLA ROJA', 'NO', '2363781252', 'huautla@gmail.com', 'N', '1aPKfwPs2IRKnGb1VO6MFa9xuqtsPuOg4', ''),
(4, 'CRISTOBAL COLON', 'NO', '2363781255', 'huautla@gmail.com', 'N', '1aPKfwPs2IRKnGb1VO6MFa9xuqtsPuOg4', ''),
(5, 'ORO', 'NO', '2363781250', 'huautla@gmail.com', 'N', '1aPKfwPs2IRKnGb1VO6MFa9xuqtsPuOg4', ''),
(6, 'Super Uno', 'AB', '2363781259', 'super.uno@gmail.com', 'N', '1p8k_lxfQzEmWa6tw1NvzMS8GeMbat_GG', ''),
(7, 'Hotel Santa Julia', 'HT', '2363781257', 'hotel.julia@gmail.com', 'N', '13H4QfKiYqXAcbZ-plDKATrKLl6VAczIy', ''),
(8, 'La pirateria', 'AB', '2364567890', 'lapirateria@gmail.com', 'S', '1AmlVsz1yRAMdBC-K0Z7TwR7-yiBYCmst', ''),
(10, 'Casa de María Sabina ', 'RS', '2360936481', 'mariasabina@gmail.com', 's', '1Nm79gx4UPj-CEI9ccvPdk2Y8fNLXdHhK', ''),
(11, 'Pinter super tiendas', 'SP', '2363781256', 'pinter.super@gmail.com', 'S', '1LELhlg28yEmWiXSUnFNK0BIAuLjP2gUC', ''),
(12, 'Mercado Erasto Pineda', 'MR', '2363781256', 'mercado.huautla@gmail.com', 'N', '1dFxx3Ff-1LOce3a_4CFWb12yDd8QdybR', ''),
(13, 'Ostok Café', 'RS', '2363781256', 'ostok.cafe@gmail.com', 'N', '1xUJ9RRyAeYllS5vCRQ0sT2-7hS985vwn', ''),
(14, 'Tejao Café', 'RS', '2363781256', 'tejao.cafe@gmail.com', 'N', '12BNWdWjYrpG4Q7XxPaCnQlC_H04rBajG', ''),
(15, 'Pizzas Plan del Carril', 'RS', '2363781256', 'pizza.carril@gmail.com', 'N', '1ockB8EJAtir-U6vhAlE_veilDBNCe_mS', ''),
(16, 'El panchero', 'RS', '2363781256', 'el.panchero@gmail.com', 'N', '1--INBvFMjIbbgfj3mQnIn-fh269lOYFG', ''),
(17, 'Hotel 1 de mayo', 'HT', '2363781256', 'hotel.unomayo@gmail.com', 'N', '1SMVZLv4LdKW9ApIS4wOfLAcsZhWOfAAa', ''),
(18, 'Hotel Real Fortin', 'HT', '2363781256', 'hotel.fortin@gmail.com', 'N', '1r7JqJItbty4XCRS-sKsgra8N70QjEjob', ''),
(19, 'DIF municipal', 'GB', '2363781256', 'dif.huautla@gmail.com', 'N', '1T3N733fSzyfN4-Xl0vnpuexRhiqG1cvP', ''),
(20, 'Banco Azteca', 'BN', '2363781256', 'banco.azteca@gmail.com', 'N', '1xYNHMORLECr0KWrlw9mrtY54rIhAbhXT', ''),
(21, 'Autotransportes María Sabina', 'TR', '2363781256', 'sabina.transpor@gmail.com', 'N', '1nw7si0LbjK0s2A_FA6isuI3mgly3xyjo', ''),
(22, 'Auto Transportes Trujano', 'TR', '2363781256', 'auto.trujano@gmail.com', 'N', '1ysCkPCj_rbQ-o7TkDk-rLPkZ6k6L2eZk', ''),
(23, 'Cajeros ', 'BR', '2363781256', 'cajeros@gmail.com', '0', '1aPKfwPs2IRKnGb1VO6MFa9xuqtsPuOg4', ''),
(24, 'Mini super Aurrera', 'no', '2361649203', 'mini.super@gmail.com', 'N', '1aPKfwPs2IRKnGb1VO6MFa9xuqtsPuOg4', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `establecimiento_pro`
--

CREATE TABLE `establecimiento_pro` (
  `_idEstablecimiento` int(11) NOT NULL,
  `_idAdministrador` int(11) NOT NULL,
  `calificacion` tinyint(1) NOT NULL DEFAULT 0,
  `cantidadCalificaciones` int(11) NOT NULL DEFAULT 0,
  `paginaWeb` varchar(100) DEFAULT NULL,
  `urlMaps` varchar(300) DEFAULT NULL,
  `tiposPago` varchar(45) NOT NULL DEFAULT 'S/T'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `establecimiento_pro`
--

INSERT INTO `establecimiento_pro` (`_idEstablecimiento`, `_idAdministrador`, `calificacion`, `cantidadCalificaciones`, `paginaWeb`, `urlMaps`, `tiposPago`) VALUES
(1, 1, 5, 19, 'www.pintersupertiendas.com', 'https://www.google.com/maps/@18.1306211,-96.8463022,21z', 'YY,YY'),
(2, 1, 5, 19, 'www.pintersupertiendas.com', 'https://www.google.com/maps/@18.1306211,-96.8463022,21z', 'KK,YY'),
(3, 1, 2, 25, 'www.pintersupertiendas.com', 'https://www.google.com/maps/@18.1306211,-96.8463022,21z', 'EF,TJ'),
(4, 1, 1, 12, 'www.pintersupertiendas.com', 'https://www.google.com/maps/@18.1306211,-96.8463022,21z', 'EF,TJ'),
(5, 1, 2, 19, 'www.pintersupertiendas.com', 'https://www.google.com/maps/@18.1306211,-96.8463022,21z', 'EF,TJ'),
(6, 6, 4, 25, 'www.pintersupertiendas.com', 'https://www.google.com/maps/@18.1306211,-96.8463022,21z', 'EF,TJ'),
(7, 1, 3, 16, 'www.pintersupertiendas.com', 'https://www.google.com/maps/@18.1306211,-96.8463022,21z', 'EF,TJ'),
(8, 1, 5, 19, 'www.pintersupertiendas.com', 'https://www.google.com/maps/@18.1306211,-96.8463022,21z', 'EF,TJ'),
(10, 1, 9, 10, NULL, NULL, 'S/T'),
(11, 1, 9, 10, 'www.pintersupertiendas.com', 'https://www.google.com/maps/@18.1306211,-96.8463022,21z', 'S/T'),
(12, 1, 9, 10, 'www.pintersupertiendas.com', 'https://www.google.com/maps/@18.1306211,-96.8463022,21z', 'S/T'),
(13, 1, 9, 10, 'www.pintersupertiendas.com', 'https://www.google.com/maps/@18.1306211,-96.8463022,21z', 'S/T'),
(14, 1, 9, 10, 'www.pintersupertiendas.com', 'https://www.google.com/maps/@18.1306211,-96.8463022,21z', 'S/T'),
(15, 1, 9, 10, 'www.pintersupertiendas.com', 'https://www.google.com/maps/@18.1306211,-96.8463022,21z', 'S/T'),
(16, 1, 9, 10, 'www.pintersupertiendas.com', 'https://www.google.com/maps/@18.1306211,-96.8463022,21z', 'S/T'),
(17, 1, 9, 10, 'www.pintersupertiendas.com', 'https://www.google.com/maps/@18.1306211,-96.8463022,21z', 'S/T'),
(18, 1, 9, 10, 'www.pintersupertiendas.com', 'https://www.google.com/maps/@18.1306211,-96.8463022,21z', 'S/T'),
(19, 1, 9, 10, 'www.pintersupertiendas.com', 'https://www.google.com/maps/@18.1306211,-96.8463022,21z', 'S/T'),
(20, 1, 9, 10, 'www.pintersupertiendas.com', 'https://www.google.com/maps/@18.1306211,-96.8463022,21z', 'S/T'),
(21, 1, 9, 10, 'www.pintersupertiendas.com', 'https://www.google.com/maps/@18.1306211,-96.8463022,21z', 'S/T'),
(22, 1, 9, 10, 'www.pintersupertiendas.com', 'https://www.google.com/maps/@18.1306211,-96.8463022,21z', 'S/T'),
(23, 1, 9, 10, 'www.pintersupertiendas.com', 'https://www.google.com/maps/@18.1306211,-96.8463022,21z', 'S/T'),
(24, 1, 9, 10, 'www.pintersupertiendas.com', 'https://www.google.com/maps/@18.1306211,-96.8463022,21z', 'S/T');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `festividad`
--

CREATE TABLE `festividad` (
  `idFecha` int(11) NOT NULL,
  `_idCiudad` int(11) NOT NULL,
  `dia` tinyint(2) NOT NULL DEFAULT 0,
  `mes` tinyint(2) NOT NULL DEFAULT 0,
  `nombre` varchar(45) COLLATE utf8_spanish_ci NOT NULL,
  `descripcion` varchar(600) COLLATE utf8_spanish_ci NOT NULL,
  `imagen` varchar(45) COLLATE utf8_spanish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `festividad`
--

INSERT INTO `festividad` (`idFecha`, `_idCiudad`, `dia`, `mes`, `nombre`, `descripcion`, `imagen`) VALUES
(2, 1, 15, 3, 'Festividad de las 3 caidas', 'Desde el año 1943 se celebra en Huautla de Jiménez la festividad en honor al Señor de las tres caídas, en la Catedral de San Juan Evangelista, al que se congregan miles de feligreses de Huautla de Jiménez y de otros municipios de la Sierra Mazateca Alta para depositar su fe de pedimento espiritual.\nAño tras año, cada tercer viernes de Cuaresma (Marzo) es la fecha esperada en que la imagen del Señor de las tres caídas recorre, junto con el Obispo, Sacerdotes, Mayordomos, Hermandades y miles de fieles, las calles principales de nuestro Pueblo Mágico.\n', '1FLEjA1FAMeT5u5s26k37mpYNZLlZkwlU'),
(3, 1, 22, 7, 'Festival de María Sabina', 'Entre la sabiduría ancestral y el mito, María Sabina fue la chamana oaxaqueña que dio vida a toda una generación en búsqueda de la verdad y la transformación espiritual del mundo, por lo cual el 21 y el 22 de julio se le conmemora su natalicio en el pueblo mágico de la sierra mazateca de Huautla. La curandera María Sabina Magdalena García nació un 22 de julio de 1894, en Huautla de Jiménez, Oaxaca, falleciendo en noviembre 23 de 1985.', '1McjkBzBunRaZAxQrA14lAy_xeEsXoLOd'),
(4, 1, 27, 10, 'Día de muertos –Todo Santo ', 'La tradición del dia  de Muertos en Huautla de Jiménez, comienza el   27 de octubre, con la llegada de los Huehuentones,  los cuales acuden al panteón a pedir permiso a las ánimas para comenzar la celebración que tendrá una duración de seis días, dentro de los cuales ellos acudirán por la noche de casa en casa y en los días próximos al panteón para ofrecer una danza acompañada por música de guitarra, tambores y cantos en mazateco lo que representa la alegría que las animas sienten por ser recibidas. \nDurante esta fecha en casi todas las casas colocan su altar en el que destaca un arco de carri', '16LZSbJppqOEDdjsxr1tIRwU6D6gffOkp');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `fotos_ciudad`
--

CREATE TABLE `fotos_ciudad` (
  `foto` varchar(45) COLLATE utf8_spanish_ci NOT NULL,
  `_idCiudad` int(11) NOT NULL,
  `descripcion` varchar(45) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `fotos_ciudad`
--

INSERT INTO `fotos_ciudad` (`foto`, `_idCiudad`, `descripcion`) VALUES
('13cNS8V3Dp7cBXyMRigwbA-ANv7ARyNx2', 1, ''),
('161GjTIRPpvKMcXLn_Upgr4rybxW39op_', 1, ''),
('1HKRqivYXbiJqRysacwsZf-RFMaWAVj6b', 1, ''),
('1MrXgYtToIONk0fiq8MNH83qhFu5G_2yI', 1, ''),
('1n2GqwDpBOZtLCnoW2qUdHIhUBivfWyuo', 1, '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `fotos_establecimiento`
--

CREATE TABLE `fotos_establecimiento` (
  `foto` varchar(45) NOT NULL,
  `_idEstablecimiento` int(11) NOT NULL,
  `descripcion` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `fotos_establecimiento`
--

INSERT INTO `fotos_establecimiento` (`foto`, `_idEstablecimiento`, `descripcion`) VALUES
('', 1, 'hola'),
('10', 1, 'hola'),
('15pZ5BW4wCoEK-C3jmsMXYN5n1k-3o0el', 6, ''),
('2', 2, 'foto establecimiento 2'),
('4', 4, 'foto establecimiento 4'),
('5', 5, 'foto establecimiento 5'),
('7', 7, 'foto establecimiento 7'),
('8', 8, 'editado'),
('9', 1, 'hola');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `horario_atencion`
--

CREATE TABLE `horario_atencion` (
  `idHorarioAtencion` int(11) NOT NULL,
  `_idEstablecimiento` int(11) NOT NULL,
  `lunes` varchar(11) NOT NULL DEFAULT 'S/A',
  `martes` varchar(11) NOT NULL DEFAULT 'S/A',
  `miercoles` varchar(11) NOT NULL DEFAULT 'S/A',
  `jueves` varchar(11) NOT NULL DEFAULT 'S/A',
  `viernes` varchar(11) NOT NULL DEFAULT 'S/A',
  `sabado` varchar(11) NOT NULL DEFAULT 'S/A',
  `domingo` varchar(11) NOT NULL DEFAULT 'S/A'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `horario_atencion`
--

INSERT INTO `horario_atencion` (`idHorarioAtencion`, `_idEstablecimiento`, `lunes`, `martes`, `miercoles`, `jueves`, `viernes`, `sabado`, `domingo`) VALUES
(1, 1, '8:00-20:00', '8:00-20:00', '8:00–20:00', '8:00–20:00', '8:00–20:00', '8:00–18:00', '8:00–14:00'),
(2, 2, '9:00–20:00', '9:00–20:00', '9:00–20:00', '9:00–20:00', '9:00–20:00', '9:00–18:00', '9:00–14:00'),
(3, 3, '9:00–20:00', '9:00–20:00', '9:00–20:00', '9:00–20:00', '9:00–20:00', '9:00–18:00', '9:00–14:00'),
(4, 4, '9:00–20:00', '9:00–20:00', '9:00–20:00', '9:00–20:00', '9:00–20:00', '9:00–18:00', '9:00–14:00'),
(5, 5, '9:00–20:00', '9:00–20:00', '9:00–20:00', '9:00–20:00', '9:00–20:00', '9:00–18:00', '9:00–14:00'),
(6, 6, '08:30-20:40', '08:30-21:00', '09:00-21:00', '09:00-21:00', '08:30-20:30', '08:30-18:00', '08:30-14:00'),
(8, 7, '9:00–20:00', '9:00–20:00', '9:00–20:00', '9:00–20:00', '9:00–20:00', '9:00–18:00', '9:00–14:00'),
(9, 8, '8:00–20:00', '8:00–20:00', '8:00–20:00', '8:00–20:00', '8:00–20:00', '8:00–18:00', '8:00–14:00'),
(10, 10, '8:00–20:00', '8:00–20:00', '8:00–20:00', '8:00–20:00', '8:00–20:00', '8:00–18:00', '8:00–14:00'),
(11, 11, '8:00–20:00', '8:00–20:00', '8:00–20:00', '8:00–20:00', '8:00–20:00', '8:00–18:00', '8:00–14:00'),
(12, 12, '9:00–20:00', '9:00–20:00', '9:00–20:00', '9:00–20:00', '9:00–20:00', '9:00–18:00', '9:00–14:00'),
(13, 13, '9:00–20:00', '9:00–20:00', '9:00–20:00', '9:00–20:00', '9:00–20:00', '9:00–18:00', '9:00–14:00'),
(14, 14, '9:00–20:00', '9:00–20:00', '9:00–20:00', '9:00–20:00', '9:00–20:00', '9:00–18:00', '9:00–14:00'),
(15, 15, '9:00–20:00', '9:00–20:00', '9:00–20:00', '9:00–20:00', '9:00–20:00', '9:00–18:00', '9:00–14:00'),
(16, 16, '9:00–20:00', '9:00–20:00', '9:00–20:00', '9:00–20:00', '9:00–20:00', '9:00–18:00', '9:00–14:00'),
(17, 17, '9:00–20:00', '9:00–20:00', '9:00–20:00', '9:00–20:00', '9:00–20:00', '9:00–18:00', '9:00–14:00'),
(18, 18, '8:00–20:00', '8:00–20:00', '8:00–20:00', '8:00–20:00', '8:00–20:00', '8:00–18:00', '8:00–14:00'),
(19, 19, '8:00–20:00', '8:00–20:00', '8:00–20:00', '8:00–20:00', '8:00–20:00', '8:00–18:00', '8:00–14:00'),
(20, 20, '9:00–20:00', '9:00–20:00', '9:00–20:00', '9:00–20:00', '9:00–20:00', '9:00–18:00', '9:00–14:00'),
(21, 21, '9:00–20:00', '9:00–20:00', '9:00–20:00', '9:00–20:00', '9:00–20:00', '9:00–18:00', '9:00–14:00'),
(22, 22, '9:00–20:00', '9:00–20:00', '9:00–20:00', '9:00–20:00', '9:00–20:00', '9:00–18:00', '9:00–14:00'),
(23, 23, '8:00–20:00', '8:00–20:00', '8:00–20:00', '8:00–20:00', '8:00–20:00', '8:00–18:00', '8:00–14:00'),
(24, 24, '8:00–20:00', '8:00–20:00', '8:00–20:00', '8:00–20:00', '8:00–20:00', '8:00–18:00', '8:00–14:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `hora_salida`
--

CREATE TABLE `hora_salida` (
  `idHora` int(11) NOT NULL,
  `_idSalidasTransporte` int(11) NOT NULL,
  `hora` varchar(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `hora_salida`
--

INSERT INTO `hora_salida` (`idHora`, `_idSalidasTransporte`, `hora`) VALUES
(1, 3, '15:00'),
(4, 3, '15:00'),
(6, 3, '15:17'),
(7, 4, '12:12'),
(10, 4, '15:17'),
(11, 4, '12:12');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `notas_ciudad`
--

CREATE TABLE `notas_ciudad` (
  `idNotaCiudad` int(11) NOT NULL,
  `_idCiudad` int(11) NOT NULL,
  `titulo` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `descripcion` varchar(600) COLLATE utf8_spanish_ci NOT NULL,
  `imagen` varchar(45) COLLATE utf8_spanish_ci DEFAULT NULL,
  `fechaPublicacion` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `notas_ciudad`
--

INSERT INTO `notas_ciudad` (`idNotaCiudad`, `_idCiudad`, `titulo`, `descripcion`, `imagen`, `fechaPublicacion`) VALUES
(15, 1, 'Olor a cempasúchil y música de los muertos', 'Dos días después de terminar la celebración de Todo Santo (Dia de muertos), el ayuntamiento de Huautla de Jiménez organiza y llevara a cabo un encuentro entre las diversas agrupaciones de huehuentones de la zona; esto con motivo de que todos puedan disfrutar de la música y espectáculo el cual no todos pueden tener en sus casas durante el poco tiempo que dura esta festividad.\n', 'i', '2022-03-08');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `origen_transporte`
--

CREATE TABLE `origen_transporte` (
  `_idCiudad` int(11) NOT NULL,
  `_idTransporte` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `origen_transporte`
--

INSERT INTO `origen_transporte` (`_idCiudad`, `_idTransporte`) VALUES
(1, 1),
(1, 2),
(3, 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personajes_importantes`
--

CREATE TABLE `personajes_importantes` (
  `idPersonajes` int(11) NOT NULL,
  `_idCiudad` int(11) NOT NULL,
  `nombre` varchar(45) COLLATE utf8_spanish_ci NOT NULL,
  `anhoNacimiento` smallint(6) NOT NULL DEFAULT 0,
  `anhoFallecimiento` smallint(6) NOT NULL DEFAULT 0,
  `descripcion` varchar(600) COLLATE utf8_spanish_ci NOT NULL,
  `foto` varchar(45) COLLATE utf8_spanish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `personajes_importantes`
--

INSERT INTO `personajes_importantes` (`idPersonajes`, `_idCiudad`, `nombre`, `anhoNacimiento`, `anhoFallecimiento`, `descripcion`, `foto`) VALUES
(1, 1, 'Othón García', 0, 0, 'Es considerado como el primero Presidente Municipal de Huautla.', '1ZkcQOcYIovWy0y6HlYVkW7oa0NRILF2l'),
(2, 1, 'Gregorio Herrera', 0, 0, 'Nombrado patriarca de Huautla debido a conflictos con municipios cercanos y que salvo la catedral deNombrado patriarca de Huautla debido a conflictos con municipios cercanos y que salvo la catedral de un posible incendio.', '1ZkcQOcYIovWy0y6HlYVkW7oa0NRILF2l'),
(3, 1, 'Erasto Pineda', 1903, 1962, 'Líder natural y gestor verdadero en la sierra mazateca; fue dos veces presidente municipal en los periodos de 1949-1951 y 1955-1957; en 1959 inicio el proyecto del INI en la región; en 1962 por gestoría de él se instala BEMEX (Beneficiadora de México) para beneficiar a los productores de Café.', '1ZkcQOcYIovWy0y6HlYVkW7oa0NRILF2l'),
(4, 1, 'María Sabina', 1894, 1986, 'Sacerdotisa que internacionalizara los hongos alucinantes y a Huautla de Jiménez en 1957. Cuando llegó el norteamericano conocido como Gordo Masón, surgió una nueva ciencia conocida como la etnomicología.', '193zCY4_BzghBzS8orblV5qdKOMtQXfg7'),
(5, 1, 'Raymundo Pérez Carrera', 0, 0, 'Trajo el cine por primera vez a esta comunidad después de un peregrinaje de húngaros (1940) que realizaban esta actividad.', '1ZkcQOcYIovWy0y6HlYVkW7oa0NRILF2l'),
(6, 1, 'Fernando García', 0, 0, 'Instala la primera sala cinematográfica con proyectores de 16 mm y le da el nombre de cinema Huautla.', '1ZkcQOcYIovWy0y6HlYVkW7oa0NRILF2l'),
(7, 1, 'Isauro Nava', 0, 0, 'En su periodo presidencial (1966-1968) nace su espíritu progresista en beneficio de sus conciudadanos creando obras que hasta el momento perduran.', '1ZkcQOcYIovWy0y6HlYVkW7oa0NRILF2l'),
(8, 1, 'José Dorantes', 0, 0, 'En 1951 compone la letra del corrido de Huautla.', '1ZkcQOcYIovWy0y6HlYVkW7oa0NRILF2l'),
(9, 1, 'Arnulfo Pineda Cabanzos', 1928, 0, 'Pionero en el arte plástico de la sierra mazateca.', '1ZkcQOcYIovWy0y6HlYVkW7oa0NRILF2l'),
(10, 1, 'Froilan García Estrada', 1816, 0, 'Arreglista y compositor de catorce marcha fúnebres.', '1ZkcQOcYIovWy0y6HlYVkW7oa0NRILF2l'),
(11, 1, 'José Guadalupe García Parra', 0, 0, 'Autor del libro \"La Historia de Huautla y la Gesta Oaxaqueña\".', '1ZkcQOcYIovWy0y6HlYVkW7oa0NRILF2l'),
(12, 1, 'Álvaro Estrada Pineda', 0, 0, 'Ingeniero de profesión y autor del libro \"Vida de María Sabina, la sabia de los hongos\".', '1ZkcQOcYIovWy0y6HlYVkW7oa0NRILF2l'),
(13, 1, 'Juan García Carrera', 0, 0, 'Escritor mazateco, autor del libro \"La otra vida de María Sabina\".', '1ZkcQOcYIovWy0y6HlYVkW7oa0NRILF2l'),
(14, 3, 'General Antonio de León y Loyola', 1794, 1847, 'Insurgente de la independencia de México y Héroe de la guerra contra Estados Unidos principalmente en la batalla del molino del rey.', '1ZkcQOcYIovWy0y6HlYVkW7oa0NRILF2l'),
(16, 3, 'Profesor Serafín Acevedo', 1825, 1922, 'Fue Gobernador interino del estado de Oaxaca en 1920.', '1ZkcQOcYIovWy0y6HlYVkW7oa0NRILF2l'),
(17, 3, 'Maestro José López Alavés', 1889, 1974, 'Autor de la Canción Mixteca. Fue un destacado músico.\n\nEn el campo militar y en los grandes movimientos revolucionario sobresalen los siguientes Huajuapeños:', '1ZkcQOcYIovWy0y6HlYVkW7oa0NRILF2l'),
(18, 3, 'Valerio Trujano', 1767, 1812, 'Nació el 19 de mayo de 1767 en el pueblo de Tepecuacuilco, se incorporó a los tropas de Morelos en Mezcala en 1811, participando en varias acciones de armas: en Iguala contra las tropas de Manuel García Ríos y de Iturbide, en Chilapa con Galeana, persiguiendo las tropas de Fuentes en Ometepec luchó contra el comandante realista Paris. Comisionado por Morelos operó en la Mixteca, en Yanhuitlan, combatiendo a Esperón, Juan de la Vega y Regules Villasante. Trujano murió en las manos enemigas en el Rancho de la Virgen entre Tepeaca y Tlacotepec, Puebla el 5 de octubre de 1812.', '1ZkcQOcYIovWy0y6HlYVkW7oa0NRILF2l'),
(19, 3, 'Antonio Martínez Corro', 1899, 1973, 'Nació en la Ciudad de Huajuapan el 14 de Septiembre de 1899.  Fue alumno del seminario de San Rafael Arcángel de Huajuapan de 1916 a 1918 y de México de 1919 a 1923. Se graduó de maestro normalista en 1932 y ejerció la docencia. Fue periodista de 1930 a 1968, publicando aproximadamente unos 200 artículos a favor de los mixtecos, entre sus obras más importantes en el campo musical se encuentra el folklórico Jarabe Mixteco. Fundó la Academia Antonio Martínez Corro en el ciclo 1961-1972.  Murió el 13 de abril de 1973.', '1ZkcQOcYIovWy0y6HlYVkW7oa0NRILF2l'),
(20, 3, 'José López Alavés', 1889, 1974, 'Nació en Huajuapan de León en 1889, quien compuso más de 100 obras. Quien es muy recordado por que fue él quien compuso la Canción Mixteca.', '1ZkcQOcYIovWy0y6HlYVkW7oa0NRILF2l'),
(21, 3, 'Joaquín Ibáñez', 1836, 1922, 'Nació en Huajuapan de León en 1836. Médico cirujano que fundó el Periódico \"El Estudio\", así como el Hospital del Niño en el Estado de Puebla. Murió en el año de 1922.', '1ZkcQOcYIovWy0y6HlYVkW7oa0NRILF2l'),
(22, 3, 'Casimiro Ramírez', 1825, 1922, 'Nació en la Ciudad de Huajuapan de León en 1825. Se dio de alta en las tropas del Coronel Francisco Herrera. En 1854 participó en la toma de Huajuapan de León. En 1858 toma la Ciudad de Oaxaca. En ese mismo año combate en Jalapa del Marqués contra los franceses. Resistió el sitio de Veracruz custodiando a don Benito Juárez, que fue sitiado por el General Miguel Miramón. Muere en 1922.', '1ZkcQOcYIovWy0y6HlYVkW7oa0NRILF2l'),
(23, 3, 'Rafael Vidal López', 0, 0, 'Ilustre pintor Huajuapeño.', '1ZkcQOcYIovWy0y6HlYVkW7oa0NRILF2l'),
(24, 3, 'Rafael López S', 1921, 1985, 'Originario de esta población, quien sobresalió en la escultura.', '1ZkcQOcYIovWy0y6HlYVkW7oa0NRILF2l');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `platillos`
--

CREATE TABLE `platillos` (
  `idPlatillos` int(11) NOT NULL,
  `_idCiudad` int(11) NOT NULL,
  `nombre` varchar(45) COLLATE utf8_spanish_ci NOT NULL,
  `descripcion` varchar(600) COLLATE utf8_spanish_ci NOT NULL,
  `imagen` varchar(45) COLLATE utf8_spanish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `platillos`
--

INSERT INTO `platillos` (`idPlatillos`, `_idCiudad`, `nombre`, `descripcion`, `imagen`) VALUES
(1, 1, 'Tamales de tesmole', 'Platillo típico de la zona, el cual se distingue por ser un tamal envuelto en hoja verde de plátano. El tamal es realizado con masa de maíz el cual envuelve y lleva por dentro del tamal una salsa denominada tesmole y un pedazo de carne de cerdo o de pollo.\nTodo comienza con la preparación del tesmoles, el cual es un guiso que inicia con la cocción de carne de puerco con una mezcla de chiles molidos como el de árbol o en su defecto chile guajillo. A la mezcla se le añaden hojas de hierba santa, todo al gusto.\n', '11pbNGBki5iedKGHNSwKiVviCotEJ5Q9a'),
(3, 1, 'Atole Agrio', 'El atole agrio es una bebida ancestral de los mazatecos, el cual se suele servir en todas las celebraciones que se lleven a cabo en la region. Servido en una jícara de madera, el atole se acompaña con frijoles bayos y un poco de pipian para darle un rico sabor.', '1Ad5l0bexDeutThRJorEMSUlW-ERkToCh');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `resenhas_ciudad`
--

CREATE TABLE `resenhas_ciudad` (
  `idResenhasCiudad` int(11) NOT NULL,
  `_idUsuario` int(11) NOT NULL,
  `_idCiudad` int(11) NOT NULL,
  `contenido` varchar(300) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `resenhas_ciudad`
--

INSERT INTO `resenhas_ciudad` (`idResenhasCiudad`, `_idUsuario`, `_idCiudad`, `contenido`) VALUES
(2, 1, 1, 'La hermosa ciudad de Huautla de Jiménez se me hizo realmente hermosa.'),
(3, 1, 4, 'Las playas son muy hermosas.'),
(5, 1, 5, 'Este lugar me gusto porque el clima es muy bueno en todo el año.'),
(6, 1, 6, 'La cultura de Oaxaca es muy grande y me quede impresionado al estar aquí.'),
(7, 1, 3, 'Les recomiendo visitar este agradable lugar porque tiene muchos sitios agradables.'),
(8, 2, 1, 'Les recomiendo que visiten este lugar por sus hermosa naturaleza.'),
(9, 2, 4, 'Les recomiendo visitar todas las playas de Huatulco.'),
(10, 2, 5, 'Cuando visite este lugar me pareció muy lindo porque conocer es lo que me gusta hacer. '),
(11, 2, 6, 'Aquí en Oaxaca de Juárez logre sacarme muchas fotos muy interesantes. ');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `resenhas_establecimiento`
--

CREATE TABLE `resenhas_establecimiento` (
  `idResenha` int(11) NOT NULL,
  `_idEstablecimiento` int(11) NOT NULL,
  `_idUsuario` int(11) NOT NULL,
  `contenido` text COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `resenhas_establecimiento`
--

INSERT INTO `resenhas_establecimiento` (`idResenha`, `_idEstablecimiento`, `_idUsuario`, `contenido`) VALUES
(3, 1, 1, 'hola como estas');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `salidas_transporte`
--

CREATE TABLE `salidas_transporte` (
  `idSalidasTransporte` int(11) NOT NULL,
  `_idTransporte` int(11) NOT NULL,
  `_idCiudadDestino` int(11) NOT NULL,
  `dia` varchar(2) NOT NULL,
  `duracionViaje` tinyint(2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `salidas_transporte`
--

INSERT INTO `salidas_transporte` (`idSalidasTransporte`, `_idTransporte`, `_idCiudadDestino`, `dia`, `duracionViaje`) VALUES
(3, 1, 1, '99', 90),
(4, 2, 1, '17', 60),
(5, 3, 4, '17', 60),
(6, 1, 5, '12', 23),
(7, 2, 5, '12', 12);

--
-- Disparadores `salidas_transporte`
--
DELIMITER $$
CREATE TRIGGER `eliminacionHorasSalidas` BEFORE DELETE ON `salidas_transporte` FOR EACH ROW DELETE from hora_salida WHERE hora_salida._idSalidasTransporte=OLD.idSalidasTransporte
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tasks`
--

CREATE TABLE `tasks` (
  `id` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `description` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tasks`
--

INSERT INTO `tasks` (`id`, `title`, `description`) VALUES
(2, 'Nayelin', 'Some description 2'),
(3, 'gato', 'Miau');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipos_turismo`
--

CREATE TABLE `tipos_turismo` (
  `idTiposTurismo` varchar(2) COLLATE utf8_spanish_ci NOT NULL,
  `tipoTurismo` varchar(20) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `tipos_turismo`
--

INSERT INTO `tipos_turismo` (`idTiposTurismo`, `tipoTurismo`) VALUES
('AQ', 'ARQUEOLOGICO'),
('AV', 'AVENTURA'),
('CL', 'CULTURAL'),
('DP', 'DEPORTIVO'),
('EC', 'ECOLOGICO'),
('EP', 'ESPIRITUAL'),
('GS', 'GASTRONOMICO'),
('LS', 'yael'),
('NG', 'NEGOCIOS'),
('RL', 'RURAL'),
('SL', 'SALUD'),
('YA', 'YAEL');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_turismo_ciudad`
--

CREATE TABLE `tipo_turismo_ciudad` (
  `_idCiudad` int(11) NOT NULL,
  `_idTiposTurismo` varchar(2) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `tipo_turismo_ciudad`
--

INSERT INTO `tipo_turismo_ciudad` (`_idCiudad`, `_idTiposTurismo`) VALUES
(1, 'AQ'),
(1, 'AV'),
(1, 'CL'),
(1, 'DP'),
(1, 'EC'),
(1, 'EP'),
(1, 'GS'),
(1, 'LS'),
(1, 'NG'),
(1, 'RL'),
(1, 'SL');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario_app`
--

CREATE TABLE `usuario_app` (
  `idUsuario` int(11) NOT NULL,
  `nombreUsuario` varchar(20) COLLATE utf8_spanish_ci NOT NULL,
  `nombre` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `fechaNacimiento` date NOT NULL,
  `correo` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `genero` varchar(1) COLLATE utf8_spanish_ci NOT NULL,
  `tiposTurismo` varchar(20) COLLATE utf8_spanish_ci NOT NULL DEFAULT 'NT',
  `imagenUsuario` varchar(33) COLLATE utf8_spanish_ci DEFAULT NULL,
  `claveAcceso` varchar(45) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `usuario_app`
--

INSERT INTO `usuario_app` (`idUsuario`, `nombreUsuario`, `nombre`, `fechaNacimiento`, `correo`, `genero`, `tiposTurismo`, `imagenUsuario`, `claveAcceso`) VALUES
(1, 'LuisMartínez', 'Luis Serapio Martínez García', '2022-04-06', 'luis@gmail.com', 'H', 'NT', '1ctvUy2P_W7_qKN3XC5Z-mJD-igehC2cG', 'luis'),
(2, 'Yael García', 'Yael García Cuesta', '2000-04-06', 'yaelgc2000@gmail.com', 'H', 'NT', '1ctvUy2P_W7_qKN3XC5Z-mJD-igehC2cG', 'yael'),
(3, 'Guadalupe Castro', 'Guadalupe Castro de Léon', '2010-10-28', 'guadalupe@gmail.com', 'F', 'NT', '1ctvUy2P_W7_qKN3XC5Z-mJD-igehC2cG', '1234'),
(4, 'Jair Peralta', 'Jair Peralta Santiago', '2000-05-10', 'jair@gmail.com', 'M', 'NT', '1ctvUy2P_W7_qKN3XC5Z-mJD-igehC2cG', '123456'),
(5, 'YAEL', 'Yael Garcia Cuesta', '2000-04-06', 'yael@gmail.com', 'H', 'NT', 'Imagen de Yael', 'yael');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `zonas_turisticas`
--

CREATE TABLE `zonas_turisticas` (
  `idZonaTuristica` int(11) NOT NULL,
  `_idCiudad` int(11) NOT NULL,
  `nombre` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `tipoZona` char(2) COLLATE utf8_spanish_ci NOT NULL,
  `descripcion` varchar(600) COLLATE utf8_spanish_ci NOT NULL,
  `foto` varchar(45) COLLATE utf8_spanish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `zonas_turisticas`
--

INSERT INTO `zonas_turisticas` (`idZonaTuristica`, `_idCiudad`, `nombre`, `tipoZona`, `descripcion`, `foto`) VALUES
(1, 1, 'Casa Museo de María Sabina ', 'CL', 'La casa museo de María Sabina es dedicada a la sabia de los hongos, chaman mística de la sierra mazateca originaria de Huautla de Jiménez. En el museo puedes encontrar diversos objetos que en vida pertenecieron a este personaje.', '1lOJXYbyEuJpLWqGcCcVaGqmuXzqb9pSg'),
(2, 1, 'Catedral de San Juan Evangelista', 'EP', 'Catedral construida en honor al santo patrono de huautli de Jiménez San Juan Evangelista en el año 1867. Ubicada en el centro de la población al lado del mercado y el palacio municipal, es lugar de concentración para la misa de cada domingo a la que asiste toda la población católica de la región.', '15EcoYeTWHk7UoXaDwL1PbNQ31i8m2vfS'),
(3, 1, 'Cerro de la Adoración', 'CL', 'Zona cultural de Huautla de Jiménez. El cerro de la adoración es una zona donde las familias suelen ir a disfrutar de un día en familia mientras juegan en las canchas naturales ubicadas en la punta del cerro; además se acostumbra realizar rituales espirituales y pedirle al guardián del cerro el “Chikon” por salud y bienestar económico.', '1MeTRQUICIrrXVcuLp_d3juteykw1DQbB'),
(4, 1, 'Grutas de San Sebastián', 'AQ', 'Reconocido como uno de los sistemas de cuevas más profundos del mundo, con una profundidad de 1250 metros, lo que la coloca como la más profunda de América Latina, y una de las más largas con una longitud de poco menos de 15 millas. Las cavernas eran desconocidas hasta la década de los años 70, cuando un grupo de expertos en espeleología de la Universidad de Texas fueron los primeros en ser atraídos por la extensa región de montañas de piedra caliza.', '1pFbGLyLerHs1-5Zqff7rSSAyT7l_D1mC'),
(5, 1, 'Cascada Puente de Fierro', 'AQ', 'Ubicado a 10 minutos del centro de la población, la cascada de puente de fierro, mejor conocida como “La regadera” debido a que los visitantes suelen meterse debajo de ella como si fuera una ducha, pero con la diferencia de sus 40 metros de altura y que se forma gracias a los escurrimientos de agua que provienen de la Sierra Mazateca.', '14N0dN8NGWpBm4Kq0uHVlugwlCkIsfU9x'),
(6, 1, 'Rituales de Sanación', 'EP', 'Huautla es sinónimo de rituales, magia y misticismo, todo esto como herencia cultural de la gran María Sabina y sus conocimientos ancestrales con los hongos alucinógenos, así como otros elementos usados como medicinas por ella y por las personas que se han encargado de seguir con la tradición y traspaso de conocimiento a varias generaciones.\nBajo la supervisión de una persona respetada por la comunidad local (chaman) experta en prácticas rituales indígenas de sanación.', '1SXZDob9uoYewbp4RdadftdWNyfjs56D5'),
(7, 1, 'Torre del Reloj', 'CL', 'La torre del reloj, ubicado frente al palacio municipal se cree que fue construida aproximadamente en 1924.', '15dOViT0X25uGAlvE4rPqOtElTqDFbM69'),
(12, 3, 'Catedral a la virgen de Guadalupe', '', 'Construcción original que data de finales del siglo XIX. Capilla del Sagrario del señor de los corazones se construyó a finales del siglo XIX.', '1aPKfwPs2IRKnGb1VO6MFa9xuqtsPuOg4'),
(13, 3, 'Monumento al General Lázaro Cárdenas', '', 'Se localiza a un kilómetro de esta ciudad por la carretera a México, construido en 1976.', '1aPKfwPs2IRKnGb1VO6MFa9xuqtsPuOg4'),
(14, 3, 'Plaza central Antonio de León', '', 'Se localiza frente al palacio municipal, centro de reunión de lugareños y turistas, de pintoresca ambientación lograda por laureles de la India y áreas de jardinerías, tiene un kiosco de base octagonal y cuenta con un monumento a Antonio de León.', '1aPKfwPs2IRKnGb1VO6MFa9xuqtsPuOg4'),
(15, 3, 'Cerro de las Minas', '', 'Zona arqueológica se localiza al norte de la población.', '1aPKfwPs2IRKnGb1VO6MFa9xuqtsPuOg4'),
(16, 3, 'Las campanas', '', 'Atractivas formaciones rocosas de material calcáreo, que penden del cantil en la margen de un pequeño arroyo.', '1aPKfwPs2IRKnGb1VO6MFa9xuqtsPuOg4'),
(17, 6, 'Centro Histórico', '', 'Un hermoso destino colonial, en el centro de Oaxaca podrás admirar impresionantes monumentos históricos unidos a una rica tradición indígena que se mantiene a través de los años. Visita el Zócalo, la Catedral, el Centro Cultural Santo Domingo, el Museo de Arte Contemporáneo, el Museo de Arte Prehispánico Rufino Tamayo y más.\nO sólo pasea por sus calles admirando las hermosas fachadas y sentándome a disfrutar de un rico platillo típico o mezcal.', '1aPKfwPs2IRKnGb1VO6MFa9xuqtsPuOg4'),
(18, 6, 'Templo de Santo Domingo', '', 'A seis cuadras del zócalo encontrarás este magnífico templo que fue construido con la llegada de los dominicos hacia finales del siglo XVI. Aunque llegó a estar ocupado por el ejército suspendiendo en algún momento su uso religioso, ahora funciona como templo y, asistas o no a una celebración religiosa, su interior es tan bonito como la fachada.\nEl interior alberga diez capillas en una de las cuales podrás admirar 24 pinturas.El interior alberga diez capillas en una de las cuales podrás admirar 24 pinturas.', '1aPKfwPs2IRKnGb1VO6MFa9xuqtsPuOg4'),
(19, 6, 'Museo de Arte Contemporáneo', '', 'Inaugurado en 1992, el MACO es un lugar de integración de las tradiciones regionales y la cultura global contemporánea. Ubicado en lo que en su momento fue una casa particular de finales del siglo XVII, en la fachada aún puedes observar los escudos familiares.\nCon exhibiciones constantemente cambiando, no dejes de darte una vuelta porque siempre encontrarás algo interesante y digno de verse con reconocimiento internacional.', '1aPKfwPs2IRKnGb1VO6MFa9xuqtsPuOg4'),
(20, 6, 'La Mezcaloteca', '', 'Este lugar cuenta con una gran variedad de mezcales provenientes de todo el país, no sólo aquellos del estado de Oaxaca. Funcionando como Asociación Civil, incluso puedes convertirte en socio teniendo la oportunidad de degustar del amplio catálogo de mezcales.\nPara una visita única, podrás degustar tres mezcales tradicionales, aprender sobre el proceso de su elaboración y, por supuesto, adquirir algunas botellas de su amplio catálogo.', '1aPKfwPs2IRKnGb1VO6MFa9xuqtsPuOg4'),
(21, 6, 'Centro Cultural San Pablo', '', 'Ubicado en el Ex Convento de San Pablo, el objetivo del centro es preservar las manifestaciones culturales de la zona, así como ofrecer espacios para expresiones culturales indígenas. De esta forma, busca crear puentes hacia comunidades indígenas que con frecuencia se encuentran marginadas.\r\nEl lugar cuenta con varias aulas destinadas a fines académicos, una biblioteca y un acervo con colecciones de estudios históricos y culturales de Oaxaca.', '1aPKfwPs2IRKnGb1VO6MFa9xuqtsPuOg4'),
(22, 6, 'Teatro Macedonio Alcalá', '', 'Es considerado uno de los más importantes teatros en México, se completó en 1909 y aunque en un principio funcionó como Teatro-Casino alrededor de 1930 se le dio su nombre actual. La entrada principal consta de tres puertas labradas en cantera verde, en su interior, el vestíbulo es estilo francés tipo Luis XV que destaca por sus relucientes escalinatas en mármol blanco y su cúpula esta sostenida por columnas de mármol rojo. Sin duda, una joya oaxaqueña que no debes perderte al visitar la ciudad.', '1aPKfwPs2IRKnGb1VO6MFa9xuqtsPuOg4'),
(23, 6, 'Calle Macedonio Alcalá', '', 'Conocida como el andador turístico, esta es la calle principal de la ciudad que conecta el Zócalo con el Templo de Santo Domingo de Guzmán. Puedes recorrerla tranquilamente caminando para conocer sus variadas tiendas boutiques, cafés, restaurantes, museos; y galerías de arte en las que podrás encontrar óleos de Rufino Tamayo y Gustavo Montoya.\r\n', '1aPKfwPs2IRKnGb1VO6MFa9xuqtsPuOg4'),
(24, 6, 'In Situ, Mezcalería', '', 'Si lo tuyo es el mezcal, en este lugar encontrarás más de 180 variedades de mezcales tradicionales y artesanales; número que va en aumento. El lugar se considera a sí mismo un difusor de esta bebida e incluso los ordenan según criterios de excelencia de destilados, tipos de agave, procesos de elaboración y lugar de origen.\r\nTambién puedes comprar el mezcal de tu preferencia y, porqué no, el típico recuerdito de tu visita.', '1aPKfwPs2IRKnGb1VO6MFa9xuqtsPuOg4'),
(25, 6, 'Los Baúles de Juana Cata', '', 'Y tal como si salieran del baúl de los recuerdos, en este lugar encontrarás huipiles, camisas, blusas, faldas y sombreros tejidos con técnicas ancestrales. La calidad de estos textiles es muy alta, siendo una parada obligada para quien esté en busca de estas obras de arte.\r\nEncontrarás una gran variedad de diseños y colores, adaptándose a todos los gustos. Así que no dejes de visitar esta tienda aunque sea para admirar estos hermosos textiles.', '1aPKfwPs2IRKnGb1VO6MFa9xuqtsPuOg4'),
(26, 6, 'Mercado Benito Juárez', '', 'Ubicado en lo que era la Plaza del Marqués, aún queda un recordatorio del sitio histórico en una piedra colocada en la parte superior de la entrada sobre la calle Flores Magón que lee MARQVS. Ahora un mercado techado en su interior podrás encontrar todo tipo de productos oaxaqueños como chapulines, mole, quesillo, aguas regionales y más comestibles.\r\nPor supuesto también abunda la artesanía con los famosos alebrijes, textiles o productos en piel.', '1aPKfwPs2IRKnGb1VO6MFa9xuqtsPuOg4'),
(27, 6, 'Museo de Arte Prehispánico de México Rufino Tamayo', '', 'El espacio abre sus puertas para conservar y dar a conocer la colección personal del pintor Rufino Tamayo, incluso las cinco salas que conforman al museo están pintadas en las tonalidades escogidas por el mismo pintor y que utilizaba con frecuencia en sus pinturas.\r\nAl interior podrás admirar cerca de mil piezas de arte prehispánico de las culturas del Golfo, del Pacífico, del occidente de México y, por supuesto, de zapotecas y mixtecos.', '1aPKfwPs2IRKnGb1VO6MFa9xuqtsPuOg4'),
(28, 6, 'Museo Textil de Oaxaca', '', 'Con las joyas textiles que existen en el estado, no debes perderte este museo que se encuentra en parte de lo que fue la huerta del convento de Santo Domingo. En su interior podrás admirar seis colecciones privadas cada una con varias piezas que son verdaderas joyas.\r\nAlgunos muy antiguos, otros modernos pero todos sumamente hermosos, los textiles que conforman al MTO además de todo están sumamente ligados con la historia regional.', '1aPKfwPs2IRKnGb1VO6MFa9xuqtsPuOg4'),
(29, 5, 'Palacio Municipal', '', 'Existen en Tuxtepec algunas casas antiguas que han sobrevivido al tiempo. Estas casonas se caracterizan por tener un corredor en el exterior con varias columnas a lo que se conoce como el portal. Este tipo de arquitectura es típica en la Cuenca del Papaloapan y el mejor ejemplo se encuentra en Tlacotalpan, declarado patrimonio de la humanidad por la UNESCO. El mejor ejemplo de este tipo de arquitectura es sin duda el palacio municipal que se encuentra en el Parque Juárez. Cuenta con más de 30 portales al frente y otras cuantas a los costados.', '1aPKfwPs2IRKnGb1VO6MFa9xuqtsPuOg4'),
(30, 5, 'Parque Juárez', '', 'El parque Benito Juárez es muy particular porque en muchas ciudades pequeñas de México, el parque (la plaza) principal está ubicado exactamente en el centro de la ciudad, en Tuxtepec éste se encuentra en la periferia del centro. El parque Juárez es el corazón de la ciudad, especialmente en las noches. Está rodeado por gigantescos árboles donde el más grande mide más de 30 metros de altura. En el centro del parque Juárez verás una estatua de Benito Juárez al lado del kiosco de la ciudad.', '1aPKfwPs2IRKnGb1VO6MFa9xuqtsPuOg4'),
(31, 5, 'Parque La Piragua', '', 'El Parque Hidalgo se le conoce como Parque la Piragua debido a que se encuentra en la colonia del mismo nombre. En el parque hay una estatua de bronce de Don Miguel Hidalgo cargando un estandarte con la imagen de la Virgen María. En este parque se encuentran la biblioteca municipal, la estación de la policía municipal y la Parroquia de Guadalupe pintada de amarillo. ', '1aPKfwPs2IRKnGb1VO6MFa9xuqtsPuOg4'),
(32, 5, 'El muro boulevard', '', 'El muro boulevard, o simplemente el muro, rodea la parte norte y este de Tuxtepec con una longitud de 5 Km. El muro es un dique que fue creado para evitar inundaciones en la ciudad provadas por la crecida del río Papaloapan en épocas de lluvia. Aquí encontrarás restaurantes y áreas verdes que junto al río Papaloapan ofrecen una vista espectacular. Pasa un buen rato en las áreas que existen para el fomento del deporte y para la diversión de los más pequeños está el área recreativa de juegos infantiles “El Flamenco”.', '1aPKfwPs2IRKnGb1VO6MFa9xuqtsPuOg4'),
(33, 5, 'El Embarcadero', '', 'En épocas de la revolución, los barcos de vapor cargados de mercancías para la población llegaban al embarcadero Paso Real que se encuentra en el centro de la ciudad. En la actualidad el embarcadero es usado para trasladar personas de un lado del río al otro en la embarcación “Claudia Ofelia”. De hecho, “Claudia Ofelia” es el único medio de transporte marítimo en Tuxtepec que ha sobrevivido a la modernización.', '1aPKfwPs2IRKnGb1VO6MFa9xuqtsPuOg4'),
(34, 5, 'Ruinas del Castillo', '', 'Para los Aztecas (y más tarde por los españoles), la región de la Chinantla era valiosa por sus productos.  La Chinantla tenía que pagar a los Aztecas con oro y otros productos de la región. Se cree también que la vainilla  que crece de manera natural en la selva de la Chinantla era muy aclamada por el impero Azteca. Es por ello que Moctezuma I fundó en 1455 Tochtepec y construyó un centro ceremonial que los habitantes llamaron “El Castillo de Moctezuma” o “Palacio de Moctezuma” para supervisar la paga de tributos. ', '1aPKfwPs2IRKnGb1VO6MFa9xuqtsPuOg4'),
(35, 4, 'Mariposario Yée Lo Beé', '', 'Lugar en donde se conoce de cerca el trabajo de protección y reproducción de las mariposas aprendiendo sobre las características de las diversas especies mediante recorridos guiados por especialistas del mariposario, después del recorrido los niños pueden pasar un tiempo en la ludoteca para divertirse e informarse más sobre las mariposas.', '1aPKfwPs2IRKnGb1VO6MFa9xuqtsPuOg4'),
(36, 4, 'Ventanilla', '', 'Es considerado un zoológico abierto dado la gran cantidad de especies animales que hay libres en la laguna costera por el trabajo de conservación que se lleva a cabo por los lugareños, debido a esto los visitantes podrán conocer manglares blancos y rojos, aves, patos aguja y garzas blancas. Además en medio de la laguna costera hay una isla llena de palmeras que cuentan con un criadero de cocodrilos acutus para conocer.', '1aPKfwPs2IRKnGb1VO6MFa9xuqtsPuOg4'),
(37, 4, 'Mazunte', '', 'Un buen lugar para visitar con niños es Mazunte por el trabajo que se hace con tortugas marinas, dado que aquí se encuentra el Centro Mexicano de la Tortuga , el cual además de su trabajo de conservación que realiza funge también como un acuario de diversas especies, como un museo para conocer la historia de la vida marina y como centro de investigación.', '1aPKfwPs2IRKnGb1VO6MFa9xuqtsPuOg4'),
(38, 4, 'Playa La Entrega', '', 'Una de las opciones que encontrarás en Huatulco para ir a nadar con los más pequeños es la «Playa La Entrega». Pues,  este lugar es bello por lo cristalino del agua y las corrientes son tranquilas, ideales para practicar natación y esnórquel sin ninguna preocupación.', '1aPKfwPs2IRKnGb1VO6MFa9xuqtsPuOg4'),
(39, 4, 'Rancho Tangolunda', '', 'Si desean realizar otro tipo de actividades al aire libre, el Rancho Tangolunda es un lugar ideal por visitar, ya que aquí hay un gran variedad de actividades por hacer como: paseos a caballo, subirse a la tirolesa, caminatas, rafting, escalada, rappel e incluso campamento; mientras se encuentran rodeados de la hermosa vegetación de la zona.', '1aPKfwPs2IRKnGb1VO6MFa9xuqtsPuOg4'),
(40, 4, 'Bahía Santa Cruz', '', 'Para pasar un rato agradable en el agua con niños, la Bahía Santa Cruz es de los mejores lugares para hacerlo, dado que en esta zona el agua mantiene una temperatura templada y el oleaje es moderado, lo que permite que los pequeños puedan nadar y jugar de manera tranquila.', '1aPKfwPs2IRKnGb1VO6MFa9xuqtsPuOg4'),
(41, 4, 'Bahía de Tangolunda', '', 'Es la bahía más importante de Huatulco y como tal encontrarás varios hoteles y restaurantes para pasar una placentera estadía en ella. Su blanca y fina arena, y aguas cristalinas de color verde esmeralda, son el perfecto escenario para que pases un agradable día bajo el sol.\r\nAdemás, su suave oleaje es ideal para el nado, buceo, kayak y veleo. Así que no dejes de disfrutar de ella en alguna de sus cinco playas.', '1aPKfwPs2IRKnGb1VO6MFa9xuqtsPuOg4'),
(42, 4, 'Cascadas Llano Grande', '', 'Un excelente paseo para aprovechar otras maravillas de la naturaleza además de las playas de Huatulco. Gracias al compromiso por cuidar el medio ambiente de este proyecto, podrás disfrutar de una visita a las cascadas de Llano Grande, una explicación de la producción del café en la zona, visitar el jardín botánico y conocer sus medicinas tradicionales o darte una vuelta al mariposario. Sea cual sea tu preferencia disfrutarás de un excelente día.', '1aPKfwPs2IRKnGb1VO6MFa9xuqtsPuOg4'),
(43, 4, 'La Crucecita', '', 'El principal punto de reunión de las bahías de Huatulco, aquí debes dirigirte para encontrar todo tipo de servicios turísticos, desde tours para visitar las bahías, hasta una gran variedad de restaurantes para todos los gustos. Su mercado también te ofrecerá varios productos artesanales y típicos del lugar, como chocolate, quesillo, mezcal y mucho más.\r\nLa iglesia dedicada a la Virgen de Guadalupe también es una linda visita.', '1aPKfwPs2IRKnGb1VO6MFa9xuqtsPuOg4'),
(44, 4, 'Bahía Cacaluta', '', 'Esta bahía se distingue por su forma abierta que asemeja un corazón y por las dos playas que la integran: Cacaluta y Arroyo. En la primera te sorprenderán las aguas azules y verdes, aunque con un oleaje fuerte es más propicia para windsurf que para nado. La segunda es poco concurrida porque su arena blanca está revuelta con coral. Si esto no te importa, es un lugar ideal si buscas tranquilidad.', '1aPKfwPs2IRKnGb1VO6MFa9xuqtsPuOg4'),
(45, 4, 'Parque Eco-Arqueológico Copalita', '', 'Además de disfrutar de las playas de Huatulco, durante tu visita también podrás visitar este parque arqueológico que se encuentra a sólo diez kilómetros de las bahías. Aquí podrás admirar vestigios arqueológicos de hasta 900 años antes de Cristo. También cuenta con un museo de sitio, un mercado de artesanías y un recorrido ecoturístico.\r\nCon miradores impresionantes, atractivos naturales y atractivos arqueológicos, es una visita obligada.', '1aPKfwPs2IRKnGb1VO6MFa9xuqtsPuOg4'),
(46, 4, 'Fincas Cafetaleras', '', 'Además de sus hermosas playas, Huatulco también es reconocido por las fincas cafetaleras que se fundaron a finales del siglo XIX cuando decayó el cultivo de la gran cochinilla. Con el clima ideal para cultivar este grano, se produce ahora uno de los cafés más exquisitos a nivel mundial.\nAl visitarlas, además de lo atractivo de las fincas en sí, podrás dar largas caminatas entre riachuelos disfrutando de la flora y fauna del lugar.', '1aPKfwPs2IRKnGb1VO6MFa9xuqtsPuOg4'),
(47, 4, 'Cascadas de Copalitilla', '', 'Un conjunto de 30 cascadas, la más grande con 20 metros de altura, forman a las cascadas de Copalitilla. Como a una hora de Huatulco es un lugar ideal para pasar el día nadando en las pozas naturales que se forman, practicando ciclismo, dando largas caminatas o incluso acampando.\r\nEn la zona de las cascadas también hay grutas y túneles a explorar; y una amplia variedad de flora y fauna. Es un excelente destino para actividades ecoturísticas.', '1aPKfwPs2IRKnGb1VO6MFa9xuqtsPuOg4'),
(48, 4, 'Parque Nacional Huatulco', '', 'Decretado Área Natural Protegida desde 1998, cuenta con más de once mil hectáreas de reserva en la que habitan plantas, mamíferos, aves, reptiles y anfibios. Dentro de su área se fusionan varios ecosistemas que crean magníficos escenarios terrestre y marinos, también lo se encuentran algunas bahías como: san agustín, chachacual, riscalillo, cacaluta, maguey y órgano, punta sacrificio al occidente y punta violín al oriente. Se pueden realizar algunas actividades como senderismo, expediciones a caballo, recorrido en bicicleta o vehículo a todo terreno y observación de aves, entre otras.', '1aPKfwPs2IRKnGb1VO6MFa9xuqtsPuOg4');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `administrador_ciudad`
--
ALTER TABLE `administrador_ciudad`
  ADD PRIMARY KEY (`idUsuario`);

--
-- Indices de la tabla `administrador_establecimiento`
--
ALTER TABLE `administrador_establecimiento`
  ADD PRIMARY KEY (`idUsuario`);

--
-- Indices de la tabla `calificaciones_establecimiento_usuario`
--
ALTER TABLE `calificaciones_establecimiento_usuario`
  ADD PRIMARY KEY (`_idEstablecimiento`,`_idUsuario`),
  ADD KEY `fk_establecimiento_pro_has_usuario_app_usuario_app1_idx` (`_idUsuario`),
  ADD KEY `fk_establecimiento_pro_has_usuario_app_establecimiento_pro1_idx` (`_idEstablecimiento`);

--
-- Indices de la tabla `calificaciones_usuarios_ciudades`
--
ALTER TABLE `calificaciones_usuarios_ciudades`
  ADD PRIMARY KEY (`_idUsuario`,`_idCiudad`),
  ADD KEY `fk_usuario_app_has_ciudades_ciudades1_idx` (`_idCiudad`),
  ADD KEY `fk_usuario_app_has_ciudades_usuario_app1_idx` (`_idUsuario`);

--
-- Indices de la tabla `ciudades`
--
ALTER TABLE `ciudades`
  ADD PRIMARY KEY (`idCiudad`,`_id_administrador`),
  ADD KEY `fk_Ciudad_AdministradorCiudad1_idx` (`_id_administrador`);

--
-- Indices de la tabla `direccion`
--
ALTER TABLE `direccion`
  ADD PRIMARY KEY (`idDireccion`,`_idEstablecimiento`,`_idCiudad`),
  ADD KEY `fk_Direccion_Establecimiento_idx` (`_idEstablecimiento`),
  ADD KEY `fk_direccion_ciudades1_idx` (`_idCiudad`);

--
-- Indices de la tabla `entradas_usuario_agenda`
--
ALTER TABLE `entradas_usuario_agenda`
  ADD PRIMARY KEY (`idEntrada`,`_idUsuario`,`_idCiudad`,`_idTransporte`),
  ADD KEY `fk_Usuario_has_Ciudad_Ciudad1_idx` (`_idCiudad`),
  ADD KEY `fk_Usuario_has_Ciudad_Usuario1_idx` (`_idUsuario`),
  ADD KEY `fk_UsuarioPorVisitarCiudad_EstablecimientoPro1_idx` (`_idTransporte`);

--
-- Indices de la tabla `establecimientos`
--
ALTER TABLE `establecimientos`
  ADD PRIMARY KEY (`idEstablecimiento`);

--
-- Indices de la tabla `establecimiento_pro`
--
ALTER TABLE `establecimiento_pro`
  ADD PRIMARY KEY (`_idEstablecimiento`,`_idAdministrador`),
  ADD KEY `fk_EstablecimientoPro_Establecimiento1_idx` (`_idEstablecimiento`),
  ADD KEY `fk_EstablecimientoPro_UsuarioEstablecimiento1_idx` (`_idAdministrador`);

--
-- Indices de la tabla `festividad`
--
ALTER TABLE `festividad`
  ADD PRIMARY KEY (`idFecha`,`_idCiudad`),
  ADD KEY `fk_FechasImportantes_Ciudad1_idx` (`_idCiudad`);

--
-- Indices de la tabla `fotos_ciudad`
--
ALTER TABLE `fotos_ciudad`
  ADD PRIMARY KEY (`foto`,`_idCiudad`),
  ADD KEY `fk_FotosCiudad_Ciudad1_idx` (`_idCiudad`);

--
-- Indices de la tabla `fotos_establecimiento`
--
ALTER TABLE `fotos_establecimiento`
  ADD PRIMARY KEY (`foto`,`_idEstablecimiento`),
  ADD KEY `fk_fotos_establecimiento_establecimiento_pro1_idx` (`_idEstablecimiento`);

--
-- Indices de la tabla `horario_atencion`
--
ALTER TABLE `horario_atencion`
  ADD PRIMARY KEY (`idHorarioAtencion`,`_idEstablecimiento`),
  ADD KEY `fk_HorarioAtencion_EstablecimientoPro1_idx` (`_idEstablecimiento`);

--
-- Indices de la tabla `hora_salida`
--
ALTER TABLE `hora_salida`
  ADD PRIMARY KEY (`idHora`,`_idSalidasTransporte`),
  ADD KEY `fk_hora_salida_salidas_transporte1_idx` (`_idSalidasTransporte`);

--
-- Indices de la tabla `notas_ciudad`
--
ALTER TABLE `notas_ciudad`
  ADD PRIMARY KEY (`idNotaCiudad`,`_idCiudad`),
  ADD KEY `fk_NotasCiudad_Ciudad1_idx` (`_idCiudad`);

--
-- Indices de la tabla `origen_transporte`
--
ALTER TABLE `origen_transporte`
  ADD PRIMARY KEY (`_idCiudad`,`_idTransporte`),
  ADD KEY `fk_ciudades_has_establecimiento_pro_establecimiento_pro1_idx` (`_idTransporte`),
  ADD KEY `fk_ciudades_has_establecimiento_pro_ciudades1_idx` (`_idCiudad`);

--
-- Indices de la tabla `personajes_importantes`
--
ALTER TABLE `personajes_importantes`
  ADD PRIMARY KEY (`idPersonajes`,`_idCiudad`),
  ADD KEY `fk_PersonajesImportantes_Ciudad1_idx` (`_idCiudad`);

--
-- Indices de la tabla `platillos`
--
ALTER TABLE `platillos`
  ADD PRIMARY KEY (`idPlatillos`,`_idCiudad`),
  ADD KEY `fk_Platillos_Ciudad1_idx` (`_idCiudad`);

--
-- Indices de la tabla `resenhas_ciudad`
--
ALTER TABLE `resenhas_ciudad`
  ADD PRIMARY KEY (`idResenhasCiudad`,`_idUsuario`,`_idCiudad`),
  ADD KEY `fk_resenhas_ciudad_usuario_app1_idx` (`_idUsuario`),
  ADD KEY `fk_resenhas_ciudad_ciudades1_idx` (`_idCiudad`);

--
-- Indices de la tabla `resenhas_establecimiento`
--
ALTER TABLE `resenhas_establecimiento`
  ADD PRIMARY KEY (`idResenha`,`_idEstablecimiento`,`_idUsuario`),
  ADD KEY `fk_resenhas_establecimiento_establecimiento_pro1_idx` (`_idEstablecimiento`),
  ADD KEY `fk_resenhas_establecimiento_usuario_app1_idx` (`_idUsuario`);

--
-- Indices de la tabla `salidas_transporte`
--
ALTER TABLE `salidas_transporte`
  ADD PRIMARY KEY (`idSalidasTransporte`,`_idTransporte`,`_idCiudadDestino`),
  ADD KEY `fk_SalidasTransporte_EstablecimientoPro1_idx` (`_idTransporte`),
  ADD KEY `fk_SalidasTransporte_Ciudad1_idx` (`_idCiudadDestino`);

--
-- Indices de la tabla `tasks`
--
ALTER TABLE `tasks`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `tipos_turismo`
--
ALTER TABLE `tipos_turismo`
  ADD PRIMARY KEY (`idTiposTurismo`);

--
-- Indices de la tabla `tipo_turismo_ciudad`
--
ALTER TABLE `tipo_turismo_ciudad`
  ADD PRIMARY KEY (`_idCiudad`,`_idTiposTurismo`),
  ADD KEY `fk_Ciudad_has_TiposTurismo_TiposTurismo1_idx` (`_idTiposTurismo`),
  ADD KEY `fk_Ciudad_has_TiposTurismo_Ciudad1_idx` (`_idCiudad`);

--
-- Indices de la tabla `usuario_app`
--
ALTER TABLE `usuario_app`
  ADD PRIMARY KEY (`idUsuario`);

--
-- Indices de la tabla `zonas_turisticas`
--
ALTER TABLE `zonas_turisticas`
  ADD PRIMARY KEY (`idZonaTuristica`,`_idCiudad`),
  ADD KEY `fk_zonas_turisticas_ciudades1_idx` (`_idCiudad`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `administrador_ciudad`
--
ALTER TABLE `administrador_ciudad`
  MODIFY `idUsuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `administrador_establecimiento`
--
ALTER TABLE `administrador_establecimiento`
  MODIFY `idUsuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `ciudades`
--
ALTER TABLE `ciudades`
  MODIFY `idCiudad` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `direccion`
--
ALTER TABLE `direccion`
  MODIFY `idDireccion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT de la tabla `entradas_usuario_agenda`
--
ALTER TABLE `entradas_usuario_agenda`
  MODIFY `idEntrada` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=54;

--
-- AUTO_INCREMENT de la tabla `establecimientos`
--
ALTER TABLE `establecimientos`
  MODIFY `idEstablecimiento` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT de la tabla `festividad`
--
ALTER TABLE `festividad`
  MODIFY `idFecha` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `horario_atencion`
--
ALTER TABLE `horario_atencion`
  MODIFY `idHorarioAtencion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT de la tabla `hora_salida`
--
ALTER TABLE `hora_salida`
  MODIFY `idHora` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `notas_ciudad`
--
ALTER TABLE `notas_ciudad`
  MODIFY `idNotaCiudad` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT de la tabla `personajes_importantes`
--
ALTER TABLE `personajes_importantes`
  MODIFY `idPersonajes` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT de la tabla `platillos`
--
ALTER TABLE `platillos`
  MODIFY `idPlatillos` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `resenhas_ciudad`
--
ALTER TABLE `resenhas_ciudad`
  MODIFY `idResenhasCiudad` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `resenhas_establecimiento`
--
ALTER TABLE `resenhas_establecimiento`
  MODIFY `idResenha` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `salidas_transporte`
--
ALTER TABLE `salidas_transporte`
  MODIFY `idSalidasTransporte` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `tasks`
--
ALTER TABLE `tasks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `usuario_app`
--
ALTER TABLE `usuario_app`
  MODIFY `idUsuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `zonas_turisticas`
--
ALTER TABLE `zonas_turisticas`
  MODIFY `idZonaTuristica` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `calificaciones_establecimiento_usuario`
--
ALTER TABLE `calificaciones_establecimiento_usuario`
  ADD CONSTRAINT `fk_establecimiento_pro_has_usuario_app_establecimiento_pro1` FOREIGN KEY (`_idEstablecimiento`) REFERENCES `establecimiento_pro` (`_idEstablecimiento`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_establecimiento_pro_has_usuario_app_usuario_app1` FOREIGN KEY (`_idUsuario`) REFERENCES `usuario_app` (`idUsuario`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `calificaciones_usuarios_ciudades`
--
ALTER TABLE `calificaciones_usuarios_ciudades`
  ADD CONSTRAINT `fk_usuario_app_has_ciudades_ciudades1` FOREIGN KEY (`_idCiudad`) REFERENCES `ciudades` (`idCiudad`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_usuario_app_has_ciudades_usuario_app1` FOREIGN KEY (`_idUsuario`) REFERENCES `usuario_app` (`idUsuario`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `ciudades`
--
ALTER TABLE `ciudades`
  ADD CONSTRAINT `fk_Ciudad_AdministradorCiudad1` FOREIGN KEY (`_id_administrador`) REFERENCES `administrador_ciudad` (`idUsuario`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `direccion`
--
ALTER TABLE `direccion`
  ADD CONSTRAINT `fk_Direccion_Establecimiento` FOREIGN KEY (`_idEstablecimiento`) REFERENCES `establecimientos` (`idEstablecimiento`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_direccion_ciudades1` FOREIGN KEY (`_idCiudad`) REFERENCES `ciudades` (`idCiudad`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `entradas_usuario_agenda`
--
ALTER TABLE `entradas_usuario_agenda`
  ADD CONSTRAINT `fk_UsuarioPorVisitarCiudad_EstablecimientoPro1` FOREIGN KEY (`_idTransporte`) REFERENCES `establecimiento_pro` (`_idEstablecimiento`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Usuario_has_Ciudad_Ciudad1` FOREIGN KEY (`_idCiudad`) REFERENCES `ciudades` (`idCiudad`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Usuario_has_Ciudad_Usuario1` FOREIGN KEY (`_idUsuario`) REFERENCES `usuario_app` (`idUsuario`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `establecimiento_pro`
--
ALTER TABLE `establecimiento_pro`
  ADD CONSTRAINT `fk_EstablecimientoPro_Establecimiento1` FOREIGN KEY (`_idEstablecimiento`) REFERENCES `establecimientos` (`idEstablecimiento`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_EstablecimientoPro_UsuarioEstablecimiento1` FOREIGN KEY (`_idAdministrador`) REFERENCES `administrador_establecimiento` (`idUsuario`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `festividad`
--
ALTER TABLE `festividad`
  ADD CONSTRAINT `fk_FechasImportantes_Ciudad1` FOREIGN KEY (`_idCiudad`) REFERENCES `ciudades` (`idCiudad`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `fotos_ciudad`
--
ALTER TABLE `fotos_ciudad`
  ADD CONSTRAINT `fk_FotosCiudad_Ciudad1` FOREIGN KEY (`_idCiudad`) REFERENCES `ciudades` (`idCiudad`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `fotos_establecimiento`
--
ALTER TABLE `fotos_establecimiento`
  ADD CONSTRAINT `fk_fotos_establecimiento_establecimiento_pro1` FOREIGN KEY (`_idEstablecimiento`) REFERENCES `establecimiento_pro` (`_idEstablecimiento`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `horario_atencion`
--
ALTER TABLE `horario_atencion`
  ADD CONSTRAINT `fk_HorarioAtencion_EstablecimientoPro1` FOREIGN KEY (`_idEstablecimiento`) REFERENCES `establecimiento_pro` (`_idEstablecimiento`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `hora_salida`
--
ALTER TABLE `hora_salida`
  ADD CONSTRAINT `fk_hora_salida_salidas_transporte1` FOREIGN KEY (`_idSalidasTransporte`) REFERENCES `salidas_transporte` (`idSalidasTransporte`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `notas_ciudad`
--
ALTER TABLE `notas_ciudad`
  ADD CONSTRAINT `fk_NotasCiudad_Ciudad1` FOREIGN KEY (`_idCiudad`) REFERENCES `ciudades` (`idCiudad`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `origen_transporte`
--
ALTER TABLE `origen_transporte`
  ADD CONSTRAINT `fk_ciudades_has_establecimiento_pro_ciudades1` FOREIGN KEY (`_idCiudad`) REFERENCES `ciudades` (`idCiudad`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_ciudades_has_establecimiento_pro_establecimiento_pro1` FOREIGN KEY (`_idTransporte`) REFERENCES `establecimiento_pro` (`_idEstablecimiento`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `personajes_importantes`
--
ALTER TABLE `personajes_importantes`
  ADD CONSTRAINT `fk_PersonajesImportantes_Ciudad1` FOREIGN KEY (`_idCiudad`) REFERENCES `ciudades` (`idCiudad`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `platillos`
--
ALTER TABLE `platillos`
  ADD CONSTRAINT `fk_Platillos_Ciudad1` FOREIGN KEY (`_idCiudad`) REFERENCES `ciudades` (`idCiudad`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `resenhas_ciudad`
--
ALTER TABLE `resenhas_ciudad`
  ADD CONSTRAINT `fk_resenhas_ciudad_ciudades1` FOREIGN KEY (`_idCiudad`) REFERENCES `ciudades` (`idCiudad`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_resenhas_ciudad_usuario_app1` FOREIGN KEY (`_idUsuario`) REFERENCES `usuario_app` (`idUsuario`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `resenhas_establecimiento`
--
ALTER TABLE `resenhas_establecimiento`
  ADD CONSTRAINT `fk_resenhas_establecimiento_establecimiento_pro1` FOREIGN KEY (`_idEstablecimiento`) REFERENCES `establecimiento_pro` (`_idEstablecimiento`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_resenhas_establecimiento_usuario_app1` FOREIGN KEY (`_idUsuario`) REFERENCES `usuario_app` (`idUsuario`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `salidas_transporte`
--
ALTER TABLE `salidas_transporte`
  ADD CONSTRAINT `fk_SalidasTransporte_Ciudad1` FOREIGN KEY (`_idCiudadDestino`) REFERENCES `ciudades` (`idCiudad`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_SalidasTransporte_EstablecimientoPro1` FOREIGN KEY (`_idTransporte`) REFERENCES `establecimiento_pro` (`_idEstablecimiento`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `tipo_turismo_ciudad`
--
ALTER TABLE `tipo_turismo_ciudad`
  ADD CONSTRAINT `fk_Ciudad_has_TiposTurismo_Ciudad1` FOREIGN KEY (`_idCiudad`) REFERENCES `ciudades` (`idCiudad`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Ciudad_has_TiposTurismo_TiposTurismo1` FOREIGN KEY (`_idTiposTurismo`) REFERENCES `tipos_turismo` (`idTiposTurismo`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `zonas_turisticas`
--
ALTER TABLE `zonas_turisticas`
  ADD CONSTRAINT `fk_zonas_turisticas_ciudades1` FOREIGN KEY (`_idCiudad`) REFERENCES `ciudades` (`idCiudad`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
