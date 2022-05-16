const express = require('express');
const router = express.Router();

const login = require("../modules/auth/authClients");

router.post("/login", async (req, res) => {
    const {email, password} = req.body;

    const result = await login(email, password);

    if (result == null) {
        return res.status(400).json({message: "Incorrect email or password"});
    } else {
        return res.status(200).json(result);
    }
});

module.exports = router;