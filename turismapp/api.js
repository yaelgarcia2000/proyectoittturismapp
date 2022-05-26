const baseApi = 'http://192.168.0.17:3000';

export const getNotas = async () => {
  const res = await fetch(`${baseApi}/entradasUsuarioAgenda`);
  return await res.json();
};

export const getNota = async ID => {
  const res = await fetch(`${baseApi}/entradasUsuarioAgenda/${ID}`);
  return await res.json();
};

export const guardarAgenda = async nuevaAgenda => {
  const res = await fetch(`${baseApi}/entradasUsuarioAgenda`, {
    method: 'POST',
    headers: {Accept: 'application/json', 'Content-Type': 'application/json'},
    body: JSON.stringify(nuevaAgenda),
  });
  return await res.json();
};

export const elimarAgenda = async ID => {
  await fetch(`${baseApi}/entradasUsuarioAgenda/${ID}`, {
    method: 'DELETE',
  });
};

export const updateAgenda = async (ID, newAgenda) => {
  const res = await fetch(`${baseApi}/entradasUsuarioAgenda/${ID}`, {
    method: 'PUT',
    headers: {Accept: 'application/json', 'Content-Type': 'application/json'},
    body: JSON.stringify(newAgenda),
  });
  return await res;
};
/* Datos*/
export const getDatos = async () => {
  const res = await fetch(`${baseApi}/tasks`);
  return await res.json();
};

/* Lugares*/
export const getCiudades = async () => {
  const res = await fetch(`${baseApi}/ciudades`);
  return await res.json();
};

/* ----------Servicios----------*/

/*Restaurantes*/
export const getRestaurantes = async () => {
  const res = await fetch(`${baseApi}/serviceRestaurant`);
  return await res.json();
};
/*Hoteles*/
export const getHoteles = async () => {
  const res = await fetch(`${baseApi}/serviceHotel`);
  return await res.json();
};
/*Transportes*/
export const getTransportes = async () => {
  const res = await fetch(`${baseApi}/serviceTransport`);
  return await res.json();
};
/*Mercados*/
export const getMercados = async () => {
  const res = await fetch(`${baseApi}/serviceMarket`);
  return await res.json();
};
/*Bancos*/
export const getBancos = async () => {
  const res = await fetch(`${baseApi}/serviceBank`);
  return await res.json();
};
/*Establecimientos de gobierno*/
export const getEstablecimientosGobierno = async () => {
  const res = await fetch(`${baseApi}/serviceGovernment`);
  return await res.json();
};
/*Supermercados*/
export const getSupermercados = async () => {
  const res = await fetch(`${baseApi}/serviceSupermarket`);
  return await res.json();
};
/*Abarroteras*/
export const getAbarroteras = async () => {
  const res = await fetch(`${baseApi}/serviceShop`);
  return await res.json();
};
/* ----------Sobre la zona----------*/
/* Zona turística*/
export const getZonaTuristica = async () => {
  const res = await fetch(`${baseApi}/zonasTuristicas`);
  return await res.json();
};
/* Reseñas*/
export const getResenias = async () => {
  const res = await fetch(`${baseApi}/resenhasCiudad`);
  return await res.json();
};
/* Festividades*/
export const getFestividades = async () => {
  const res = await fetch(`${baseApi}/festividad`);
  return await res.json();
};
/* Personajes importantes*/
export const getPersonajesImportantes = async () => {
  const res = await fetch(`${baseApi}/personajesImportantes`);
  return await res.json();
};
/* Platillos*/
export const getPlatillos = async () => {
  const res = await fetch(`${baseApi}/platillos`);
  return await res.json();
};

export const registroUsu = async payload => {
  const res = await fetch(`${baseApi}/usuarioApp`, {
    method: 'POST',
    headers: {Accept: 'application/json', 'Content-Type': 'application/json'},
    body: JSON.stringify(payload),
  });
  return await res.json();
};
