const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() =>
    app.listen(5001, () => console.log('Server started on port 5001'))
  )
  .catch((err) => console.error(err));
