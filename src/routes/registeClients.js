//Apesar do nome aqui ficam as rotas que fazem registro no db
const express = require("express");
const app = express();
const router = express.Router();

const createCommunClient = require("../modules/comunClient/createComunClient");
const createCommercialClient = require("../modules/commercialClient/createCommercialClient");

router.post("/client/commun/create", async (req, res) => {
    const {
        name,
        lastname,
        email,
        password,
        age,
        perfil_image,
        vaccination_status,
        city,
        state,
    } = req.body;

    const result = await createCommunClient(
        name,
        lastname,
        email,
        password,
        age,
        perfil_image,
        vaccination_status,
        city,
        state,
    );

    console.log(result);

    if (result == null) {
        return res.status(400).json({message: "Register Error"});
    } else {
        return res.status(200).json(result);
    }
});

router.post("/client/commercial/create", async (req, res) => {
    const {
        establishment_name,
        owner_name,
        email,
        password,
        perfil_image,
        street,
        number,
        neighborhood,
        city,
        state,
    } = req.body;

    const result = await createCommercialClient(
        establishment_name,
        owner_name,
        email,
        password,
        perfil_image,
        street,
        number,
        neighborhood,
        city,
        state,
    );

    console.log(result);

    if (result == null) {
        return res.status(400).json({message: "Register Error"});
    } else {
        return res.status(200).json(result);
    }
});

module.exports = router;