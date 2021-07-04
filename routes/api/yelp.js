const axios = require('axios');
const express = require('express');
const router = express.Router();
const dotenv = require('dotenv');
const MAX_SEARCH_LIMIT = 20;
dotenv.config();

const yelp = axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: { 'Authorization': `Bearer ${process.env.YELP_KEY}`}
})

router.get('/',  (req, res) => {
    res.status(200)
});

router.get('/search', async (req, res) => {
    try {
        console.log(req.query.limit);
        let response = await yelp.get('/search', {
            params: {
                term: req.query.term,
                location: req.query.location,
                limit: req.query.limit ? req.query.limit : MAX_SEARCH_LIMIT,
            }
        });
        res.status(200).send(response.data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;