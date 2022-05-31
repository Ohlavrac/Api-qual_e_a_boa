const express = require('express');
const router = express.Router();

const createEvent = require("../modules/events/createEvent");
const findAllEvents = require("../modules/events/findAllEvents");
const eventDetail = require("../modules/events/eventDetail");
const deleteEvent = require("../modules/events/deleteEvent");
const addEventConfirm = require("../modules/comunClient/addEventConfirm");
const removeEventConfirm = require("../modules/comunClient/removeEventConfirm");
const updateEvent = require("../modules/events/updateEvent");

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

router.post("/event/update/:id", async (req, res) => {
    const id = req.params.id;
    const {id_owner} = req.body;

    var result = await updateEvent(id, id_owner);

    if (result == null) {
        return res.status(400).json({message: "Error id is not event owner"});
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

router.get("/event/more/:id", async (req, res) => {
    const id = req.params.id;
    const result = await eventDetail(id);

    if (result == null) {
        return res.status(400).json({message: "Error events details"})
    } else {
        return res.status(200).json(result);
    }
});

router.post("/event/delete/:id", async (req, res) => {
    const id = req.params.id;
    const {id_owner} = req.body;

    const result = await deleteEvent(id, id_owner);

    if (result == null) {
        return res.status(400).json({message: "Error events details"})
    } else {
        return res.status(200).json({message: "Event deleted"});
    }
});

router.post("/event/confirm/:id", async (req, res) => {
    const id = req.params.id;
    const {id_comun} = req.body;

    if (await eventDetail(id) != null) {
        const result = await addEventConfirm(id, id_comun);

        if (result.msg != null) {
            return res.status(400).json(result);
        } else {
            return res.status(200).json(result);
        }
    } else {
        return res.status(400).json({message: "Error events details"})
    }
});

router.post("/event/remove/:id", async (req, res) => {
    const id = req.params.id;
    const {id_comun} = req.body;

    if (await eventDetail(id) != null) {
        const result = await removeEventConfirm(id, id_comun);

        console.log(result.title || result.msg);

        if (result.msg != null) {
            return res.status(400).json(result);
        } else {
            return res.status(200).json(result);
        }
    } else {
        return res.status(400).json({message: "Error events details"})
    }
});

module.exports = router;