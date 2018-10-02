const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Todo = require('../models/todo');

router.get('/', (req, res ,next) => {
    Todo.find().find()
        .exec()
        .then(docs => {
            console.log(docs);
            res.status(200).json(docs);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        });
});

router.post('/', (req, res ,next) => {
    const todo = new Todo({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        task: req.body.task
    });
    todo.save().then(result => {
        console.log(result);
    }).catch(err => {console.log(err);res.status(500).json({error: err})});

});

router.get('/:todoId', (req, res, next) => {
    const id = req.params.todoId;
    Todo.findById(id).exec()
        .then(doc => {console.log(doc);
        if (doc) {
            res.status(200).json(doc);
        } else {
            res.status(404).json({message: 'No Valid Entry Found'})
        }

    }).catch(err => {
        console.log(err);
        res.status(500).json({error: err});
    });
});

router.patch('/:todoId', (req, res, next) => {
    const id = req.params.todoId;
    const updateOps = {};
    for (const ops of req.body) {
        updateOps[ops.propName] = ops.value
    }
    Todo.update({_id: id}, {$set: {name: req.body.newName, task: req.body.newTask }});
});

router.delete('/:todoId', (req, res, next) => {
    const id = req.params.todoId;
    Todo.remove({_id: id})
        .exec()
        .then(res => {
            res.status(200).json(result);
        })
        .catch(err => {
            console.log(err);
        });
});

module.exports = router;