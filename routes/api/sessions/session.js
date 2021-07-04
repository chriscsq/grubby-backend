const express = require('express');
const router = express.Router();

const Session = require('../../../models/session');

// @route GET api/session
// @description Gets all sessions 
// @access Public
router.get('/', async (req, res) => {
    try {
        const sessions = await Session.find()
        res.json(sessions);
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// @route get api/books
// @description add/save book
// @access Public
router.post('/create', async (req, res) => {
    const session = new Session({
        sessionId: req.body.sessionId,
        users: req.body.users,
        favorites: req.body.favorites,
        tags: req.body.tags,
        price: req.body.price
    })
    try {
        const newSession = await session.save()
        res.status(201).json(session);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
})


module.exports = router;