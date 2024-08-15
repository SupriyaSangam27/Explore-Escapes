const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
  guestName: { type: String, required: true },
  email: { type: String, required: true },
  checkInDate: { type: Date, required: true },
  checkOutDate: { type: Date, required: true },
  roomNumber: { type: Number, required: true }  // Add this if roomNumber is required
});

module.exports = mongoose.model('Reservation', reservationSchema);
