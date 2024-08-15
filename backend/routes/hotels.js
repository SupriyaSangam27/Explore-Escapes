const express = require('express');
const router = express.Router();
const Hotel = require('../models/Hotel');

// POST route to add hotels
router.post('/add', async (req, res) => {
  try {
    const hotels = req.body;
    if (!Array.isArray(hotels)) {
      return res.status(400).json({ error: 'Invalid data format. Expected an array of hotels.' });
    }
    await Hotel.insertMany(hotels);
    res.status(200).json({ message: 'Hotels added successfully!' });
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: 'Error adding hotels' });
  }
});

// POST route to search hotels
router.post('/search', async (req, res) => {
  try {
    const { location } = req.body;
    const hotels = await Hotel.find({ location });

    if (hotels.length === 0) {
      return res.status(404).json({ message: 'Sorry, no hotels found for the specified location.' });
    }

    res.status(200).json(hotels);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching hotels' });
  }
});

module.exports = router;
