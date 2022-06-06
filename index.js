// requerimientos necesarios: Express, MongoDB Cloud, ENV, Routes y CORS
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const booksRoutes = require("./routes/books.js");
const cors = require('cors');

const app = express();
const port = 9000;

// middleware
app.use(cors());
app.use(express.json());
app.use('/api', booksRoutes);

// conectarme a la base de datos
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("Estoy conectado a la base de datos!"))
    .catch((error) => console.log(error))

app.listen(port, () => console.log('server listering on port ' + port));

