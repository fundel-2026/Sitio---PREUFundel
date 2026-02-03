const express = require('express');
const bodyParser = require('body-parser');
const crypto = require('crypto');
const https = require('https');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors()); // Allow requests from your frontend

// CONFIGURATION
const PIXEL_ID = '1929004447690267';
const ACCESS_TOKEN = 'EAAQoOdFq2ZCQBQqPWZCB1YpJiyVmjOpo4ZA7E1LrkDPfKzmoFZB40VT9mZBGBMqQGZAZBQ696VdweYt03P3oFVuZBnZAffg9Ur2hhqoj0tRcMpDZA0zlBePTNZAV8GcbZB3uhPJX5Sg6MQuHZAwnOLI6vLnK4N4Q2h0ZCVGBsqfd7AMSOcjP5od2cmTCrjsPvgYeYBoAZDZD';

// Helper: SHA-256 Hashing for User Data
function hashData(data) {
    if (!data) return null;
    return crypto.createHash('sha256').update(data.trim().toLowerCase()).digest('hex');
}

app.post('/api/lead', (req, res) => {
    const { email, phone, firstName, lastName, eventId, eventSourceUrl } = req.body;

    const eventData = {
        "data": [
            {
                "event_name": "Lead",
                "event_time": Math.floor(Date.now() / 1000),
                "event_id": eventId, // Deduplication key
                "event_source_url": eventSourceUrl,
                "action_source": "website",
                "user_data": {
                    "em": [hashData(email)],
                    "ph": [hashData(phone)],
                    "fn": [hashData(firstName)],
                    "ln": [hashData(lastName)]
                    // Add client_ip and client_user_agent if captured on server-side real deployment
                }
            }
        ]
    };

    // Send to Meta Graph API
    const options = {
        hostname: 'graph.facebook.com',
        path: `/v19.0/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const request = https.request(options, (response) => {
        let data = '';
        response.on('data', (chunk) => {
            data += chunk;
        });
        response.on('end', () => {
            console.log('Meta API Response:', data);
            res.status(200).json({ success: true, meta_response: JSON.parse(data) });
        });
    });

    request.on('error', (error) => {
        console.error('Meta API Error:', error);
        res.status(500).json({ success: false, error: error.message });
    });

    request.write(JSON.stringify(eventData));
    request.end();
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`CAPI Server running on port ${PORT}`);
});
