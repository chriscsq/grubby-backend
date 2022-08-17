import express from "express";
import sessionRoutes from "./sessionRoutes.js";
import yelpRoutes from "./yelpRoutes.js";

const app = express();
app.use(express.json());

app.use('/session', sessionRoutes);
app.use('/yelp', yelpRoutes);

export default app;