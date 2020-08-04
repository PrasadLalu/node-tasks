const connection = require('../config/connection');

// Add new task
exports.add = (req, res) => {
    const {title, priority, description} = req.body;
    
    const query = `INSERT INTO tasks(title, priority, descriptions) values(?, ?, ?)`;
    const data = [`'${title}'`, `${priority}`, `'${description}'`]

    console.log(data);
    connection.query(query, data, (error, result) => {
        if (error) {
            return res.status(500).send({ success: false, error: error.message });
        }
        res.status(201).send({
            success: true
        });
    });
}

// List all tasks
exports.getTasks = async (req, res) => {
    const dbQuery = 'SELECT * from tasks';

    connection.query(dbQuery, (error, results, fields) => {
        if (error) {
            return res.status(500).send({ success: false, error: error.message });
        }
        res.status(200).send({
            success: true,
            data: results
        });
    });
    connection.end();   
}

// List task
exports.getTask = (req, res) => {
    const taskId = req.params.id;
    const dbQuery = `SELECT * from tasks where task_id = ${taskId}`;

    connection.query(dbQuery, (error, task) => {
        if (error) {
            return res.status(500).send({ success: false, error: error.message });
        }
        res.status(200).send({
            success: true,
            data: task
        });
    });   
    connection.end(); 
}

// Update task
exports.updateTask = (req, res) => {
    const taskId = req.params.id;
    const priority = req.body.priority;
    const dbQuery = `UPDATE tasks SET priority = ${priority} where task_id = ${taskId}`;
    
    connection.query(dbQuery, (error, task) => {
        if (error) {
            return res.status(500).send({ success: false, error: error.message });
        }
        res.status(200).send({
            success: true
        });
    });
    connection.end();
}

// Delete task
exports.deleteTask = (req, res) => {
    const taskId = req.params.id;
    const dbQuery = `DELETE FROM tasks where task_id = ${taskId}`;

    connection.query(dbQuery, (error, task) => {
        if (error) {
            return res.status(500).send({ success: false, error: error.message });
        }
        res.status(200).send({
            success: true
        });
    });
    connection.end();
}