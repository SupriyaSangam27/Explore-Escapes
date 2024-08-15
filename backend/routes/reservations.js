const express = require('express');
const router = express.Router();
const Reservation = require('../models/Reservation'); // Ensure you have a Reservation model defined

// Add a reservation
router.post('/add', async (req, res) => {
  try {
    const { guestName, email, checkInDate, checkOutDate, roomNumber } = req.body;

    // Create a new reservation
    const newReservation = new Reservation({
      guestName,
      email,
      checkInDate,
      checkOutDate,
      roomNumber
    });

    // Save the reservation to the database
    const savedReservation = await newReservation.save();
    res.status(201).json(savedReservation);
  } catch (error) {
    console.error('Error saving reservation:', error.message, error.stack);
    res.status(500).json({ message: 'Failed to save reservation', error });
  }
});

module.exports = router;
