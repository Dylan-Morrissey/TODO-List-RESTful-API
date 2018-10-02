const express = require('express');
const router = express.Router();

router.get('/', (req, res ,next) => {
    res.status(200).json({
            message: 'List were fetched'
        }
    )
});

router.post('/', (req, res, next) => {
    const list = {
        todoId: req.body.todoId,

    };
    res.status(201).json({
        message: 'List were created',
        list: list
    });
});

router.get('/:listId', (req, res, next) => {
    res.status(200).json({
        message: 'List Details',
        listId: req.params.listId
    });
});

router.delete('/:listId', (req, res, next) => {
    res.status(200).json({
        message: 'List Deleted',
        listId: req.params.listId
    });
});

module.exports = router;