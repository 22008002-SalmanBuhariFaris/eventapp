const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const db = require('./models/db');
const router = require('./routes/index');

dotenv.config();

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser()); 
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files

// Routes
app.use('/', router);

// Serve HTML files directly
app.get('/index.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/index.html'));
});

app.get('/register.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/register.html'));
});

app.get('/login.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/login.html'));
});

app.get('/events.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/events.html'));
});

// Database Connection
db.connect(err => {
    if (err) {
        console.error('Error connecting to the database:', err);
        process.exit(1);
    } else {
        console.log('Connected to the database');
        app.listen(port, () => {
            console.log(`Server running on port ${port}`);
        });
    }
});
