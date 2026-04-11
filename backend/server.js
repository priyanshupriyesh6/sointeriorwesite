const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve frontend
app.use(express.static(path.join(__dirname, '..', 'frontend')));

// Contact form
app.post('/api/contact', (req, res) => {
  const { name, email, phone, projectType, subject, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: 'Name, email, and message are required.' });
  }
  console.log('━━━ New Contact Submission ━━━');
  console.log(`Name: ${name} | Email: ${email} | Phone: ${phone || '-'}`);
  console.log(`Project: ${projectType || '-'} | Subject: ${subject || '-'}`);
  console.log(`Message: ${message}`);
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  res.json({ success: true, message: 'Thank you! We will get back to you soon.' });
});

// Newsletter
app.post('/api/newsletter', (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ success: false, error: 'Email required.' });
  console.log(`📧 Newsletter subscriber: ${email}`);
  res.json({ success: true, message: 'Subscribed!' });
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', server: 'SO Interiors Backend', timestamp: new Date().toISOString() });
});

// SPA fallback
app.get('/{*path}', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'frontend', 'index.html'));
});

if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`\n✨ SO Interiors Server running!`);
    console.log(`🌐 http://localhost:${PORT}\n`);
  });
}

// Export for Vercel serverless functions
module.exports = app;
