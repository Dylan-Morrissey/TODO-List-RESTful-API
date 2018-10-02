const express = require('express');
const router = express.Router();

router.get('/', (req, res ,next) => {
    res.status(200).json({
            message: 'Handling GET requests to /todo'
        }
    )
});

router.post('/', (req, res ,next) => {
    res.status(201).json({
            message: 'Handling POST requests to /todo'
        }
    )
});

router.get('/:todoId', (req, res, next) => {
    const id = req.params.todoId;
    if (id === 'special') {
        res.status(200).json({
            message: 'You Discovered the special ID',
            id: id
        });
    }else {
        res.status(200).json({
            message: 'You Passed an ID'
        });
    }
});

router.patch('/:todoId', (req, res, next) => {
   res.status(200).json({
       message:'Updated todo'
   });
});

router.delete('/:todoId', (req, res, next) => {
    res.status(200).json({
        message:'Deleted todo'
    });
});

module.exports = router;