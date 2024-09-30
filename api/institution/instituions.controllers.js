const express = require("express");

const router = express.Router();

const institutionsHandler = require("./institutions.handler");

router.get('/', async (req, res) => {
    res.json(await institutionsHandler.getInstitutions());
})

router.get('/:id', async (req, res) => {
    res.json(await institutionsHandler.getInstitution(req.params.id));
})

router.post('/', async (req, res) => {
    res.json(await institutionsHandler.createInstitution(req.body));
})

router.put('/:id', async (req, res) => {
    res.json(await institutionsHandler.editInstitution(req.body, req.params.id));
})

router.delete('/:id', async (req, res) => {
    res.json(await institutionsHandler.removeInstitution(req.params.id));
})

module.exports = router;
