const express = require('express');
const morgan = require('morgan');
require('dotenv').config();

const app = express();
const port = process.env.APP_PORT || 3001;

app.use(morgan('combined'));
app.use(express.json());
app.use(express.static('src/public'));

const qaUser = process.env.PORTAL_QA_USER || 'guest';

app.get('/api/status', (req, res) => {
  res.json({
    service: 'logistiq-portal',
    status: 'ok',
    environment: process.env.NODE_ENV || 'unknown',
    qa_contact: qaUser
  });
});

app.post('/api/login', (req, res) => {
  const { username, password } = req.body || {};

  if (username === process.env.PORTAL_QA_USER && password === process.env.PORTAL_QA_PASSWORD) {
    return res.json({ ok: true, role: 'qa-operator', message: 'Welcome to the logistics test portal.' });
  }

  return res.status(401).json({ ok: false, error: 'invalid credentials' });
});

app.listen(port, () => {
  console.log(`Logistiq Portal listening on port ${port}`);
});
