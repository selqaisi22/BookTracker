const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

require('./config/mongoose.config');

app.use(cors({
    credentials: true, origin: 'http://localhost:3000'
}));
app.use(express.json());
app.use(cookieParser());

require('./routes/user.routes')(app);
require('./routes/book.routes')(app);

app.listen(8000, () => console.log(`Listening on port: 8000`));