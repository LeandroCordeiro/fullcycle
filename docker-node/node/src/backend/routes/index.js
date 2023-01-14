const express = require('express');
const peopleController = require('./controllers/people');

const router = express.Router();

router.get('/people', async (req, res) => {
    const people = await peopleController.getAllPeople();
    res.json(people);
});

module.exports = router;
