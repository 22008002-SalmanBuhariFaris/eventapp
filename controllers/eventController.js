const db = require('../models/db');

const createEvent = (req, res) => {
    const { name, date, time, location, description } = req.body;
    const userId = req.user.id;
    const query = 'INSERT INTO events (user_id, name, date, time, location, description) VALUES (?, ?, ?, ?, ?, ?)';
    db.query(query, [userId, name, date, time, location, description], (err, results) => {
        if (err) throw err;
        res.redirect(`/eventDetail.html?eventId=${results.insertId}`);
    });
};

const getEvents = (req, res) => {
    const userId = req.user.id;
    const query = 'SELECT * FROM events WHERE user_id = ?';
    db.query(query, [userId], (err, results) => {
        if (err) throw err;
        res.json(results);
    });
};

const getEvent = (req, res) => {
    const eventId = req.params.id;
    const query = 'SELECT * FROM events WHERE id = ?';
    db.query(query, [eventId], (err, results) => {
        if (err) throw err;
        res.json(results[0]);
    });
};

module.exports = {
    createEvent,
    getEvents,
    getEvent
};
