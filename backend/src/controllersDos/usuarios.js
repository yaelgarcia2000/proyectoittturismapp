import { getUser } from "../controllers/usuarioApp";

export const validarUsu = async (req, res) => {
  const { correo, pass, nombreUsu } = req.body;
  console.log(req.body);
  if (!correo || !pass || !nombreUsu) {
    return res.status(400).json({ status: "Error falta datos" });
  }
  if (correo.indexOf("@") === -1 || correo.indexOf(".") === -1) {
    return res.status(400).json({ status: "Error @ o ." });
  }
  if (pass.lenght < 10) {
    return res.status(400).json({ status: "Error longitud" });
  }

  try {
    const user = await getUser({ correo });
    console.log(user);
    return res.status(200).json({ sesion: undefined });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json();
  }
};
