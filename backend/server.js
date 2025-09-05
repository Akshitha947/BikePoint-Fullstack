const express = require('express');
require('dotenv').config();
const connectDB = require('./config/db'); 
const cors = require('cors'); 

const app = express();


connectDB(); 
app.use(cors());



app.use(express.json());


const PORT = process.env.PORT || 5000;



app.use('/api/bookings', require('./routes/bookingRoutes'));
app.use('/api/auth', require('./routes/authRoutes'));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});