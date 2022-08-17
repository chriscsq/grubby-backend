import express from "express";
import router from "./routes/index.js";

import connectDB from "./config/db.js";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use("/", router);

const port = process.env.PORT || 8082;
app.listen(port, () => console.log(`Server running on port ${port}`));
