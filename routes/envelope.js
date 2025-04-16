const express = require('express');
const router = express.Router();
const data = require('../data/envelopes');

router.get('/', (req, res) => {
    const envelopes = data.getAll();
    res.json(envelopes);
}
);

router.get('/:id', (req, res) => {
    const envelope = data.getById(parseInt(req.params.id));
    if (envelope) {
        res.json(envelope);
    } else {
        res.status(404).send('Envelope not found');
    }
}
);
router.post('/', (req, res) => {
    const { category, balance } = req.body;
    if (category && balance) {
        const newEnvelope = data.create(category, balance);
        res.status(201).json(newEnvelope);
    } else {
        res.status(400).send('Invalid envelope data');
    }
});

router.put('/:id', (req, res) => {
    const { category, balance } = req.body;
    const updatedEnvelope = data.update(parseInt(req.params.id), category, balance);
    if (updatedEnvelope) {
        res.json(updatedEnvelope);
    } else {
        res.status(404).send('Envelope not found');
    }
});

router.delete('/:id', (req, res) => {
    const deletedEnvelope = data.remove(parseInt(req.params.id));
    if (deletedEnvelope) {
        res.json(deletedEnvelope);
    } else {
        res.status(404).send('Envelope not found');
    }
}
);

router.post('/transfer', (req, res) => {
    const { fromId, toId, amount } = req.body;
    const result = data.transfer(fromId, toId, amount);
    if (result) {
        res.json(result);
    } else {
        res.status(400).send('Transfer failed');
    }
});

module.exports = router;