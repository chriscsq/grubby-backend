const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const session = require('./routes/api/sessions/session');

const app = express();
app.use(cors());
app.use(express.json());
connectDB();


app.use('/session', session)
const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));
