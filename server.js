// Book a Demo endpoint
app.post('/api/book-demo', (req, res) => {
  const { name, organisation, email, date } = req.body;
  // In a real app, you would integrate with a calendar API here
  if (name && organisation && email && date) {
    res.json({ message: 'Demo booked', name, organisation, email, date });
  } else {
    res.status(400).json({ message: 'Missing required fields' });
  }
});
// Sign In endpoint
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  // In a real app, you would check credentials here
  if (email && password) {
    res.json({ message: 'Sign in successful', email });
  } else {
    res.status(400).json({ message: 'Invalid credentials' });
  }
});
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.post('/api/contact', (req, res) => {
  // Here you would process/store/send the contact form data
  res.json({ message: 'Contact form received', data: req.body });
});

app.post('/api/register', (req, res) => {
  // Here you would handle user registration logic
  res.json({ message: 'User registration received', data: req.body });
});

const PORT = 5001;
app.listen(PORT, () => {
  console.log(`Backend API running on http://localhost:${PORT}`);
});
