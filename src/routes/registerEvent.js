const express = require('express');
const router = express.Router();

const createEvent = require("../modules/events/createEvent");
const findAllEvents = require("../modules/events/findAllEvents");

router.post("/event/create", async (req, res) => {
    const {
        title,
        description,
        date,
        image,
        price,
        capacity,
        street,
        number,
        neighborhood,
        city,
        state,
        id_owner,
    } = req.body;

    console.log(state);

    const result = await createEvent(
        title,
        description,
        date,
        image,
        price,
        capacity,
        street,
        number,
        neighborhood,
        city,
        state,
        id_owner,
    );

    console.log(result);

    if (result == null) {
        return res.status(400).json({message: "Register event error"});
    } else {
        return res.status(200).json(result);
    }
});

router.get("/event/all", async (req, res) => {
    const result = await findAllEvents();

    if (result == null) {
        return res.status(400).json({message: "Error events"})
    } else {
        return res.status(200).json(result);
    }
});

module.exports = router;