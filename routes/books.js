const express = require('express');
const bookSchema = require("./../models/book");
const router = express.Router();

// =======================================
// ============ CREATE BOOK ==============
// =======================================
router.post("/books", (req, res) => {
    const book = bookSchema(req.body);
    if (req.body.title != " ") {
        book
            .save()
            .then((data) => {
                res.json(data)
            })
            .catch((error) => res.status(400).send("Bad request"))
    } else {
        res.status(400).send("Bad request")
    }
});

// =======================================
// ============ GET BOOKS ================
// =======================================
router.get("/books", (req, res) => {
    bookSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({mesagge: error}));
});

// =======================================
// ============ GET A BOOK ===============
// =======================================
router.get("/books/:id", (req, res) => {
    const {id} = req.params;
    bookSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({mesagge: error}));
});

// =======================================
// ============ UPDATE A BOOK ============
// =======================================
router.put("/books/:id", (req, res) => {
    const {id} = req.params;
    const {title} = req.body;

    bookSchema
        .updateOne({_id: id}, {$set: {title}})
        .then((data) => res.json(data))
        .catch((error) => res.status(400).send("Bad request"))
});


// =======================================
// ============ DELETE A BOOK ============
// =======================================
router.delete("/books/:id", (req, res) => {
    const {id} = req.params;

    bookSchema
        .remove({_id: id})
        .then((data) => res.json(data))
        .catch((error) => res.json({mesagge: error}));
});

module.exports = router;