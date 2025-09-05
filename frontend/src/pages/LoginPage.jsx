const express = require('express');
require('dotenv').config();
const connectDB = require('./config/db');
const cors = require('cors'); 
const path = require('path');

const app = express();
connectDB();


const corsOptions = {
  origin: 'https://stupendous-smakager-127e92.netlify.app'
};
app.use(cors(corsOptions));


app.use(express.json());

app.use('/api/bookings', require('./routes/bookingRoutes'));
app.use('/api/auth', require('./routes/authRoutes'));

app.use(express.static(path.join(__dirname, '../frontend/dist')));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../frontend/dist', 'index.html'));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});