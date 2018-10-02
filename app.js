const express = require('express');
const app = express();

const todoRoutes = require('./api/routes/todo');
const listRoutes = require('./api/routes/list');

app.use('/todo', todoRoutes);
app.use('/list', listRoutes);

module.exports = app;
