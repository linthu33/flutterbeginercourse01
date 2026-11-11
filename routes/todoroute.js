// routes/todoRoutes.js
const express = require('express');
const router = express.Router();
const { getTodos } = require('../contoller/todoController');

router.get('/todos', getTodos);

module.exports = router;