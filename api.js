const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require('cors')
const SECRET_KEY = "CLAVE ULTRA SECRETA";
const registerRouter = require("./routes/registerRoutes.js");

const app = express();
const port = 3000;

app.use(cors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
}))
app.use(express.json());

app.use("/login", registerRouter);

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});