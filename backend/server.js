const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const cartRoutes = require('./routes/cartRoutes');
const authRoutes = require('./routes/authRoutes'); // 로그인/회원가입

require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: 'http://localhost:3000', // Next.js 주소
    credentials: true,
  })
);

app.use('/api/auth', authRoutes);
app.use('/api/cart', cartRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() =>
    app.listen(5001, () => console.log('Server running on port 5001'))
  )
  .catch((err) => console.error(err));
