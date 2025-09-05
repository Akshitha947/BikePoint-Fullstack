const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');


router.get('/test', (req, res) => {
  res.json({ message: 'Bookings API is active' });
});

router.get('/', async (req, res) => {
  try {
    
    const bookings = await Booking.find().sort({ date: -1 });
    res.json(bookings);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

router.post('/', async (req, res) => {
  try {
    const newBooking = new Booking({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      bike: req.body.bike,
      date: req.body.date
    });

    const booking = await newBooking.save();
    res.status(201).json(booking);

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;