const express = require('express');
require('dotenv').config();
const connectDB = require('./config/db');
const cors = require('cors');

const app = express();


connectDB();


app.use(cors({ origin: 'https://stupendous-smakager-127e92.netlify.app' }));

app.use(express.json());


app.get('/', (req, res) => {
  res.send('BikePoint API is running...');
});


app.use('/api/bookings', require('./routes/bookingRoutes'));
app.use('/api/auth', require('./routes/authRoutes'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});