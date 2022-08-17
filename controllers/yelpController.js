import axios from "axios";
import "dotenv/config";

const MAX_SEARCH_LIMIT = 20;

const yelp = axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: { Authorization: `Bearer ${process.env.YELP_KEY}` },
});

const searchYelp = async (req, res) => {
  try {
    let response = await yelp.get("/search", {
      params: {
        term: req.query.term,
        location: req.query.location,
        limit: req.query.limit ? req.query.limit : MAX_SEARCH_LIMIT,
      },
    });
    res.status(200).send(response.data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export default { searchYelp };