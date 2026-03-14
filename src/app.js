import "dotenv/config";
import express from "express";
import routes from "./routes/route.js";
import path from "path";

import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.static(path.resolve(__dirname, "..", "public")));

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

app.use(routes);

try {
  app.listen(process.env.PORT, () => {
  console.log('Api rodando');
  })
} catch (error) {
  console.log(error);
}

