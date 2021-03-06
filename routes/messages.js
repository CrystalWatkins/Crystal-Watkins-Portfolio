const ash = require("express-async-handler");
const express = require("express");
const router = express.Router();
const sendMessage= require("./routes/nodeMailer");

router.post("/", ash(async (req, res) => {
    const {name, email, message} = req.body;
    const result= await sendMessage(email, message, name);
    if(!result) res.status(400).send({ sent: false, message: "Error Sending Message" });

    res.send({ sent: true, message: "Message sent successfully"});
}));

module.exports = router