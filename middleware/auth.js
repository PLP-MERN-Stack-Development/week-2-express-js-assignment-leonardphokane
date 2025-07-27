module.exports = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];
  if (token === process.env.API_KEY) {
    return next();
  }
  res.status(401).json({ message: 'Unauthorized' });
};
