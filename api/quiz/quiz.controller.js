const express = require("express");

const router = express.Router();

const quizHandler = require("./quiz.handler");

router.get('/', async (req, res) => {
    res.json(await quizHandler.getAllQuiz());
})

router.get('/:id', async (req, res) => {
    res.json(await quizHandler.getQuiz(req.params.id));
})

router.post('/', async (req, res) => {
    res.json(await quizHandler.createQuiz(req.body));
})

router.put('/:id', async (req, res) => {
    res.json(await quizHandler.editQuiz(req.body, req.params.id));
})

router.delete('/:id', async (req, res) => {
    res.json(await quizHandler.removeQuiz(req.params.id));
})

module.exports = router;
