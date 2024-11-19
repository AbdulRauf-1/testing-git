const express = require('express');
const router = express.Router();

router.get('/health', (req, res) => {
  res.status(200).json({ message: 'API is healthy!' });
});

router.get('/users', (req, res) => {
    res.status(200).json({ users: ['Alice', 'Bob'] });
  });
  

module.exports = router;
