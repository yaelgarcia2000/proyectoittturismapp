const API = 'http://192.168.0.19:3000/entradasUsuarioAgenda';
const datos = 'http://192.168.0.19:3000/tasks';
const ciudades = 'http://192.168.0.19:3000/ciudades';

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
