const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
const mongoURI = 'mongodb+srv://Supriya:HemanthSupriya27@cluster0.jp1jcga.mongodb.net/License?retryWrites=true&w=majority';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.log('MongoDB connection error:', err.message, err.stack);
});

// Routes
const authRoutes = require('./routes/auth');
const hotelRoutes = require('./routes/hotels'); 
const reservationRoutes = require('./routes/reservations'); 

app.use('/api/auth', authRoutes);
app.use('/api/hotels', hotelRoutes);
app.use('/api/reservations', reservationRoutes); 

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
