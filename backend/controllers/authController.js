const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '7d' });
};

exports.register = async (req, res) => {
  console.log('BODY', req.body);
  const { email, password } = req.body;

  try {
    const exists = await User.findOne({ email });
    console.log('EXISTS?', exists);
    if (exists) return res.status(409).json({ message: 'User exists' });

    const hashed = await bcrypt.hash(password, 12);
    console.log('HASHED', hashed);
    const user = await User.create({ email, password: hashed });
    console.log('CREATED USER', user);
    const token = createToken(user._id);
    console.log('TOKEN', token);
    res.cookie('token', token, {
      httpOnly: true,
      secure: false,
      sameSite: 'lax',
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.status(201).json({ id: user._id, email: user.email });
  } catch (err) {
    console.error('REGISTER ERROR', err);
    res.status(500).json({ message: 'Register error' });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ message: 'Invalid credentials' });
    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).json({ message: 'Invalid credentials' });
    const token = createToken(user._id);
    res.cookie('token', token, {
      httpOnly: true,
      secure: false,
      sameSite: 'lax',
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    res.json({ id: user._id, email: user.email });
  } catch (err) {
    res.status(500).json({ message: 'Login error' });
  }
};

exports.logout = (req, res) => {
  res.clearCookie('token').json({ message: 'Logged out' });
};
exports.getMe = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password'); // 패스워드는 제외
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user); // 이메일, 이름 등 반환
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
