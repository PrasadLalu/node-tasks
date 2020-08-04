const express = require('express');
const router = express.Router();
const { 
    add, 
    getTasks, 
    getTask, 
    updateTask,
    deleteTask } = require('../controllers/tasks');

router
    .route('/')
    .post(add)
    .get(getTasks);

router
    .route('/:id')
    .get(getTask)
    .patch(updateTask) 
    .delete(deleteTask);


module.exports = router;