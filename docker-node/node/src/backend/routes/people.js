const express = require('express');
const router = express.Router();
const db = require('../models/people');

router.get('/', async (req, res) => {
  try {
    const [results, fields] = await db.query('SELECT * FROM people');
    res.json(results);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

router.post('/', async (req, res) => {
  try {
    const { name } = req.body;
    const [results, fields] = await db.query('INSERT INTO people (name) VALUES (?)', [name]);
    res.json(results);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

module.exports = router;
