const express = require('express');
const cors = require('cors');
const path = require('path');

// ── Dialogflow ES Configuration ────────────────────────────────────
const PROJECT_ID    = 'so-nterior-website';
const KEY_FILE_PATH = path.join(__dirname, 'so-nterior-website-a66085f17863.json');
// ───────────────────────────────────────────────────────────────────


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

// Dialogflow ES Chat Proxy
// Requires: npm install @google-cloud/dialogflow uuid
app.post('/api/chat', async (req, res) => {
  try {
    const { message, sessionId } = req.body;
    if (!message) return res.status(400).json({ error: 'message is required' });

    // Lazy-load to avoid crash if package not yet installed
    const dialogflow = require('@google-cloud/dialogflow');
    const { v4: uuidv4 } = require('uuid');

    const sessionClient = new dialogflow.SessionsClient({
      keyFilename: KEY_FILE_PATH,
    });

    const session = sessionClient.projectAgentSessionPath(
      PROJECT_ID,
      sessionId || uuidv4()
    );

    const request = {
      session,
      queryInput: {
        text: { text: message, languageCode: 'en-US' },
      },
    };

    const [response] = await sessionClient.detectIntent(request);
    const result = response.queryResult;

    res.json({
      fulfillmentText: result.fulfillmentText,
      intent: result.intent ? result.intent.displayName : null,
      confidence: result.intentDetectionConfidence,
    });
  } catch (err) {
    console.error('Dialogflow error:', err.message);
    res.status(500).json({ error: 'Dialogflow request failed', detail: err.message });
  }
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
