const express = require('express');
const bookSchema = require("./../models/book");

const router = express.Router();

//Create (create a book)
router.post("/books", (req, res) => {
    const book = bookSchema(req.body);
    book
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({mesagge: error}));
});

//Read (get all book)
router.get("/books", (req, res) => {
    bookSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({mesagge: error}));
});

//Read (get a book)
router.get("/books/:id", (req, res) => {
    const {id} = req.params;
    bookSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({mesagge: error}));
});

//Update
router.put("/books/:id", (req, res) => {
    const {id} = req.params;
    const {title} = req.body;

    bookSchema
        .updateOne({_id: id}, {$set: {title}})
        .then((data) => res.json(data))
        .catch((error) => res.json({mesagge: error}));
});


// Delete
router.delete("/books/:id", (req, res) => {
    const {id} = req.params;

    bookSchema
        .remove({_id: id})
        .then((data) => res.json(data))
        .catch((error) => res.json({mesagge: error}));
});

module.exports = router;