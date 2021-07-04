const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const session = require('./routes/api/session');
const yelp = require('./routes/api/yelp');
const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use('/session', session);
app.use('/yelp/', yelp);

const port = process.env.PORT || 8082;
app.listen(port, () => console.log(`Server running on port ${port}`));
