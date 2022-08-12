const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const express = require("express");
const app = express();
app.use(express.json());

const { postMessage, putMessage, getMessage, deleteMessage } = require("./controllers/messages_controller");

//////////////////////////////////////////////////////////////////

const baseUrl = "/api/messages";

app.get(`${baseUrl}`, getMessage);
app.post(`${baseUrl}`, postMessage);
app.put(`${baseUrl}/:id`, putMessage);
app.delete(`${baseUrl}/:id`, deleteMessage);

//////////////////////////////////////////////////////////////////

const port = +process.env.PORT || 3000;
app.listen(port, () => console.log(`App running on port:`, port));
