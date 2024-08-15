const mongoose = require('mongoose');

const HotelSchema = new mongoose.Schema({
  name: { type: String, required: true },
  imgUrl: { type: String, required: true },
  distance: { type: String, required: true },
  features: { type: String, required: true },
  rating: { type: Number, required: true },
  price: { type: Number, required: true },
  location: { type: String, required: true },
  dateAvailable: {
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true }
  },
  options: {
    adult: { type: Number, required: true },
    children: { type: Number, required: true },
    room: { type: Number, required: true }
  }
});

module.exports = mongoose.model('Hotel', HotelSchema);
