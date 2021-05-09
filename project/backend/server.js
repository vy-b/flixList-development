const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const routesUrls = require('./routes/routes');
const cors = require('cors');

const PORT  = process.env.PORT || 3001;

dotenv.config();

mongoose.connect(process.env.MONGODB_URI || process.env.DATABASE_ACCESS, {useNewUrlParser:true, useUnifiedTopology: true}, () => console.log("Database connected"))

app.use(express.json());
app.use(cors());
app.use('/', routesUrls);

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('../build'))
    // Express serve up index.html file if it doesn't recognize route
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
    });
}
app.listen(PORT, () => console.log("Server is running on localhost:3001."));