require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const booksRoutes = require("./routes/books");
const cors = require('cors');
const app = express();
const port = 9000;

// Middleware
app.use(cors());
app.use(express.json());
app.use('/api', booksRoutes);

// Conexión con la base de datos
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("¡Conexión exitosa con la base de datos!"))
    .catch((error) => console.log(error))

app.listen(port, () => console.log('Server escuchando en el puerto: ' + port));

module.exports = app;
