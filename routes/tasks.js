const Router = require('express').Router();
const taskControllers = require('../controllers/tasks.js');

// find
Router.get('/', taskControllers.index);

// create
Router.post('/create', taskControllers.create);

// update
Router.put('/update/:id', taskControllers.update);

// edit
Router.get('/update/:id', taskControllers.edit);
Router.put('/update/:id', taskControllers.update);

// delete
Router.get('/delete/:id', taskControllers.delete);

module.exports = Router;