const express = require('express');
const app = express();
const envelopeRoutes = require('./routes/envelope');

app.use(express.json());
app.use('/api/envelope',envelopeRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Test the server by sending a GET request to http://localhost:3000/api/envelope