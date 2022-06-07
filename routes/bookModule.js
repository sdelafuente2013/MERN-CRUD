const dotenv = require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const booksRoutes = require("./books");
const cors = require('cors');
const app = express();
const port = 9000;

module.exports = {
    dotenv,
    express,
    mongoose,
    booksRoutes,
    cors,
    app,
    port
}

