import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "bootstrap/dist/css/bootstrap.css";
import * as serviceWorker from './serviceWorker';
const express= require("express");
const router = express.Router();
const nodemailer= require("nodemailer");
const cors = require("cors");
const creds= require("./components/config");

const transport = {
  host: "google.example.com",
  port: 587,
  auth:{
    user: creds.USER,
    pass: creds.PASS
  }
}

const transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take messages")
  }
});

router.post("/send", (req, res, next) => {
  const name= req.body.name
  const email= req.body.email
  const message= req.body.message
  const content = `name: ${name} \n email: ${email} \n message: ${message}`

const mail = {
  from: name,
  to: "crystalwatkins428@gmail.com",
  subject: "New Message From Portfolio Contact Form",
  text: content
}
transporter.sendMail(mail, (err, data) => {
  if(err) {
    res.json({
      status: "fail"
    })
  } else {
    res.json({
      status: "success"
    })
  }
})
})

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

serviceWorker.unregister();
const app = express()
app.use(cors())
app.use(express.json())
app.use("/", router)
app.listen(3002)