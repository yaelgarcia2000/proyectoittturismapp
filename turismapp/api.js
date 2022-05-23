const API = 'http://192.168.205.82:3000/entradasUsuarioAgenda';
const datos = 'http://192.168.205.82:3000/tasks';
const ciudades = 'http://192.168.205.82:3000/ciudades';

const restaurantes = 'http://192.168.205.82:3000/serviceRestaurant';
const hoteles = 'http://192.168.205.82:3000/serviceHotel';
const transportes = 'http://192.168.205.82:3000/serviceTransport';
const mercados = 'http://192.168.205.82:3000/serviceMarket';
const bancos = 'http://192.168.205.82:3000/serviceBank';
const establecimientosGobierno = 'http://192.168.205.82:3000/serviceGovernment';
const supermercados = 'http://192.168.205.82:3000/serviceSupermarket';
const abarroteras = 'http://192.168.205.82:3000/serviceShop';

const zonaTuristica = 'http://192.168.205.82:3000/zonasTuristicas';
const resenias = 'http://192.168.205.82:3000/resenhasCiudad';
const festividades = 'http://192.168.205.82:3000/festividad';
const personajesImportantes =
  'http://192.168.205.82:3000/personajesImportantes';
const platillos = 'http://192.168.205.82:3000/platillos';

export const getNotas = async () => {
  const res = await fetch(API);
  return await res.json();
};

export const getNota = async ID => {
  const res = await fetch(`${API}/${ID}`);
  return await res.json();
};

export const guardarAgenda = async nuevaAgenda => {
  const res = await fetch(API, {
    method: 'POST',
    headers: {Accept: 'application/json', 'Content-Type': 'application/json'},
    body: JSON.stringify(nuevaAgenda),
  });
  return await res.json();
};

export const elimarAgenda = async ID => {
  await fetch(`${API}/${ID}`, {
    method: 'DELETE',
  });
};

export const updateAgenda = async (ID, newAgenda) => {
  const res = await fetch(`${API}/${ID}`, {
    method: 'PUT',
    headers: {Accept: 'application/json', 'Content-Type': 'application/json'},
    body: JSON.stringify(newAgenda),
  });
  return await res;
};
/* Datos*/
export const getDatos = async () => {
  const res = await fetch(datos);
  return await res.json();
};

/* Lugares*/
export const getCiudades = async () => {
  const res = await fetch(ciudades);
  return await res.json();
};

/* ----------Servicios----------*/

/*Restaurantes*/
export const getRestaurantes = async () => {
  const res = await fetch(restaurantes);
  return await res.json();
};
/*Hoteles*/
export const getHoteles = async () => {
  const res = await fetch(hoteles);
  return await res.json();
};
/*Transportes*/
export const getTransportes = async () => {
  const res = await fetch(transportes);
  return await res.json();
};
/*Mercados*/
export const getMercados = async () => {
  const res = await fetch(mercados);
  return await res.json();
};
/*Bancos*/
export const getBancos = async () => {
  const res = await fetch(bancos);
  return await res.json();
};
/*Establecimientos de gobierno*/
export const getEstablecimientosGobierno = async () => {
  const res = await fetch(establecimientosGobierno);
  return await res.json();
};
/*Supermercados*/
export const getSupermercados = async () => {
  const res = await fetch(supermercados);
  return await res.json();
};
/*Abarroteras*/
export const getAbarroteras = async () => {
  const res = await fetch(abarroteras);
  return await res.json();
};
/* ----------Sobre la zona----------*/
/* Zona turística*/
export const getZonaTuristica = async () => {
  const res = await fetch(zonaTuristica);
  return await res.json();
};
/* Reseñas*/
export const getResenias = async () => {
  const res = await fetch(resenias);
  return await res.json();
};
/* Festividades*/
export const getFestividades = async () => {
  const res = await fetch(festividades);
  return await res.json();
};
/* Personajes importantes*/
export const getPersonajesImportantes = async () => {
  const res = await fetch(personajesImportantes);
  return await res.json();
};
/* Platillos*/
export const getPlatillos = async () => {
  const res = await fetch(platillos);
  return await res.json();
};
