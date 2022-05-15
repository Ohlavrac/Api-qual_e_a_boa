const express = require("express");
const server = express();
const port = 3000;

const registerRoute = require("./routes/registerRoutes");

server.use(express.json());

server.get("/", (req, res) => {
    res.send("Projeto Qual eh a Boa (By: Debora Cristina, Karlisson Brendo, Marcelo Barros e João Victor Carvalho).");
});

server.use(registerRoute);

server.listen(port, () => console.log("Server run in port: "+ port));