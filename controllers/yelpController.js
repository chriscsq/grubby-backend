import axios from "axios";
import "dotenv/config";

const MAX_SEARCH_LIMIT = 20;
const DEFAULT_RADIUS = 1600;
const SORT_BY = "distance";

const yelp = axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: { Authorization: `Bearer ${process.env.YELP_KEY}` },
});

const searchYelp = async (req, res) => {
  try {
    let response = await yelp.get("/search", {
      params: {
        categories: req.query.categories,
        latitude: req.query.latitude,
        longitude: req.query.longitude,
        limit: req.query.limit ? req.query.limit : MAX_SEARCH_LIMIT,
        radius: req.query.radius ? req.query.radius : DEFAULT_RADIUS,
        sort_by: SORT_BY,
      },
    });
    res.status(200).send(response.data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export default { searchYelp };
