import express from "express";
import { engine } from "express-handlebars";
import morgan from "morgan";
import { fileURLToPath } from "url";
import path from "path";
import route from './routes/index.js'

const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// //HTTP logger
// app.use(morgan("combined"));

app.use(express.static(path.join(__dirname, "public")));

//Template engine
app.engine(
  "hbs",
  engine({
    extname: "hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

route(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
