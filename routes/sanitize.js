require('dotenv').config();

router.post('/sanitize', (req, res) => {
  const receivedToken = req.headers.authorization?.replace('Bearer ', '')?.trim();
  const storedToken = process.env.AUTH_TOKEN?.trim();

  if (receivedToken === storedToken) {
    res.status(200).json({ message: 'Token matched! 🟢', token: req.body.token });
  } else {
    res.status(401).json({ error: 'Invalid token 🔴' });
  }
});
