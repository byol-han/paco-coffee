const jwt = require('jsonwebtoken');
module.exports = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) return res.status(401).json({ message: 'Unauthorized' });
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // JWT에서 id 추출
    next();
  } catch {
    res.status(403).json({ message: 'Invalid token' });
  }
};
