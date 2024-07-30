// routes/index.js
const express = require('express');
const path = require('path');
const userController = require('../controllers/userController');
const eventController = require('../controllers/eventController');
const authenticateToken = require('../middleware/auth');

const router = express.Router();

// User routes
router.post('/register', userController.register);
router.post('/login', userController.login);
router.post('/logout', authenticateToken, userController.logout);

// Event routes
router.post('/createEvent', authenticateToken, eventController.createEvent);
router.get('/events', authenticateToken, eventController.getEvents);
router.get('/events/:id', authenticateToken, eventController.getEvent);

// Serve HTML files directly
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/index.html'));
});

router.get('/register.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/register.html'));
});

router.get('/login.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/login.html'));
});

router.get('/events.html', authenticateToken, (req, res) => {
    res.sendFile(path.join(__dirname, '../views/events.html'));
});

router.get('/eventDetail.html', authenticateToken, (req, res) => {
    res.sendFile(path.join(__dirname, '../views/eventDetail.html'));
});

module.exports = router;
