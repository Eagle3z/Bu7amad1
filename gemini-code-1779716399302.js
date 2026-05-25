const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());

// The URL Discord provides for your channel notification
const DISCORD_WEBHOOK_URL = 'https://discord.com/api/webhooks/YOUR_WEBHOOK_ID/YOUR_WEBHOOK_TOKEN';

// Route handled when a user joins/signs up
app.post('/api/join', async (req, res) => {
    const { username } = req.body;

    if (!username) {
        return res.status(400).json({ error: 'Username is required' });
    }

    // 1. Process the signup logic here (e.g., save to a database)
    console.log(`User ${username} has joined the application.`);

    // 2. Prepare a safe payload for Discord
    const discordMessage = {
        content: `🎉 **New User Alert!** ${username} has just joined the app!`
    };

    try {
        // 3. Send the notification to the webhook
        await axios.post(DISCORD_WEBHOOK_URL, discordMessage);
        
        // 4. Respond to the client successfully
        res.status(200).json({ message: 'Welcome message sent successfully!' });
    } catch (error) {
        console.error('Error sending message to Discord:', error.message);
        res.status(500).json({ error: 'Failed to send notification' });
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});