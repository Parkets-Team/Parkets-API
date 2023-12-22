const express = require('express');
const router = express.Router();

// GET endpoint to check parking space availability
router.get('/availability', (req, res) => {
    // Logic to check parking space availability
    res.send('Informasi mengenai space parkir');
});

module.exports = router;
