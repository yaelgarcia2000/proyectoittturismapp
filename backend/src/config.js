import { config as dotenv } from "dotenv";
dotenv();
const env = process.env;

export const configp = {
  host: env.DB_HOST || "localhost",
  user: env.DB_USER || "root",
  password: env.DB_PASSWORD || "",
  database: env.DB_DATABASE || "turismapp",
  port: env.DB_PORT,
};
export const configer = {
  host: "localhost",
  user: "id18880428_luisyaeladrian",
  password: "TurismAPP_2022",
  database: "id18880428_informacionappturismo",
};
export const config = {
  host: "localhost",
  user: "root",
  password: "",
  database: "turismapp",
};

export const configr = {
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_DATABASE || "turismapp",
};
