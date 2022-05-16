const express = require("express");
const server = express();
const port = 3000;

const registerClients = require("./routes/registeClients");
const loginRoute = require("./routes/loginRoutes");
const registerEvent = require("./routes/registerEvent");

server.use(express.json());

server.get("/", (req, res) => {
    res.send("Projeto Qual eh a Boa (By: Debora Cristina, Karlisson Brendo, Marcelo Barros e João Victor Carvalho).");
});

server.use(registerClients);
server.use(loginRoute);
server.use(registerEvent);

server.listen(port, () => console.log("Server run in port: "+ port));